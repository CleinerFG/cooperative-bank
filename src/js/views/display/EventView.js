import { DisplayView } from "./DisplayView.js";
import { capitalize } from "../../utils/stringUtils.js";

export class EventView extends DisplayView {
  constructor(container, event) {
    super(container, event);
  }

  get _cssId() {
    return `event-${this.component.id}`;
  }

  get _cssClass() {
    return `event__${this.component.type}`;
  }

  get _btnClass() {
    return this.component.type === "payment" ? "btn-attention" : "";
  }

  get _btnText() {
    return this.component.type === "payment" ? "Pay" : "See";
  }

  get _labelValue() {
    return [
      { label: "Due Date", value: this.component.dueDate },
      { label: "Value", value: this.component.value },
    ];
  }

  get _headerCard() {
    return this._createHeaderCard(capitalize(this.component.type));
  }

  get _mainCard() {
    return this._createMainCard(...this._labelValue);
  }

  get _footerCard() {
    const str = `
      <button class="btn ${this._btnClass} card-data__btn">
      ${this._btnText}
      </button>
    `;
    return this._createFooterCard(str);
  }
}
