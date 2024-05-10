FROM php:8.2.18-fpm

ARG ROOT_DIR=/var/www/html

# assign user to www and group to www-data
RUN groupadd --gid 1000 bblc-data && \
	useradd --uid 1000 bblc --gid bblc-data

# Install selected packages and other stuff
RUN apt-get update \
  && apt-get install -y build-essential zlib1g-dev default-mysql-client curl gnupg procps vim git unzip libzip-dev libpq-dev apt-utils

# php extension
RUN docker-php-ext-install zip pdo_mysql

# gd extension
RUN apt-get install -y \
		libfreetype-dev \
		libjpeg62-turbo-dev \
		libpng-dev \
	&& docker-php-ext-configure gd --with-freetype --with-jpeg \
	&& docker-php-ext-install -j$(nproc) gd

# MSSQL Driver Installation and PHP extension
ENV ACCEPT_EULA=Y
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
    && curl https://packages.microsoft.com/config/debian/11/prod.list > /etc/apt/sources.list.d/mssql-release.list \
    && apt-get update \
    && apt-get -y --no-install-recommends install msodbcsql17 unixodbc-dev \
    && pecl install sqlsrv-5.11.1 \
    && pecl install pdo_sqlsrv-5.11.1 \
    && echo "extension=pdo_sqlsrv.so" >> `php --ini | grep "Scan for additional .ini files" | sed -e "s|.*:\s*||"`/30-pdo_sqlsrv.ini \
    && echo "extension=sqlsrv.so" >> `php --ini | grep "Scan for additional .ini files" | sed -e "s|.*:\s*||"`/30-sqlsrv.ini
	
WORKDIR ${ROOT_DIR}

RUN rm -rf ${ROOT_DIR}/*

# copy project api
COPY --chown=bblc:bblc-data ./api ${ROOT_DIR}

# composer
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
  && composer --version

RUN composer install --ignore-platform-reqs

# clean up
RUN	apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

RUN chmod g+w -R storage/

EXPOSE 9000
CMD ["php-fpm"]