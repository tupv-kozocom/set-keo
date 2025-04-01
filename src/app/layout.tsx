import type { Metadata } from 'next';
import './globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Set Keo - Your Travel Companion',
  description: 'Discover amazing places and experiences with Set Keo',
  keywords: ['travel', 'Set Keo', 'explore', 'adventure', 'tourism'],
  authors: [{ name: 'Set Keo Team', url: 'https://setkeo.fun' }],
  creator: 'Set Keo Team',
  publisher: 'Set Keo',
  metadataBase: new URL('https://setkeo.fun'),
  openGraph: {
    title: 'Set Keo - Your Travel Companion',
    description: 'Discover amazing places and experiences with Set Keo',
    url: 'https://setkeo.fun',
    siteName: 'Set Keo',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://setkeo.fun/_next/image?url=%2Fimages%2Fbanner1.jpg&w=1920&q=75',
        width: 1200,
        height: 630,
        alt: 'Set Keo Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@setkeo',
    title: 'Set Keo - Your Travel Companion',
    description: 'Discover amazing places and experiences with Set Keo',
    images: ['https://setkeo.fun/_next/image?url=%2Fimages%2Fbanner1.jpg&w=1920&q=75'],
  },
  alternates: {
    canonical: 'https://setkeo.fun',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Set Keo" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
