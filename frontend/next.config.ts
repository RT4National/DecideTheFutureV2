import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: "sass",
    silenceDeprecations: ['legacy-js-api'],
  },
};

export default nextConfig;
