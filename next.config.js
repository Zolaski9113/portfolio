/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath : 'portfolio',
  images: {
    unoptimized: true,
  },
}

export default nextConfig