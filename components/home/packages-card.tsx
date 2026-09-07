import ProductCard from "../product-card";

export default function PackagesCard({
  title,
  children,
  className,
}: {
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col md:gap-5 gap-2 h-full ${className}`}>
      <div className="md:px-10 px-2">
        <ProductCard className="aspect-square p-4 flex items-center justify-center pointer-events-none [&>svg]:w-auto [&>svg]:h-auto [&>svg]:max-w-[55%] [&>svg]:max-h-[55%]">
          {children}
        </ProductCard>
      </div>
      <p className="md:text-2xl text-center leading-none font-light md:min-h-[4rem] min-h-[2.5rem] flex items-center justify-center">
        {title}
      </p>
    </div>
  );
}
