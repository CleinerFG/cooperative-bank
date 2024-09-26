import { ConfirmPassModalView } from "../../views/modals/ConfirmPassModalView.js";
import { ModalCtrl } from "./ModalCtrl.js";

export class ConfirmPassModalCtrl extends ModalCtrl {
  get _viewClass() {
    console.log("here");

    return ConfirmPassModalView;
  }
}
