export const navbar = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Dispatch",
    link: "/dispatch",
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
