/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export (required for Netlify)
  reactStrictMode: true,
  images: {
    unoptimized: true // If you're using next/image, this is needed for export
  },
  trailingSlash: true // Optional: adds trailing slashes to URLs (SEO friendly)
};

export default nextConfig;
