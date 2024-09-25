import { DefaultInputCtrl } from "./DefaultInputCtrl.js";
import { SwitchVisibilityInputView } from "../../views/forms/SwitchVisibilityInputView.js";

export class SwitchVisibilityInputCtrl extends DefaultInputCtrl {
  get _viewClass() {
    return SwitchVisibilityInputView;
  }

  _validationValueApi(){
    // Checek value on api
  }
}