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
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://embed.tawk.to https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' data:",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://embed.tawk.to https://www.google-analytics.com https://*.tawk.to wss://*.tawk.to",
              "frame-src 'self' https://www.youtube.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
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
