import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'tr', 'ar'];

export default getRequestConfig(async ({locale}) => {
    if (!locales.includes(locale as string)) notFound();

    let messages;
    try {
        // DÜZELTME: Dosyaları elle gösteriyoruz.
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
        console.error(error);
        notFound();
    }

    return {
        locale: locale as string,
        messages
    };
});