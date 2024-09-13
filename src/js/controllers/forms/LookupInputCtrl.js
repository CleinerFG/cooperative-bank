import { users } from "../../testData.js"

export class LookupInputCtrl {
  constructor(view) {
    this.view = view
  }
  #getDataFromApi() {
    // Data prototype
    return users
  }
}