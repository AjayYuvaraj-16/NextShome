import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',          // Enables static export
  trailingSlash: true,       // Adds trailing slashes to URLs
  images: {
    unoptimized: true,       // Disables the Image Optimization API
  },
};

export default nextConfig;
