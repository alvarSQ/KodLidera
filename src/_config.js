export const process = {
  dev: true,
};

export const site = {
  home: process.dev ? "http://localhost:8080/" : "https://tocode.ru",
};

export const app = {
  title: "Лендинг",
};

export const links = [
  {
    title: "Партнеры",
    alias: 'Partners',
    url: "/",
  },
  {
    title: "КАК ЭТО БЫЛО",
    alias: "about",
    url: "/about",
  },
  {
    title: "Принять участие",
    alias: "about",
    url: "/about",
  },
  {
    title: "Программа",
    alias: "about",
    url: "/about",
  }
];
