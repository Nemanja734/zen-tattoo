import { routes } from "./routes";

export const sortOptions = [
  {
    text: "Am Beliebtesten",
    isActive: true,
  },
  {
    text: "Neuerscheinungen",
    isActive: false,
  },
  {
    text: "Niedrigster Preis",
    isActive: false,
  },
  {
    text: "Höchster Preis",
    isActive: false,
  },
];

export const navItems = [
  {
    text: "Start",
    link: routes.home,
    mobile: true,
  },
  {
    text: "Für Tätowierer",
    link: routes.artist,
  },
  {
    text: "Entdecken",
    link: routes.showroom,
  },
  {
    text: "Blog",
    link: routes.blog,
  },
  {
    text: "Anmelden",
    link: routes.signin,
  },
];
