import { SwitchVisibilityInputView } from "../../views/forms/SwitchVisibilityInputView.js";
import { ThemeView } from "../../views/layout/ThemeView.js";
import pathManager from "../../utils/PathManager.js";

export class SwitchVisibilityInputCtrl extends DefaultInputCtrl {
  get _viewClass() {
    return SwitchVisibilityInputView;
  }

  _defineAssetPath() {
    const theme = ThemeView.getStoredTheme();
    // pathManager.updatePath();
  }

  _init() {
    super._init();
    this._defineAssetPath();
  }
}