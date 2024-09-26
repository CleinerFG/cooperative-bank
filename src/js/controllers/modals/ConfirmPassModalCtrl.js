import { ModalCtrl } from "./ModalCtrl.js";
import { ConfirmPassModalView } from "../../views/modals/ConfirmPassModalView.js";
import { PassModalFormCtrl } from "./PassModalFormCtrl.js";

export class ConfirmPassModalCtrl extends ModalCtrl {
  get _viewClass() {
    return ConfirmPassModalView;
  }

  _initControllers() {
    new PassModalFormCtrl();
  }
}
