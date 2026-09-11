import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import IWBg from "@/components/backgrounds/background";
import AppLoader from "@/components/AppLoader";
import Blured from "@/components/footer/blured";
import { ScrollAlert } from "@/components/scroll-alert/alert";
import PageTransition from "@/components/page-transition";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InteractiveWorkers",
  description:
    "We are a group of remote workers that fill positions for companies all over the world, we cover any requirement, anywhere.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} scroll-smooth bg-black text-white`}
      >
        <AppLoader>
          <IWBg />
          <div className="px-[clamp(1rem,8vw,50rem)] -z-10">
            <ScrollAlert />
            <PageTransition type="slide-fade">{children}</PageTransition>
          </div>
          <Blured />
          <Analytics></Analytics>
          <Script id="tawk" strategy="lazyOnload">
            {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/63694982daff0e1306d63318/1gh9ke9gs';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();`}
          </Script>
          <Footer />
        </AppLoader>
      </body>
    </html>
  );
}
