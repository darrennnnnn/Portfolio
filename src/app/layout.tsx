import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({ subsets: ["latin"] });

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
            <body className={`${space.className} flex items-center justify-center bg-gray-900`}>{children}</body>
        </html>
    );
}
