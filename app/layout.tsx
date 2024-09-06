import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "-/providers/theme-provider";
import { SiteHeader } from "-/components/site-header";

export const metadata: Metadata = {
  title: "App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="w-full max-w-7xl mx-auto">
            <SiteHeader />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
