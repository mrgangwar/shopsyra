import type { Metadata } from "next";

import "./globals.css";

import Provider from "@/Provider";
import StoreProvider from "@/redux/StoreProvider";
import InitUser from "@/InitUser";





export const metadata: Metadata = {
  title: "Shopsyraa",
  description: "An e-commerce platform to buy and sell products easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen bg-linear-to-b from-black"> 
       
       <Provider>
        <StoreProvider>
          <InitUser/>
        {children}
        </StoreProvider>
        </Provider>
       
      </body>
    </html>
  );
}
