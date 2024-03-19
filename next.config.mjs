/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                port: '',
                pathname: '/api/**',
            },
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
