import { DefaultInputCtrl } from "./DefaultInputCtrl.js";
import { SwitchVisibilityInputView } from "../../views/forms/SwitchVisibilityInputView.js";
import { ThemeView } from "../../views/layout/ThemeView.js";
import pathManager from "../../utils/PathManager.js";

export class SwitchVisibilityInputCtrl extends DefaultInputCtrl {
  get _viewClass() {
    return SwitchVisibilityInputView;
  }

  assetHandler(state) {
    const theme = ThemeView.getStoredTheme();
    pathManager.updatePath(
      "asset",
      "#visibility-icon",
      `icons${theme}`,
      `icon-visibility-${state}.svg`
    );
  }

  _init() {
    super._init();
    this.assetHandler("off")
  }
}