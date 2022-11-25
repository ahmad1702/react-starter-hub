export type Shortcut = {
  title: string;
  description?: string;
  link: string;
  filename?: string;
};
export type ShortCutMenu = {
  title: string;
  links: Shortcut[];
};
const SHORTCUTS: ShortCutMenu[] = [
  {
    title: "Development 💻",
    links: [
      {
        title: "React App",
        description: "Shortcut for port 3000 Localhost",
        link: "http://localhost:3000",
        filename: "preact.svg",
      },
      {
        title: "Django App",
        description: "Shortcut for port 8000 Localhost",
        link: "http://localhost:8000",
        filename: "django.jpeg",
      },
      {
        title: "Vite App",
        description: "Shortcut for port 5173 Localhost",
        link: "http://localhost:5173",
        filename: "vite.svg",
      },
      {
        title: "Tailwind Docs",
        link: "https://tailwindcss.com/",
        filename: "tailwind.png",
      },
    ],
  },
  {
    title: "Entertainment 🎬",
    links: [
      {
        title: "Youtube",
        link: "https://www.youtube.com",
        filename:
          "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.youtube.com",
      },
      {
        title: "9anime",
        link: "https://9anime.to/",
        filename:
          "https://s2.bunnycdn.ru/assets/sites/9anime/icons/favicon.png?v2",
      },
      {
        title: "Zoro",
        link: "https://zoro.to/",
      },
    ],
  },
];

export default SHORTCUTS;
