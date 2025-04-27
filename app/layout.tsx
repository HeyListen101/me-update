import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "Me Update",
  description: "A Basic User Management Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased relative w-screen h-screen overflow-hidden"
      >
        {children}
      </body>
    </html>
  );
}
