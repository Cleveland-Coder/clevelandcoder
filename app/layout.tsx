import type { Metadata } from "next";
import { Libre_Caslon_Text, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const libreCaslonText = Libre_Caslon_Text({
  display: 'swap',
  subsets: ["latin"],
  variable: '--font-libre-caslon-text',
  weight: ['400', '700'],
});
const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: '--font-noto-sans-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="L2ly-E-6uEJZofo1sBfqD-ul45ZZvvlcjYISh2Ckf5c" />
        <title>Ra&#xFA;l Montejo | Web Developer</title>
      </head>

      <body className={`${libreCaslonText.variable} ${notoSansMono.variable}`}>{children}</body>

    </html>
  );
}
