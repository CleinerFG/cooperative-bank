import { FormCtrl } from "../../controllers/forms/FormCtrl.js";

export class ConfirmPassFormCtrl extends FormCtrl {
  get _viewParams() {
    return {
      id: "confirm-pass-form",
      containerElement: document.querySelector(".modal__content"),
      cssClass: "modal__form",
    };
  }

  get _inputParams() {
    return [
      {
        id: "transaction-password",
        category: "password",
        strictToNumber: true,
        ariaLabel: "Password",
      },
    ];
  }

  get _submitParams() {
    return {
      id: "transaction-confirm",
      cssClass: "modal-btn",
      labelText: "Confirm",
    };
  }

  // Add endpoint in the superclass constructor, when backend is defined
  // Each confirm pass modal has a different endpoint
  get _endpoint() {
    return "";
  }
}
