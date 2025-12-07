import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'tr', 'ar'];

export default getRequestConfig(async ({locale}) => {
    // Validate locale
    if (!locales.includes(locale as any)) notFound();

    // Manual loading to prevent import errors
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
        console.error("Translation loading failed:", error);
        notFound();
    }

    return {
        messages
    };
});