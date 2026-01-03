/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/owarihigashi-website",
  assetPrefix: "/owarihigashi-website/",

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
