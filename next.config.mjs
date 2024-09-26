/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_DATE: new Date().toLocaleDateString(),
  },
};

export default nextConfig;
