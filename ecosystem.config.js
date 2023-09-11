module.exports = {
  apps: [
    {
      name: "ayaanqui.com",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env_production: {
        APP_ENV: "prod", // APP_ENV=prod
        NEXT_PUBLIC_GTAG: "G-V3SBXW0YP2",
        PUBLIC_GTAG: "G-V3SBXW0YP2",
      },
    },
  ],
};
