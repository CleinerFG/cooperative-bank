import { ConfirmPassFormView } from "./ConfirmPassFormView.js";
import { FormCtrl } from "../../controllers/forms/FormCtrl.js";

export class PassModalFormCtrl extends FormCtrl {
  get _viewClass() {
    return ConfirmPassFormView;
  }

  get _viewParams() {
    return {
      id: "confirm-pass-form",
      containerElement: document.querySelector(".modal__content"),
      cssClass: "modal__form",
    };
  }

  // Add endpoint in the superclass constructor, when backend is defined
  // Each confirm pass modal has a different endpoint
  get _endpoint() {
    return "";
  }

  get _formData() {
    return "";
  }
}
