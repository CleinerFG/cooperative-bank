import { FormView } from "./FormView.js";
import { InputView } from "./InputView.js";

export class NewLoanRequestFormView extends FormView {
  get _inputsData() {
    return [
      {
        id: "creditor",
        category: "search",
        labelText: "Search for a Creditor",
        placeholder: "Enter creditor",
        ariaLabel: "Search Creditor",
      },
      {
        category: "default",
        labelText: "Description",
        id: "loan-description",
        placeholder: "Enter description",
        ariaLabel: "Loan Description",
      },
      {
        category: "default",
        labelText: "Value",
        id: "loan-value",
        placeholder: "R$ 0,00",
        ariaLabel: "Loan Value",
      },
      {
        category: "default",
        labelText: "Installments",
        id: "loan-installments",
        placeholder: "Enter installments",
        ariaLabel: "Quantity of Installments",
      },
      {
        category: "default",
        labelText: "Interest Rate",
        id: "loan-rate",
        placeholder: "Enter rate",
        ariaLabel: "Interest Rate",
      },
      {
        category: "submit",
        labelText: "Request",
        id: "loan-submit",
      },
    ];
  }

  _createInputs() {
    this._inputsData.forEach(({ id, category, labelText, placeholder }) => {
      new InputView(
        this._formGroupElement,
        category,
        id,
        labelText,
        placeholder
      ).init();
    });
  }

  init() {
    super.init();
    // this._createInputs();
  }
}
