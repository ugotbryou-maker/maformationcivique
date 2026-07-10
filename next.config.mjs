/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
    ],
  },
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*\\.svg|.*\\.ico|.*\\.webp|.*\\.avif)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/modules',        destination: '/modulesciviques',        permanent: true },
      { source: '/modules/:path*', destination: '/modulesciviques/:path*', permanent: true },
      { source: '/langue',         destination: '/moduleslinguistiques',    permanent: true },
      { source: '/langue/:path*',  destination: '/moduleslinguistiques/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
