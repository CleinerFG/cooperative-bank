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
        id: "loan-description",
        category: "default",
        labelText: "Description",
        placeholder: "Enter description",
        ariaLabel: "Loan Description",
      },
      {
        id: "loan-value",
        category: "default",
        strictRules:["number"],
        formatters:["monetary"],
        labelText: "Value",
        placeholder: "R$ 0,00",
        ariaLabel: "Loan Value",
      },
      {
        id: "loan-installments",
        category: "default",
        strictRules:["number"],
        labelText: "Installments",
        placeholder: "Enter installments",
        ariaLabel: "Quantity of Installments",
      },
      {
        id: "loan-rate",
        category: "default",
        strictRules:["number"],
        formatters:["percentage"],
        labelText: "Interest Rate",
        placeholder: "Enter rate",
        ariaLabel: "Interest Rate",
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
