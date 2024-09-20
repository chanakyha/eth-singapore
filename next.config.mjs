/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "nouns.center",
            },
        ],
    },
};

export default nextConfig;
