import { FormCtrl } from "../../../../../js/controllers/FormCtrl.js";
import { LoanRequestModel } from "../models/LoanRequestModel.js";

export class NewLoanRequestFormCtrl extends FormCtrl {
  get _modelClass() {
    return LoanRequestModel;
  }

  get _viewParams() {
    return {
      id: "new-request-form",
      containerElement: document.querySelector(".new-request"),
      cssClass: "new-request-form",
    };
  }

  get _inputParams() {
    return [
      {
        id: "creditor",
        category: "search",
        strictToNumber: true,
        labelText: "Search for a Creditor",
        ariaLabel: "Search Creditor",
        defaultValue: {
          id: 1000,
          name: "Cooperative Bank Creditor",
        },
        endpoint: "users",
      },
      {
        id: "description",
        category: "default",
        labelText: "Description",
        ariaLabel: "Loan Description",
      },
      {
        id: "value",
        inputmode: "numeric",
        category: "default",
        strictToNumber: true,
        formatter: "currency",
        labelText: "Value",
        ariaLabel: "Loan Value",
      },
      {
        id: "installments",
        inputmode: "numeric",
        category: "default",
        strictToNumber: true,
        labelText: "Installments",
        ariaLabel: "Quantity of Installments",
      },
      {
        id: "rate",
        inputmode: "numeric",
        category: "default",
        strictToNumber: true,
        formatter: "percent",
        labelText: "Interest Rate",
        ariaLabel: "Interest Rate",
      },
    ];
  }

  get _submitParams() {
    return {
      id: "submit",
      labelText: "Request",
    };
  }

  get _endpoint() {
    return "opened-requests";
  }
}
