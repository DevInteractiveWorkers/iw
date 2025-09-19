/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iw-website.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
