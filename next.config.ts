import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
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
      {
        source: "/ucretsiz-kesif",
        destination: "/kesif",
        permanent: true,
      },
      {
        source: "/ucretsiz-kesif/",
        destination: "/kesif/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
