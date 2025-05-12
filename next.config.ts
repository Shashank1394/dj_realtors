import type { NextConfig } from "next";

// Detect if we're building for GitHub Pages or another subpath deployment
const isSubpathDeployment = process.env.SUBPATH_DEPLOYMENT === "true";

// Define the base path (e.g., GitHub Pages repo name or Netlify subfolder)
const basePath = isSubpathDeployment ? "/dj_realtors" : "";
const assetPrefix = isSubpathDeployment ? "/dj_realtors/" : "";

const nextConfig: NextConfig = {
  // Support static export if needed
  output: "export",

  // Set base path and asset prefix for correct image and asset loading
  basePath,
  assetPrefix,

  // Allow images from internal or external domains
  images: {
    unoptimized: true, // Required for static export
  },

  // Optional: Add trailingSlash for better static export support
  trailingSlash: true,
};

export default nextConfig;
