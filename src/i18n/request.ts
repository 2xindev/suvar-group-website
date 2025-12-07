import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'tr', 'ar'];

export default getRequestConfig(async ({locale}) => {
    // Console log to debug if this file is running
    console.log(`[i18n] Loading locale: ${locale}`);

    if (!locales.includes(locale as any)) notFound();

    try {
        return {
            // Use the @ alias to point to src/messages safely
            messages: (await import(`@/messages/${locale}.json`)).default
        };
    } catch (error) {
        console.error(`[i18n] Error loading messages for ${locale}:`, error);
        return { messages: {} }; // Return empty to prevent crash
    }
});