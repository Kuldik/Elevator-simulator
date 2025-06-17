/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/elevator-simulator" : "",
  assetPrefix: isProd ? "/elevator-simulator/" : "",
};

module.exports = nextConfig;

