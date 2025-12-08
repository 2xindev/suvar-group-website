'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';

export default function Navbar({ locale }: { locale: string }) {
    const t = useTranslations('Navbar');
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Bu kod client-side render için zorunludur, linter uyarısını bilerek susturuyoruz
        // eslint-disable-next-line
        setMounted(true);

        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const switchLanguage = (newLang: string) => {
        Cookies.set('NEXT_LOCALE', newLang);
        const pathWithoutLocale = pathname.replace(/^\/(en|tr|ar)/, '');
        router.push(`/${newLang}${pathWithoutLocale || ''}`);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-lightbg/80 dark:bg-darkbg/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href={`/${locale}`} className="text-2xl font-bold tracking-tighter uppercase">
                    Suvar<span className="text-primary">.</span>
                </Link>

                <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
                    <Link href={`/${locale}/about`} className="hover:text-primary transition-colors">{t('about')}</Link>
                    <Link href={`/${locale}/projects`} className="hover:text-primary transition-colors">{t('projects')}</Link>
                    <Link href={`/${locale}/contact`} className="hover:text-primary transition-colors">{t('contact')}</Link>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex gap-2 text-xs font-bold uppercase">
                        {['tr', 'en', 'ar'].map((l) => (
                            <button
                                key={l}
                                onClick={() => switchLanguage(l)}
                                className={`${locale === l ? 'text-primary' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                            >
                                {l}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 text-xl hover:scale-110 transition-transform"
                        aria-label="Toggle Theme"
                    >
                        {mounted && theme === 'dark' ? '🌝' : '🌚'}
                    </button>
                </div>
            </div>
        </nav>
    );
}