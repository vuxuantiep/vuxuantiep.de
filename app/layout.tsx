import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/language-provider';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Tiep | IT-Engineer & KI-Automatisierung',
  description: 'Portfolio von Vu Xuan Tiep - KI-Automatisierung, IAM und Enterprise-Modernisierung.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="bg-[#09090b] text-zinc-300 font-sans antialiased selection:bg-emerald-500/30">
        <LanguageProvider>
          {children}
          <Toaster theme="dark" position="bottom-right" className="font-sans" />
        </LanguageProvider>
      </body>
    </html>
  );
}
