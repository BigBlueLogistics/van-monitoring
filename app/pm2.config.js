module.exports = {
  apps: [
    {
      name: 'next-dev',
      script: 'npm',
      args: 'run dev',
      env: {
        PORT: 6200,
      },
    },
    {
      name: 'next-prod',
      script: 'npm',
      args: 'run start',
      env: {
        PORT: 6210,
      },
    },
  ],
};
