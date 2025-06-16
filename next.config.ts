/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // важно для GitHub Pages
  },
  basePath: "/elevator-simulator", // если твой репозиторий называется так
  assetPrefix: "/elevator-simulator/",
};

module.exports = nextConfig;
