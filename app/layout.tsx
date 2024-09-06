import type { Metadata } from "next";
import "./globals.css";
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
      <body className={`bg-background text-foreground`}>
        <div className="w-full max-w-7xl mx-auto">
          <SiteHeader />
          <div className="py-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
