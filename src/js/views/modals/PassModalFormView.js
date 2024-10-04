import { FormView } from "../forms/FormView.js";

export class PassModalFormView extends FormView {
  get _inputsParams() {
    return [
      {
        id: "transaction-password",
        category: "password",
        strictToNumber: true,
        ariaLabel: "Password",
      },
    ];
  }

  get _inputSubmitParams() {
    return {
      id: "transaction-confirm",
      cssClass: "modal-btn",
      labelText: "Confirm",
    };
  }
}
