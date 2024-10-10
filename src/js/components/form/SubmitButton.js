import { Input } from "./Input.js";

export class SubmitButton extends Input {
  get _template() {
    return `
      <button id="${this._id}" class="btn btn-action ${this._cssClass}" type="submit">${this._labelText}</button>`;
  }

  _setupHandlers() {
    super._setupHandlers(false);
  }
}
