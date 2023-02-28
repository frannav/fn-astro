import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://frannav.dev/",
  author: "Fran Navarro",
  desc: "frannav blog",
  title: "FN",
  ogImage: "frannav-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/frannav/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fran-navarro-martinez/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
];
