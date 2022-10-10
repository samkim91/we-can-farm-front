/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // NOTE: 정적 가져오기 비활성화
    // disableStaticImages: true,
    formats: ["image/avif", "image/webp"],
    // domains: ["localhost", "*"],
    domains: [
      "localhost",
      "*",
      "https://weekanfarm.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
