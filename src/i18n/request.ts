import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'tr', 'ar'];

export default getRequestConfig(async ({locale}) => {
    // KRİTİK DÜZELTME: Eğer locale undefined gelirse, varsayılan olarak 'en' yap.
    // Bu sayede site "dil yok" diye çökmez.
    const baseLocale = locale || 'en';

    // Eğer gelen dil listemizde yoksa (veya saçma bir şeyse) 404 ver
    if (!locales.includes(baseLocale as any)) notFound();

    let messages;
    try {
        // baseLocale kullanarak dosyayı çekiyoruz
        switch (baseLocale) {
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
                messages = (await import('../messages/en.json')).default;
        }
    } catch (error) {
        console.error('Mesaj yükleme hatası:', error);
        // Hata olsa bile boş obje döndür ki site beyaz ekrana düşmesin
        messages = {};
    }

    return {
        locale: baseLocale as string, // Artık undefined olma şansı yok
        messages
    };
});