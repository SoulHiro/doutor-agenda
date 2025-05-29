import "./globals.css";

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}
        <Toaster position="bottom-center" richColors theme="light"/>
      </body>
    </html>
  );
}
