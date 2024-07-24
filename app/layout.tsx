import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavbarComponent from "./components/navbar";
import Footer from "./components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InteractiveWorkers",
  description: "We are a group of remote workers that fill positions for companies all over the world, we cover any requirement, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className + ""}>
        
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
