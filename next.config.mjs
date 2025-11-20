/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // SSG for Netlify
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  distDir: 'build',

  // SECURITY HEADERS (Add this block)
  async headers() {
    return [
      {
        source: '/:path*', // Apply to all pages
        headers: [
          // Prevent clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },

          // Prevent MIME type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },

          // Control referrer leaks
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

          // Block dangerous content
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self'",
              "style-src 'self' 'unsafe-inline'", // Needed for Tailwind/Inline CSS
              "img-src 'self' data: https:",
              "font-src 'self'",
              "connect-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "frame-ancestors 'none'",
            ].join('; '),
          },

          // Optional: HSTS (uncomment if using HTTPS)
          // { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
    ];
  },
};

export default nextConfig;