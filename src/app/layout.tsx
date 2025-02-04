import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className=" flex items-center justify-center m-2">
          <p>Header</p>
        </header>
        <main className=" flex flex-col items-center justify-center min-h-24 p-2">
          {children}
        </main>
        <footer className=" flex items-center justify-center m-2">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
