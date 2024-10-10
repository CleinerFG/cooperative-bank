import { FormCtrl } from "../../../../../js/controllers/forms/FormCtrl.js";
import { InvalidDataError } from "../../../../../js/errors/InvalidDataError.js";
import { LoanRequestModel } from "../models/LoanRequestModel.js";

export class NewLoanRequestFormCtrl extends FormCtrl {
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

  get _formData() {
    const fields = document.querySelectorAll(
      "#creditor, #description, #value, #installments, #rate"
    );

    const isValid = Array.from(fields).every(
      (field) => field.dataset.valid === "true"
    );

    if (!isValid) {
      throw new InvalidDataError();
    }

    const params = {};
    fields.forEach((field) => {
      params[field.id] = field.value;
    });

    const model = new LoanRequestModel(params);
    return model.dataToApi;
  }
}
