import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = { title: "ADMaster", description: "広告運用ダッシュボード" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
