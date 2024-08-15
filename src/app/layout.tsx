import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata: Metadata = {
    title: 'Utku Onur Şahin - Personal Website',
    description: 'Personal website of Utku Onur Şahin'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <TooltipProvider delayDuration={250}>
                <body className={GeistSans.className}>{children}</body>
            </TooltipProvider>
        </html>
    );
}
