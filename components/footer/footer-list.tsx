import React from "react";

interface GradientListProps {
  items: string[] | React.ReactNode[];
}

export const FooterList: React.FC<GradientListProps> = ({ items }) => {
  const stops = [
    "var(--iw-primary-red, #dd272d)",
    "var(--iw-secondary-red, #c1272d)",
    "var(--iw-tertiary-red, #800202)",
  ];

  const getColor = (index: number, total: number) => {
    const t = total > 1 ? index / (total - 1) : 0;
    const position = t * (stops.length - 1);
    const from = Math.min(Math.floor(position), stops.length - 2);
    const mix = Math.round((position - from) * 100);
    return `color-mix(in srgb, ${stops[from]} ${100 - mix}%, ${stops[from + 1]} ${mix}%)`;
  };

  return (
    <ul className="space-y-2 w-full group/fl">
      {items.map((item, index) => {
        return (
          <li
            key={index}
            style={
              {
                "--fl-item-color": getColor(index, items.length),
                "--fl-delay": `${index * 75}ms`,
              } as React.CSSProperties
            }
            className="p-3 border text-[var(--fl-item-color)] group-hover/fl:text-white border-[var(--fl-item-color)] 
              group-hover/fl:bg-[var(--fl-item-color) transition-colors [transition-delay:var(--fl-delay)] relative
              after:bg-[var(--fl-item-color)] after:absolute after:w-full after:h-0 group-hover/fl:after:h-full after:top-0 after:left-0 after:-z-10 after:transition-[height] after:[transition-delay:var(--fl-delay)]"
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
