const paths = {
  home: "/src/pages/home/",
  menu: "/src/pages/menu/",
  loans: "/src/pages/loans/",
  investments: "/src/pages/investments/",
};

export function setHref(query, pathName, filename) {
  document
    .querySelector(query)
    .setAttribute("href", paths[pathName] + filename);
}
