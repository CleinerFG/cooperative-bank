import { InputCtrl } from "./InputCtrl.js";
import { SwitchVisibilityInpView } from "../../views/forms/SwitchVisibilityInpView.js";

export class SwitchVisibilityInpCtrl extends InputCtrl {
  get _viewClass() {
    return SwitchVisibilityInpView;
  }
}