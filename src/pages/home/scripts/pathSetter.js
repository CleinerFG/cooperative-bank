import { setSrc } from "../../../js/utils/path-manangers/assetsPaths.js";
import { setHref } from "../../../js/utils/path-manangers/htmlPagesPaths.js";

export function initPathSettings() {
  // Financial Statement
  setSrc("#visibility-icon", "icons", "icon-visibility-off.svg");

  const pages = {
    wallet: ["loans", "debtors", "payments", "timeline"],
    investments: ["all", "reports"],
  };

  // Defining icons and links: wallet and investments
  for (const dir in pages) {
    pages[dir].forEach((pageName) => {
      setSrc(`#card-icon-${pageName}`, "icons", `icon-${pageName}.svg`);
      setHref(`#card-link-${pageName}`, dir, `${pageName}`);
    });
  }
}
