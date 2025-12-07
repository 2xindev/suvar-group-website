import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// BURASI ÖNEMLİ: Parantez içine dosya yolunu tam olarak yazıyoruz
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    /* config options here */
};

export default withNextIntl(nextConfig);