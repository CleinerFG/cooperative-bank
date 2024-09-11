import { InputView } from "./InputView.js";

export class SubmitInputView extends InputView {
  constructor(container, id, labelText) {
    super(container, id, null, null, null, labelText, null);
  }

  _build() {
    return `
      <input id="${this._id}" class="btn btn-action" type="submit" value="${this._labelText}">`;
  }

  _settersHandler() {
    super._settersHandler(["stringToNumber", "formatter", "validators"]);
  }
}
