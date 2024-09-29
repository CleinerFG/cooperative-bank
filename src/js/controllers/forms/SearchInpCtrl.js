import { SearchInpView } from "../../views/forms/SearchInpView.js";
import { users } from "../../testData.js";

export class SearchInpCtrl {
  #view;
  constructor(input, resultList, dataset) {
    this.#view = new SearchInpView(input, resultList, dataset, users);
  }
}
