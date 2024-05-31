'use client';

import {useLocale, useTranslations} from "next-intl";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";

import styles from "../page.module.css";

export default function Home() {
    const t = useTranslations('common');
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <h1>
                    About
                    <br/>

                    {t('title')}
                </h1>

                <Link href={`/${locale}`}>
                    {'<--'} Back
                </Link>

                <button
                    onClick={() => {
                        router.push(locale === 'en' ? `/ru/${pathname.slice(4, 9999)}` : `/en/${pathname.slice(4, 9999)}`, {scroll: false})
                    }}
                    aria-label={'Change language'}
                >
                    Switch to {locale === 'en' ? 'RU' : 'EN'}
                </button>
            </div>
        </main>
    );
}