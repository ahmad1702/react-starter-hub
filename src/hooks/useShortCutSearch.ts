import Fuse from "fuse.js";
import SHORTCUTS, { Shortcut } from "../api/shortcuts";

const searchShortCuts = (searchTerm: string): Shortcut[] => {
  const list: Array<Shortcut> = SHORTCUTS.map(({ links }) => links).flat();
  const options: Fuse.IFuseOptions<Shortcut> = {
    includeScore: true,
    keys: ["title", "description"],
    threshold: 0.4,
  };
  const fuse = new Fuse(list, options);
  return fuse
    .search(searchTerm)
    .sort((a, b) => (a.score || 0) - (b.score || 0))
    .map((item) => item.item);
};

export default searchShortCuts;
