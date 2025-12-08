import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
// DÜZELTME: @ yerine göreli yollar (relative paths) kullanıyoruz
import Navbar from '../../components/layout/Navbar';
import LanguageGate from '../../components/layout/LanguageGate';
import { Providers } from './providers';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansArabic = Noto_Sans_Arabic({
    subsets: ['arabic'],
    variable: '--font-noto-arabic',
    weight: ['400', '600', '700']
});

export const metadata = {
    title: 'Suvar Group',
    description: 'Premium Architecture & Production',
};

export default async function LocaleLayout({
                                               children,
                                               params
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages();

    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    const langFont = locale === 'ar' ? notoSansArabic.className : inter.className;

    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
        <body className={`${langFont} bg-lightbg dark:bg-darkbg text-slate-800 dark:text-slate-200 transition-colors duration-500`}>
        <NextIntlClientProvider messages={messages}>
            <Providers>
                {/* Arka plan efekti */}
                <div className="fixed inset-0 -z-10 opacity-30 dark:opacity-20 bg-gradient-to-r from-rose-100 via-sky-100 to-amber-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 animate-gradient-x pointer-events-none" />

                <LanguageGate />
                <Navbar locale={locale} />

                <main className="min-h-screen pt-20">
                    {children}
                </main>
            </Providers>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}