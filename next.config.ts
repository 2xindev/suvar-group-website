import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// Leaving this empty () tells the plugin to look for src/i18n/request.ts automatically.
// This is much safer on Windows.
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    /* config options here */
};

export default withNextIntl(nextConfig);