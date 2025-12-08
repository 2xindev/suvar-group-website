import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('Hero');

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-500 dark:from-white dark:to-slate-400">
                {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 font-light">
                {t('subtitle')}
            </p>
            <button className="px-8 py-4 bg-[#C5A059] hover:bg-[#B08D45] text-white rounded-full font-medium transition-all hover:scale-105 shadow-xl">
                {t('cta')}
            </button>
        </div>
    );
}