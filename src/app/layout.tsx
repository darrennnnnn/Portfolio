import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

const space = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Darren Nathaneil",
    description: "A portfolio website for Darren Nathaneil",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${space.className} flex flex-col items-center justify-center `}
            >
                <Header />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
