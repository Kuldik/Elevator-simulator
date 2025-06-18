const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/elevator-simulator" : "",
  assetPrefix: isProd ? "/elevator-simulator/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
