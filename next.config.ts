import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.sportsvideo.org",
      },
    ],
  },
};

export default nextConfig;
