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
}
