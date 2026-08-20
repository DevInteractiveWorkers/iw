export const navbar = [
  {
    title: "Dispatch",
    link: "/dispatch",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Contact us",
    link: "/contact",
  },
];

export interface navbarModel {
  title: string;
  link: string;
  disabled?: boolean;
}
