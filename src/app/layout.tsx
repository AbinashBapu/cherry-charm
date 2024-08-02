import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomThemeProvider from "@/providers/custom-theme-provider";
import { Provider } from "react-redux";
import appStore from "@/states/app-store";
import OrgProvider from "@/providers/org-provider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <OrgProvider>{children}</OrgProvider>
      </body>
    </html>
  );
}
