import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'tr', 'ar'],
    defaultLocale: 'en',
    // "as-needed" means the default locale (en) won't have a /en prefix
    localePrefix: 'as-needed'
});

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};