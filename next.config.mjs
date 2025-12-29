/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Desativa a otimização de imagens no export estático
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};
export default nextConfig;
