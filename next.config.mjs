/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputFileTracingExcludes: {
            '/*': ['./public/**/*.jpg', './public/**/*.png"'],
            '/**/*': ['./public/**/*.jpg', '"./public/**/*.png"'],
        },
    },
};

export default nextConfig;
