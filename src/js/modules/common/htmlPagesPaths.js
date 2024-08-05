const paths = {
  home: "/src/pages/home.html",
  menu: "/src/pages/menu/",
  wallet: "/src/pages/wallet/",
  investments: "/src/pages/investments/",
};

export function setHref(query, pathName, filename) {
  document
    .querySelector(query)
    .setAttribute("href", paths[pathName] + filename);
}
