import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import {ClerkProvider} from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aiym --Admin",
  description: "Admin Dashboard of Aiym Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
     <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
   </ClerkProvider>
  );
}
