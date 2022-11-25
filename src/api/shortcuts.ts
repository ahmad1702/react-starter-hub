export type Shortcut = {
  title: string;
  description?: string;
  link: string;
  imagePath?: string;
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
        imagePath: "preact.svg",
      },
      {
        title: "Django App",
        description: "Shortcut for port 8000 Localhost",
        link: "http://localhost:8000",
        imagePath: "django.jpeg",
      },
      {
        title: "Vite App",
        description: "Shortcut for port 5173 Localhost",
        link: "http://localhost:5173",
        imagePath: "vite.svg",
      },
      {
        title: "Tailwind Docs",
        link: "https://tailwindcss.com/",
        imagePath: "tailwind.png",
      },
      {
        title: "DaisyUI Docs",
        link: "https://daisyui.com/components/",
      },
      {
        title: "Github",
        link: "https://github.com/",
        imagePath: "github.png",
      },
    ],
  },
  {
    title: "Entertainment 🎬",
    links: [
      {
        title: "Youtube",
        link: "https://www.youtube.com",
        imagePath:
          "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.youtube.com",
      },
      {
        title: "9anime",
        link: "https://9anime.to/",
        imagePath:
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
