/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Genera sitio estático listo para GitHub Pages
  images: {
    unoptimized: true, // Evita errores si usas next/image
  },
  basePath: '/karla_web_public', // Tu repo de GitHub Pages
  assetPrefix: '/karla_web_public/', // Para assets como imágenes y audio
};

module.exports = nextConfig;
