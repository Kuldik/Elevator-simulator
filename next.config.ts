/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: isProd ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/elevator-simulator" : "",
  assetPrefix: isProd ? "/elevator-simulator/" : "",
};

module.exports = nextConfig;
