/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io", "full-stack-ecommerce-clothing-web.vercel.app"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/**'
            }
        ]
    }
}

module.exports = nextConfig
