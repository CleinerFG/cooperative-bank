import { setSrc } from "../../../js/utils/path-manangers/assetsPaths.js";
// The asset/resource adds all the icons in dist, but the visibility-on icon needs to be imported directly into the JS. The html-loader removes it, because it is not used directly in the html
// import "../../../assets/icons/icon-visibility-on.svg";

export function switchVisibility() {
  document
    .querySelector(".statement__visibility-button")
    .addEventListener("click", (ev) => {
      const button = ev.currentTarget;
      const visibility = button.dataset.visibility;

      // Alternative text
      const alt = visibility === "on" ? "Closed eye" : "Opened eye";
      document
        .querySelector(".statement__visibility-icon")
        .setAttribute("alt", alt);

      // Switching visibility and SVG file
      const state = visibility === "off" ? "on" : "off";
      setSrc("#visibility-icon", "icons", `icon-visibility-${state}.svg`);
      button.dataset.visibility = state;

      // Showing the total value
      let totalValue = state === "on" ? "12.954,53" : "******";
      document.getElementById("total-value").textContent = totalValue;
    });
}
