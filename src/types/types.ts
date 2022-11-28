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