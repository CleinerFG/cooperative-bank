import { SubmitInpView } from "../../views/forms/SubmitInpView.js";
import { InputCtrl } from "./InputCtrl.js";

export class SubmitInpCtrl extends InputCtrl {
  get _viewClass() {
    return SubmitInpView;
  }
}