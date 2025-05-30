import "./globals.css";

import { Toaster } from "sonner";

import QueryProvider from "@/components/providers/query-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <QueryProvider>
          {children}
          <Toaster position="bottom-center" richColors theme="light"/>
        </QueryProvider>
      </body>
    </html>
  );
}
