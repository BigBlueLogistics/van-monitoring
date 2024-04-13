FROM node:20.10.0-slim as builder

ARG ROOT_APP_DIR=/var/www/html
WORKDIR $ROOT_APP_DIR

COPY ./app/src ./src
COPY ./app/public ./public
COPY ./app/.env-* \
    ./app/package.json \
    ./app/package-lock.json \
    ./app/pm2.config.js \
    ./app/next.config.js \
    ./app/tsconfig.json ./

RUN yarn install --network-timeout 120000 && \
    yarn cache clean

FROM node:20.10.0-alpine as main

ARG ROOT_DIR=/var/www/html
WORKDIR $ROOT_DIR

RUN apk add --no-cache libc6-compat

# Set timezone
RUN apk add tzdata
RUN cp /usr/share/zoneinfo/Asia/Manila /etc/localtime
RUN echo "Asia/Manila" > /etc/timezone

# Add `/app/node_modules/.bin` to $PATH
ENV PATH=$PATH:${ROOT_DIR}/node_modules/.bin
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder $ROOT_DIR ./

FROM main as app_dev

CMD ["yarn","start:dev"]

FROM main as app_prod

RUN mkdir -p .next
RUN chown node:node -R .next && \
    chmod 777 -R .next

CMD ["yarn","start:prod"]