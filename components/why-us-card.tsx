"use client";

import Image from "next/image";
import ProductCard from "./product-card";
import Icon from "./icon";

export interface WhyUsCardProps {
  title: string;
  src: string;
  icon: string;
  content: string | React.ReactNode;
  style?: React.CSSProperties;
}

export default function WhyUsCard({
  title,
  src,
  icon,
  content,
  style,
}: WhyUsCardProps) {
  return (
    <ProductCard
      className="grid md:grid-cols-[auto_70%]"
      style={{ maxWidth: 900, ...style }}
    >
      <Image
        src={src}
        width={1080}
        height={1080}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="w-full p-4 gap-4 grid md:grid-cols-[10%_auto]  items-center justify-items-center">
        <span>
          <Icon icon={icon} />
        </span>
        <label className="w-full md:text-4xl text-2xl font-medium">
          {title}
        </label>
        <span />
        <p>{content}</p>
      </div>
    </ProductCard>
  );
}
