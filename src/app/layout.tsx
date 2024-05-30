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

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
