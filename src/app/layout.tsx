import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/layout/Header"; // <-- bu import önemli
import Footer from "@/components/layout/Footer";
// import { Toaster } from "@/components/ui/toaster"; // ileride bildirim için bonus :)

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pelmes Signature",
  description: "Kişiye özel ahşap/lazer hediyelikler ve baskılı kıyafetler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer/>
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}