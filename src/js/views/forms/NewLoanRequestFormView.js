import { FormView } from "./FormView.js";
import { monetaryValueToNumber } from "../../utils/stringUtils.js";
import { InputValidationView } from "./InputValidationView.js";

export class NewLoanRequestFormView extends FormView {
  get _inputsData() {
    return [
      {
        labelText: "Search for a Creditor",
        id: "creditor",
        placeholder: "Enter creditor",
        ariaLabel: "Search Creditor",
      },
      {
        labelText: "Description",
        id: "loan-description",
        type: "text",
        placeholder: "Enter description",
        ariaLabel: "Loan Description",
      },
      {
        labelText: "Value",
        id: "loan-value",
        type: "text",
        placeholder: "R$ 0,00",
        ariaLabel: "Loan Value",
      },
      {
        labelText: "Installments",
        id: "loan-installments",
        type: "text",
        placeholder: "Enter installments",
        ariaLabel: "Quantity of Installments",
      },
      {
        labelText: "Interest Rate",
        id: "loan-rate",
        type: "text",
        placeholder: "Enter rate",
        ariaLabel: "Interest Rate",
      },
    ];
  }

  _buildSubmitButton() {
    return super._createSubmitButton("Request");
  }

  _addInpValidations() {
    const checkValidValue = (value) => monetaryValueToNumber(value) === 0;
    const valueInp = new InputValidationView("loan-value", checkValidValue);
    valueInp.validateMonetary();
  }
}
