import { InputView } from "./InputView.js";

export class SubmitInpView extends InputView {
  _build() {
    return `
      <input id="${this._id}" class="btn btn-action ${this._cssClass}" type="submit" value="${this._labelText}">`;
  }

  _setupHandlers() {
    super._setupHandlers(false);
  }
}
