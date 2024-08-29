import { DisplayFormView } from "./DisplayFormView.js";

export class NewLoanRequestFormView extends DisplayFormView {
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
    return groupData.forEach(
      ({ labelText, id, type, placeholder, ariaLabel }) => {
        this._createInputGroup(labelText, id, type, placeholder, ariaLabel);
      }
    );
  }
}
