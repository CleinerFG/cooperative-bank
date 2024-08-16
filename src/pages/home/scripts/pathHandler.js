import pathManager from "../../../js/utils/PathManager.js";

const nodes = {
  loans: ["requests", "overview", "payments", "timeline"],
  investments: ["all", "reports"],
};

export function initPathManager() {
  pathManager.updatePath(
    "asset",
    "#visibility-icon",
    "icons",
    "icon-visibility-off.svg"
  );

  for (const node in nodes) {
    nodes[node].forEach((filename) => {
      pathManager.updatePath(
        "asset",
        `#card-icon-${filename}`,
        "icons",
        `icon-${filename}.svg`
      );
      pathManager.updatePath("html", `#card-link-${filename}`, node, filename);
    });
  }
}
