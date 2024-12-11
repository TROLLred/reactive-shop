import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

const geistMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Re:Shop',
  description: 'Test SPA Shop for Reactive'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`${geistMono.variable}`}>{children}</body>
    </html>
  );
}
