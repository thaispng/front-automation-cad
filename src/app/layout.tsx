import { ReactNode } from 'react';
import Head from "next/head";
import { Inter, Montserrat, DM_Sans } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode | string;
}>) {
  return (
    <html lang="en">
      <Head>
        <title key="title">Registrati Automação</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Registrati Automação" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
