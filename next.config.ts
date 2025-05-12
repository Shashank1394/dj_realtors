import type { NextConfig } from "next";

// Set your repo name here
const repoName = "dj_realtors";

const nextConfig: NextConfig = {
  output: "export", // Required for static HTML export
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true, // Important for static export to work
  },
  trailingSlash: true, // Helps with static hosting compatibility
};

export default nextConfig;
