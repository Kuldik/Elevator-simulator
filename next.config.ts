/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/Elevator-simulator" : "",
  assetPrefix: isProd ? "/Elevator-simulator/" : "",
};

module.exports = nextConfig;
