import { FormCtrl } from "./FormCtrl.js";
import { NewLoanRequestFormView } from "../../views/display/NewLoanRequestFormView.js";
import { SearchInputCtrl } from "./SearchInputCtrl.js";

export class NewLoanRequestFormCtrl extends FormCtrl {
  constructor(container) {
    super(
      NewLoanRequestFormView,
      container,
      "new-request-form",
      "new-request",
      "/",
      "post"
    );
  }

  _initSearchInputCtrl() {
    const inp = document.querySelector("#creditor");
    const resList = document.querySelector("#research-list");
    new SearchInputCtrl(inp, resList, "creditor");
  }

  _initControllers() {
    this._initSearchInputCtrl();
  }
}
