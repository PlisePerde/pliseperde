import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/basili-plise-perde",
        destination: "/baskili-plise-perde",
        permanent: true,
      },
      {
        source: "/basili-plise-perde/",
        destination: "/baskili-plise-perde/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
