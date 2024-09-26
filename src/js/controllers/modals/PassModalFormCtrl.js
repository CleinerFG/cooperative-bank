import { PassModalFormView } from "../../views/modals/PassModalFormView.js";
import { FormCtrl } from "../forms/FormCtrl.js";

export class PassModalFormCtrl extends FormCtrl {
  constructor() {
    const params = {
      view: PassModalFormView,
      id: "confirm-pass-form",
      container: document.querySelector(".modal__content"),
      cssClass: "modal__form",
      action: "/",
      method: "post",
    };
    super(params);
  }
}
