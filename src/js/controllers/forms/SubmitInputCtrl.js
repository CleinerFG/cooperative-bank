import { SubmitInputView } from "../../views/forms/SubmitInputView.js";
import { InputCtrl } from "./InputCtrl.js";

export class SubmitInputCtrl extends InputCtrl {
  get _viewClass() {
    return SubmitInputView;
  }
}