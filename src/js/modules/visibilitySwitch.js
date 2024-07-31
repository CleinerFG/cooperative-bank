export function visibilitySwitch(ev) {
  const icon = ev.currentTarget;
  const visibility = icon.dataset.visibility;

  // Switching visibility and SVG file
  const state = visibility === "off" ? "on" : "off";
  icon.src = `../assets/icons/visibility-${state}.svg`;
  icon.dataset.visibility = state;

  // Showing the total value
  // totalValue initially receives a test value, value logic is not implemented yet
  let totalValue = state === "on" ? "12.954,53" : "******";
  document.getElementById("total-value").textContent = totalValue;
}
