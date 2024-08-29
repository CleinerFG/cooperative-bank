import { FormView } from "./FormView.js";

export class NewLoanRequestFormView extends FormView {
  constructor(container, id, cssClass, action, method) {
    super(container, id, cssClass, action, method);
  }

  get _groupData() {
    return [
      {
        labelText: "Search for a Creditor",
        id: "search-creditor",
        type: "text",
        placeholder: "Enter creditor",
        ariaLabel: "Search Creditor",
      },
      {
        labelText: "Value",
        id: "loan-value",
        type: "text",
        placeholder: "Enter value",
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

  _buildInputGroups() {
    const groupData = this._groupData;
    return groupData
      .map(({ labelText, id, type, placeholder, ariaLabel }) => {
        return this._createInputGroup(
          labelText,
          id,
          type,
          placeholder,
          ariaLabel
        );
      })
      .join("");
  }

  _createSubmitButton() {
    return super._createSubmitButton("Request");
  }
}
