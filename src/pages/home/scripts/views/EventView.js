import { ComponentView } from "../../../../js/views/ComponentView.js";
import { capitalize } from "../../../../js/utils/stringUtils.js";

export class EventView extends ComponentView {
  constructor(container, eventModel) {
    super(container, eventModel);
  }

  get _cssId() {
    return `event-${this.componentModel.id}`;
  }

  get _cssClass() {
    return `event__${this.componentModel.type}`;
  }

  get _btnClass() {
    return this.componentModel.type === "payment" ? "btn-attention" : "";
  }

  get _btnText() {
    return this.componentModel.type === "payment" ? "Pay" : "See";
  }

  get _labelValue() {
    return [
      { label: "Due Date", value: this.componentModel.dueDate },
      { label: "Value", value: this.componentModel.value },
    ];
  }

  get _headerCard() {
    return this._createHeaderCard(capitalize(this.componentModel.name ?? "test"));
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
