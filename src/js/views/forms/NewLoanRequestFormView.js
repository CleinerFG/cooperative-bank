import { FormView } from "./FormView.js";

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
        inputmode: "numeric",
        category: "default",
        strictRules:["number"],
        formatter:["monetary"],
        labelText: "Value",
        placeholder: "R$ 0,00",
        ariaLabel: "Loan Value",
      },
      {
        id: "loan-installments",
        inputmode: "numeric",
        category: "default",
        strictRules:["number"],
        labelText: "Installments",
        placeholder: "Enter installments",
        ariaLabel: "Quantity of Installments",
      },
      {
        id: "loan-rate",
        inputmode: "numeric",
        category: "default",
        strictRules:["number"],
        formatter:["percentage"], 
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
}
