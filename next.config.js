/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // Indica que vamos a exportar a HTML estático
  basePath: '/karla_web_public', // Debe coincidir con el nombre del repo

  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
