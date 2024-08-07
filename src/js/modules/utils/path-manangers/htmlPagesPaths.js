const paths = {
  home: "/src/pages/home/",
  menu: "/src/pages/menu/",
  wallet: "/src/pages/home/wallet/",
  investments: "/src/pages/home/investments/",
};

export function setHref(query, pathName, filename) {
  document
    .querySelector(query)
    .setAttribute("href", paths[pathName] + filename);
}
