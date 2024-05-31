interface i18nConfig {
    locales: string[],
    localeDetection: boolean,
    defaultLocale: string,
}

export const i18n: i18nConfig = {
    locales: ['ru', 'en', 'uz'],
    defaultLocale: 'en',
    localeDetection: true
}

