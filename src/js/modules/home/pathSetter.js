import "../header/pathSetter.js";
import "../footer/srcSetter.js";
import { setSrc } from "../common/assetsPaths.js";
import { setHref } from "../common/htmlPagesPaths.js";

// Financial Statement
setSrc(".visibility-icon", "icons", "icon-visibility-off.svg");

const pages = {
  wallet: ["loans", "debtors", "payments"],
  investments: ["all", "reports"],
};

// Defining icons and links: wallet and investments
for (const dir in pages) {
  pages[dir].forEach((pageName) => {
    setSrc(`#card-icon-${pageName}`, "icons", `icon-${pageName}.svg`);
    setHref(`#card-link-${pageName}`, dir, `${pageName}.html`);
  });
}
