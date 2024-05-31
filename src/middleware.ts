import createMiddleware from 'next-intl/middleware';
import {i18n} from "@/utils/translation.util";

export default createMiddleware({...i18n});

export const config = {
    matcher: ['/', `/(uz|en|ru)/:path*`]
};