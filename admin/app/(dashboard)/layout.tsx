import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LeftSideBar from "@/components/layout/leftSideBar";
import TopBar from "@/components/layout/topBar";
import { ToasterProvider } from "@/lib/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aiym - Admin-Auth",
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
        <body className={inter.className}>
          <ToasterProvider/>
          <div className="flex max-lg:flex-col text-grey-1">
            <LeftSideBar />
            <TopBar/>
            <div className="flex-1">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
