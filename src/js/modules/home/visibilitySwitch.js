// The asset/resource adds all the icons in dist, but the visibility-on icon needs to be imported directly into the JS. The html-loader removes it, because it is not used directly in the html
// import "../../../assets/icons/icon-visibility-on.svg";

export function visibilitySwitch() {
  document.querySelector(".visibility-icon").addEventListener("click", (ev) => {
    const icon = ev.currentTarget;
    const visibility = icon.dataset.visibility;

    // Switching visibility and SVG file
    const state = visibility === "off" ? "on" : "off";
    icon.src = `../assets/icons/icon-visibility-${state}.svg`;
    icon.dataset.visibility = state;

    // Showing the total value
    // totalValue initially receives a test value, value logic is not implemented yet
    let totalValue = state === "on" ? "12.954,53" : "******";
    document.getElementById("total-value").textContent = totalValue;
  });
}
