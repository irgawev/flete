import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

import type {Metadata} from "next";
import {Inter} from "next/font/google";

import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Flete',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque harum illo ipsum iste minus vitae? Eveniet exercitationem ipsa neque?",
    }
}

export default async function LocaleLayout({
   children,
   params: {locale}
}: {
    children: React.ReactNode;
    params: {locale: string};
}) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}