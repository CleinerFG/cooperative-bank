import { InputView } from "./InputView.js";

export class SubmitInputView extends InputView {
  _htmlStr = `
        <input id="${this._id}" class="btn btn-action" type="submit" value="${this._labelText}">`;
  constructor(container, id, labelText) {
    super(container, id, null, null, null, labelText, null);
  }
}
