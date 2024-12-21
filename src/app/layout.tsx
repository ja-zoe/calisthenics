import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./AuthProvider";
import { Navbar } from "@/components/Navbar"
import { Teko } from "next/font/google"

const teko = Teko({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Calisthenics App",
  description: "The Calisthenics App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${teko.className} antialiased border-black border-4`}
          >
          <Navbar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
