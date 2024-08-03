import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import OrgProvider from "@/providers/org-provider";
import ResponsiveAppBar from "@/components/common/nav-page";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shine Savvy",
  description: "Shine Savvy: Accessorries Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrgProvider>{children}</OrgProvider>
      </body>
    </html>
  );
}
