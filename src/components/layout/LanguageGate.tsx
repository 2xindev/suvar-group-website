'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const languages = [
    { code: 'tr', label: 'Türkçe' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
];

export default function LanguageGate() {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const hasSelected = Cookies.get('suvar_lang_selected');
        if (!hasSelected) {
            // eslint-disable-next-line
            setIsVisible(true);
        }
    }, []);

    const handleSelect = (langCode: string) => {
        Cookies.set('suvar_lang_selected', 'true', { expires: 365 });
        Cookies.set('NEXT_LOCALE', langCode, { expires: 365 });

        setIsVisible(false);
        router.push(`/${langCode}`);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-xl bg-black/40"
                >
                    <div className="absolute inset-0 bg-darkbg/60 mix-blend-multiply" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-6 p-8">
                        {languages.map((lang) => (
                            <motion.button
                                key={lang.code}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleSelect(lang.code)}
                                className="
                  group relative w-40 h-56 flex items-center justify-center
                  bg-white/10 border border-white/20 backdrop-blur-md
                  rounded-2xl shadow-2xl overflow-hidden hover:bg-white/20 transition-all
                "
                            >
                <span className="text-2xl font-light tracking-widest text-white">
                  {lang.label}
                </span>
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>
                        ))}
                    </div>

                    <div className="absolute bottom-10 text-white/50 text-sm tracking-widest uppercase">
                        Suvar Group
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}