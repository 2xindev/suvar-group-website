import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'tr', 'ar'],
    defaultLocale: 'en',
    // BURASI ÇOK ÖNEMLİ: Bunu 'always' yaparsan URL her zaman /en, /tr şeklinde olur.
    // Bu, 404 hatalarını ve yönlendirme karmaşasını çözer.
    localePrefix: 'always'
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};