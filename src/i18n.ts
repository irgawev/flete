import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {i18n} from "@/utils/translation.util";

export default getRequestConfig(async ({locale}) => {
    // Validate that the incoming `locale` parameter is valid
    if (!i18n.locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`../public/locales/${locale}.json`)).default
    };
});