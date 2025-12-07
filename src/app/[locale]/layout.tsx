import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Providers } from './providers';
import '@/app/globals.css';

// Removed Arabic font temporarily to isolate issues
const inter = Inter({ subsets: ['latin'] });

export default async function LocaleLayout({
                                               children,
                                               params
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body className={`${inter.className} bg-white dark:bg-black`}>
        <NextIntlClientProvider messages={messages}>
            <Providers>
                {/* Navbar and Gate are COMMENTED OUT for testing */}
                {/* <LanguageGate /> */}
                {/* <Navbar locale={locale} /> */}

                <main className="min-h-screen pt-20">
                    {children}
                </main>
            </Providers>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}