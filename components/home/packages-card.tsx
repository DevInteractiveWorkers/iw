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
    <div className={`flex flex-col md:gap-5 gap-2 ${className}`}>
      <div className="md:px-10 px-2">
        <ProductCard className="aspect-square p-4 flex items-center justify-center pointer-events-none">
          {children}
        </ProductCard>
      </div>
      <p className="md:text-2xl text-center leading-none font-light">{title}</p>
    </div>
  );
}
