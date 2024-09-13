import { users } from "../../testData.js";
import { pathManager } from "../../utils/PathManager.js";

export class LookupInputCtrl {
  constructor(view) {
    this.view = view;
    this._init();
  }
  #getDataFromApi() {
    return users;
  }

  _defineAssetPath() {
    const theme = ThemeView.getStoredTheme();
    pathManager.updatePath(
      "asset",
      "#search-icon",
      `icons${theme}`,
      "icon-search.svg"
    );
  }

  _init() {
    this._defineAssetPath();
  }
}
