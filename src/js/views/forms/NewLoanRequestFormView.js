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
        id: "description",
        category: "default",
        labelText: "Description",
        placeholder: "Enter description",
        ariaLabel: "Loan Description",
      },
      {
        id: "value",
        inputmode: "numeric",
        category: "default",
        strictToNumber: true,
        formatter: "monetary",
        labelText: "Value",
        placeholder: "R$ 0,00",
        ariaLabel: "Loan Value",
      },
      {
        id: "installments",
        inputmode: "numeric",
        category: "default",
        strictToNumber: true,
        labelText: "Installments",
        placeholder: "Enter installments",
        ariaLabel: "Quantity of Installments",
      },
      {
        id: "rate",
        inputmode: "numeric",
        category: "default",
        strictToNumber: true,
        formatter: "percentage",
        labelText: "Interest Rate",
        placeholder: "Enter rate",
        ariaLabel: "Interest Rate",
      },
    ];
  }

  get _inputSubmitData() {
    return {
      labelText: "Request",
      id: "submit",
    };
  }
}
