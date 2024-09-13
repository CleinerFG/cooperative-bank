import { users } from "../../testData.js";
import pathManager from "../../utils/PathManager.js";
import { ThemeView } from "../../views/layout/ThemeView.js";
import { LookupInputView } from "../../views/forms/LookupInputView.js";
import { DefaultInputCtrl } from "./DefaultInputCtrl.js";

export class LookupInputCtrl extends DefaultInputCtrl {
  get _viewClass() {
    return LookupInputView;
  }

  _getDataFromApi() {
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
    this._view.dataList = this._getDataFromApi();
    this._view.init();
    this._defineAssetPath();
  }
}
