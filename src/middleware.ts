import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'tr', 'ar'],
    defaultLocale: 'en',
    // DÜZELTME: 'as-needed' yerine 'always' yapıyoruz.
    // Böylece /en yazınca silinmeyecek, debugging kolaylaşacak.
    localePrefix: 'always'
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};