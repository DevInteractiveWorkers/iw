import MainForm from "@/components/form/form";
import NavbarComponent from "@/components/navbar";
import ProductCard from "@/components/product-card";
import Switch from "@/components/switch";
import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
  return (
    <section className="md:px-20 sm:px-10 px-4">
      <NavbarComponent />

      <article className="flex flex-col p-10">
        <Image
          width={1080}
          height={1080}
          className="w-1/4 max-w-[150px] pb-10"
          alt="logo"
          src="/logo/03_Logo_Mark/03_Logo_Mark-01.png"
        />

        <h1
          className="
            text-[clamp(2rem,4vw,3.75rem)]
            leading-[1.05]
            pb-6
          "
        >
          Our Specialized Productized
          <br />
          Packages are a versatile solution
          <br />
          for any business
        </h1>
      </article>

      <article className="flex flex-col border-t pb-20">
        <div className="flex justify-end py-6">
          <div className="flex gap-4 sm:gap-6 justify-center items-center">
            <label>Long Term</label>
            <Switch />
            <label>Per Project</label>
          </div>
        </div>

        <div className="grid md:grid-cols-[auto_80%] gap-6">
          <aside>
            <ProductCard className="p-6" disableHover>
              <h4 className="text-[clamp(1.5rem,2.5vw,1.875rem)] font-medium leading-tight">
                Want more traffic and leads?
              </h4>

              <p className="py-6 text-[clamp(1rem,1.5vw,1.25rem)]">
                Get a Specialized Productized Packages that starts with your
                goals.
              </p>

              <h5 className="text-[clamp(1.5rem,2.5vw,1.875rem)] font-medium">
                Why us?
              </h5>

              <ul className="py-6 text-[clamp(1rem,1.5vw,1.25rem)] flex flex-col gap-6">
                <li>Bilingual (English and Spanish)</li>
                <li>Adaptable</li>
                <li>Professionals in their field</li>
                <li>24/7 Availability</li>
              </ul>
            </ProductCard>
          </aside>

          <div className="grid grid-cols-1 gap-6">
            <ProductCard className="p-6 min-h-25" disableHover>
              <div className="flex items-baseline gap-2 flex-wrap">
                <h2
                  className="
                    text-[clamp(2rem,5vw,3.75rem)]
                    leading-none
                    pb-2
                  "
                >
                  Start with ONE-WEEK FREE
                </h2>
              </div>
            </ProductCard>

            <ProductCard
              className="p-6 grid grid-cols-1 items-end h-full min-h-25"
              disableHover
            >
              <div className="h-full md:w-1/2">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h2
                    className="
                      text-[clamp(2rem,5vw,3.75rem)]
                      leading-none
                      pb-2
                    "
                  >
                    Custom
                  </h2>

                  <span className="text-xs md:text-sm whitespace-nowrap">
                    /Long Term
                  </span>
                </div>

                <div className="w-full flex justify-between border-b border-white/20 py-4">
                  <span>Delivery time</span>
                  <span>Undefined</span>
                </div>

                <p className="text-[clamp(1rem,1.5vw,1.125rem)] pt-4 leading-relaxed">
                  Scale coverage instantly with bilingual, security-trained VAs
                  who handle calls, dispatch, and scheduling around the clock.
                </p>
              </div>

              <div className="flex w-full justify-end">
                <Link
                  href={"https://calendly.com/interactiveworkersgm/30min"}
                  target="_blank"
                  className="px-8 py-4 flex items-center justify-center bg-black rounded h-max underline md:w-1/2 hover:scale-95 active:bg-white active:text-iw-red-1
                transition-all duration-150"
                >
                  Book Your Free 15-Minute Discovery Call
                </Link>
              </div>
            </ProductCard>
          </div>
        </div>
      </article>
      <MainForm />
    </section>
  );
}
