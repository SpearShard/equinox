import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "equinoxsdrones.com",
      },
    ],
  },
};

export default nextConfig;
