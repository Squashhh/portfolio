import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vincent | Full-stack Developer",
  description: "I'm a French full-stack developer, learning every day. I let my imagination run wild !",
};

export const viewport: Viewport = {
  themeColor: "#ffbdfd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >{children}
        </ThemeProvider></body>
    </html>
  );
}