import { SearchInputView } from "../../views/forms/SearchInputView.js";
import { users } from "../../testData.js";

export class SearchInputCtrl {
  #view;
  constructor(input, resultList, dataset) {
    this.#view = new SearchInputView(input, resultList, dataset, users);
  }
}
