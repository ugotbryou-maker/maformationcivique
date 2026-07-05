/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
    ],
  },
  async redirects() {
    return [
      { source: '/modules',     destination: '/modulesciviques',     permanent: true },
      { source: '/modules/:path*', destination: '/modulesciviques/:path*', permanent: true },
      { source: '/langue',      destination: '/moduleslinguistiques', permanent: true },
      { source: '/langue/:path*',  destination: '/moduleslinguistiques/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
