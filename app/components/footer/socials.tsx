import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <SocialLink
        href="https://www.instagram.com/interactiveworkers"
        src={"/footer/ig.svg"}
      />
      <SocialLink
        href="https://www.facebook.com/interactiveworkers"
        src={"/footer/fb.svg"}
      />
      <SocialLink href="https://x.com/InteractiveWrks" src={"/footer/x.svg"} />
      <SocialLink
        href="https://www.linkedin.com/company/interactiveworkers/posts/?feedView=all"
        src={"/footer/li.svg"}
      />
      <SocialLink
        href="https://wa.me/15034985741?text=Hello%20there!%20I'd%20like%20to%20have%20more%20information%20about%20InteractiveWorkers!"
        src={"/footer/wss.svg"}
      />
    </div>
  );
};

const SocialLink = ({ src, href }: { src: string; href: string }) => {
  return (
    <Link href={href} target="_blank">
      <Image
        className="w-9 h-auto"
        src={src}
        alt="social Interactive workers"
        width={23}
        height={23}
      ></Image>
    </Link>
  );
};

export default Socials;
