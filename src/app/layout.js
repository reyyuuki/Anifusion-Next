import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <NextTopLoader
          color="#20b2aa"
          className="rounded-full"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="relative top-[65px] overflow-hidden">{children}</div>
          <div className="relative top-[65px] overflow-hidden">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
