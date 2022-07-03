/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // NOTE: 정적 가져오기 비활성화
    // disableStaticImages: true,
    formats: ["image/avif", "image/webp"],
    domains: ["localhost", "*"],
    // domains: ['assettest.soogong.co.kr'],
  },
};

module.exports = nextConfig;
