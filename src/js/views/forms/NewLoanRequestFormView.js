import { FormView } from "./FormView.js";
import { InputCtrl } from "../../controllers/forms/InputCtrl.js";

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

  get _inputSubmitData() {
    return {
      labelText: "Request",
      id: "loan-submit",
    };
  }

  _defineInputControllers() {
    const valueInpView = this.inputViews[2];
    const inpCtrl = new InputCtrl(valueInpView);
    inpCtrl.init()
  }
}
