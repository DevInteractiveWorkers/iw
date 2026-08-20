import React from "react";
import NavbarComponent from "@/components/navbar";
import MainForm from "@/components/form/form";
import Image from "next/image";
import Socials from "@/components/footer/socials";
import GetHired from "@/components/form/get-hired";
import { ParticlesComponent } from "@/components/particles";

const ContactUs = () => {
  return (
    <main className="flex flex-col min-h-screen text-white">
      <NavbarComponent></NavbarComponent>
      <section className="">
        <h1 className="text-4xl uppercase text-white font-extrabold my-12 mx-auto w-fit md:ml-24">
          Contact Us
        </h1>
        <article>
          <MainForm></MainForm>
        </article>
        <article className="w-full md:w-3/4 mx-auto mt-8 bg-white rounded-[66px]">
          <GetHired></GetHired>
        </article>
      </section>
    </main>
  );
};

export default ContactUs;
