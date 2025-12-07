import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'tr', 'ar'],

    // Used when no locale matches
    defaultLocale: 'en',

    // Don't prefix the default locale
    localePrefix: 'as-needed'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(tr|en|ar)/:path*']
};