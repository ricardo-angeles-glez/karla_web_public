/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Genera sitio estático
  basePath: '/karla_web_public', // TU REPO
  assetPrefix: '/karla_web_public/', // Para CSS, JS y assets
  images: {
    unoptimized: true, // Si usas next/image
  },
};

module.exports = nextConfig;