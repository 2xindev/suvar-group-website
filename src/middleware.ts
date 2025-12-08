import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // Desteklenen diller
    locales: ['en', 'tr', 'ar'],
    // Varsayılan dil
    defaultLocale: 'en',
    // URL'de her zaman dil kodu olsun mu? (as-needed: gerekirse koyar)
    localePrefix: 'as-needed'
});

export const config = {
    // Sistem dosyaları hariç her şeyi yakala
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};