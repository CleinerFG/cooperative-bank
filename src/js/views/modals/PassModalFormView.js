import { FormView } from "../forms/FormView.js";

export class PassModalFormView extends FormView {
  get _inputsParams() {
    return [
      {
        id: "confirm-pass",
        type: "password",
        category: "switchVisibility",
        strictToNumber: true,
        ariaLabel: "Password",
      },
    ];
  }

  get _inputSubmitParams() {
    return {
      id: "submit",
      labelText: "Confirm",
    };
  }
}
