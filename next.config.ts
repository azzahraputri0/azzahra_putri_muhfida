import type { NextConfig } from "next";

const repoName = "azzahra_putri_muhfida";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  ...(isProd && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}`,
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;