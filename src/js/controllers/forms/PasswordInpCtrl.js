import { InputCtrl } from "./InputCtrl.js";
import { PasswordInpView } from "../../views/forms/PasswordInpView.js";

export class PasswordInpCtrl extends InputCtrl {
  get _viewClass() {
    return PasswordInpView;
  }
}