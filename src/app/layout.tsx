import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react"; // Importa NextUIProvider
import FollowCursor from "./components/FollowCursor";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NextUIProvider>
            <FollowCursor/>
            {children}
        </NextUIProvider>
        </body>
        </html>
    );
}

