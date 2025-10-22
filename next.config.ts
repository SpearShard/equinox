import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "Mechzilla Technologies.com",
      },
    ],
  },
};

export default nextConfig;
