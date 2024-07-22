import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./styles.css";
import NavBar from "./_layout/NavBar";
import { Suspense } from "react";
import LoadingSideBar from "./loading";


const spacegrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M Music Player",
  description: "Next-gen player",
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={spacegrotesk.className}>
        <div 
        id="BACKGRADIENT"
        className="flex w-full h-screen"
        >
          <NavBar />
          <Suspense fallback={ <LoadingSideBar/> }>
            {children}
          </Suspense>
        </div>
      </body>
    </html>
  );
}
