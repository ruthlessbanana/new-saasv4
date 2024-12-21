import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SaaS Landing - Modern SaaS Landing Page',
  description: 'A modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion.',
  keywords: 'saas, landing page, next.js, tailwind css, framer motion',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    title: 'SaaS Landing - Modern SaaS Landing Page',
    description: 'A modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion.',
    siteName: 'SaaS Landing'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Landing - Modern SaaS Landing Page',
    description: 'A modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion.',
    creator: '@yourusername'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 