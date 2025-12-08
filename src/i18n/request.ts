import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'tr', 'ar'];

export default getRequestConfig(async ({locale}) => {
    // DÜZELTME 1: "as any" yerine tip zorlamasını kaldırdık veya string olarak kabul ettik
    if (!locales.includes(locale)) notFound();

    let messages;
    try {
        switch (locale) {
            case 'en':
                messages = (await import('../messages/en.json')).default;
                break;
            case 'tr':
                messages = (await import('../messages/tr.json')).default;
                break;
            case 'ar':
                messages = (await import('../messages/ar.json')).default;
                break;
            default:
                notFound();
        }
    } catch (error) {
        // DÜZELTME 2: error değişkenini konsola yazdırarak "unused" hatasını çözdük
        console.error('Mesajlar yüklenirken hata oluştu:', error);
        notFound();
    }

    return {
        messages
    };
});