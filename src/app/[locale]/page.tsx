import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('Hero');

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 text-center overflow-hidden">
            {/* Hero Section */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-500 dark:from-white dark:to-slate-400 animate-fade-in">
                {t('title')}
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 font-light animate-fade-in delay-100">
                {t('subtitle')}
            </p>

            <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-primary/25 animate-fade-in delay-200">
                {t('cta')}
            </button>

            {/* Grid Background */}
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
    );
}