export const urlFromImagePath = (filename: string | undefined, link: string) => {
  let formattedImageURL = !!filename
    ? filename
    : `https://s2.googleusercontent.com/s2/favicons?domain_url=${link}`;
  if (!!filename && !filename.includes("https")) {
    const extension = `/assets/shortcut_images/${filename}`;
    let rooturl = window.location.origin;
    if (rooturl.includes("file://")) {
      const linksplit = window.location.href.split("/");
      rooturl = linksplit.slice(0, linksplit.length - 1).join("/");
    }
    formattedImageURL = rooturl + extension;
  }
  return formattedImageURL
};
