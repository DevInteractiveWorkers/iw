'use client'
import Image from "next/image";
import SomeComponent from "./components/some-component";
import { useState } from "react";

export default function Home() {
  const [isVisible, setisVisible] = useState(false)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SomeComponent isVisible={isVisible}></SomeComponent>
      <button className="bg-[#a82f65] p-4 rounded-lg" onClick={()=>{setisVisible(!isVisible)}}>Change State</button>
    </main>
  );
}
