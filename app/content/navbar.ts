export const navbar = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Profiles",
    link: "/profiles",
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

export const footerNavbar = [
  {
    title: "Home",
    link: "/",
  },
  ...navbar,
  {
    title: "Privacy Policy",
    link: "/policy",
  },
];
