import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavbarComponent from "./components/navbar";
import Footer from "./components/footer/footer";
import Script from "next/script";

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
      <body className={montserrat.className + "overflow-hidden"}>

        {children}
        <Script id="tawk" strategy="lazyOnload">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/63694982daff0e1306d63318/1gh9ke9gs';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();`
          }
        </Script>
        <Footer></Footer>
      </body>
    </html>
  );
}