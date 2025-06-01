import './globals.css';

import { Manrope } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from 'sonner';

import QueryProvider from '@/components/providers/query-provider';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={manrope.variable}>
        <QueryProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
          <Toaster position="bottom-center" richColors theme="light" />
        </QueryProvider>
      </body>
    </html>
  );
}
