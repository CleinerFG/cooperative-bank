import { FormView } from "./FormView.js";

export class NewLoanRequestFormView extends FormView {
  get _groupData() {
    return [
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

  _buildInputSearch() {
    const inpData = {
      labelText: "Search for a Creditor",
      id: "creditor",
      placeholder: "Enter creditor",
      ariaLabel: "Search Creditor",
    };

    return this._createInputSearch(
      inpData.labelText,
      inpData.id,
      inpData.placeholder,
      inpData.ariaLabel
    );
  }

  _buildInputGroups() {
    const inpSearch = this._buildInputSearch();
    const groupData = this._groupData
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
    return inpSearch + groupData;
  }

  _createSubmitButton() {
    return super._createSubmitButton("Request");
  }
}
