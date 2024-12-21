/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enforces best practices and catches common errors
    swcMinify: true,      // Enables faster builds with SWC minifier
    images: {
        domains: ['avatar.iran.liara.run'], // List of domains for external images
    },
};

export default nextConfig;
