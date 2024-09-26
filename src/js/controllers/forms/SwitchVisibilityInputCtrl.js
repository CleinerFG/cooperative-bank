import { InputCtrl } from "./InputCtrl.js";
import { SwitchVisibilityInputView } from "../../views/forms/SwitchVisibilityInputView.js";

export class SwitchVisibilityInputCtrl extends InputCtrl {
  get _viewClass() {
    return SwitchVisibilityInputView;
  }
}