import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "-/components/site-header";
import { PrivyProvider } from "@privy-io/react-auth";
import Web3Providers from "-/providers/privy-providers";

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
      <Web3Providers>
        <body className={`bg-background text-foreground`}>
          <div className="w-full max-w-7xl mx-auto">
            <SiteHeader />
            <div className="py-4">{children}</div>
          </div>
        </body>
      </Web3Providers>
    </html>
  );
}
