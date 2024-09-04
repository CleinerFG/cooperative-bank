import { FormCtrl } from "../forms/FormCtrl.js";
import { NewLoanRequestFormView } from "../../views/forms/NewLoanRequestFormView.js";
import { SearchInputCtrl } from "../forms/SearchInputCtrl.js";

export class NewLoanRequestFormCtrl extends FormCtrl {
  constructor() {
    const container = document.querySelector(".new-request");
    super(
      NewLoanRequestFormView,
      container,
      "new-request-form",
      "new-request",
      "/",
      "post"
    );
  }

  // _initSearchInputCtrl() {
  //   const inp = document.querySelector("#creditor");
  //   const resList = document.querySelector("#research-list");
  //   new SearchInputCtrl(inp, resList, "creditor");
  // }

  _initControllers() {
    // this._initSearchInputCtrl();
  }
}
