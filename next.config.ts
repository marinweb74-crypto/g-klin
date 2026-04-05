import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/g-klin",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
