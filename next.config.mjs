import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['example.com'],
        minimumCacheTTL: 60
    },
    experimental: {
        swcMinify: true,
        optimizeCss: true,
        serverSourceMaps: false
    },
    productionBrowserSourceMaps: false
};

export default withNextIntl(nextConfig);