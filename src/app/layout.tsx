import localFont from "next/font/local";
import "/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react"; 

const geistSans = localFont({
    src: "../../public/fonts/GeistVF.woff", 
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "../../public/fonts/GeistMonoVF.woff", 
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
            {children}
        </NextUIProvider>
        </body>
        </html>
    );
}
