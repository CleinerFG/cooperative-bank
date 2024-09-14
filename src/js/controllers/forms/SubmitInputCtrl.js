import { SubmitInputView } from "../../views/forms/SubmitInputView.js";
import { DefaultInputCtrl } from "./DefaultInputCtrl.js";

export class SubmitInputCtrl extends DefaultInputCtrl {
  get _viewClass() {
    return SubmitInputView;
  }
}