import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// Use the default plugin without arguments.
// It automatically looks for ./src/i18n/request.ts
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    /* config options here */
};

export default withNextIntl(nextConfig);