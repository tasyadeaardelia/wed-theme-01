/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'jova-admin.mantappdev.com',
            }
        ],
    },
};

export default nextConfig;
