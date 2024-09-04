export class InputView {
  constructor(container, id, labelText, placeholder, type = "text") {
    this.container = container;
    this.id = id;
    this.labelText = labelText;
    this.placeholder = placeholder;
    this.type = type;
  }

  buildDefault() {
    return `
    <div class="form-group__input-group">
      <label for="${this.id}" class="label form-group__label">${this.labelText}</label>
      <input id="${this.id}" type="${this.type}" name="${id}" placeholder="${placeholder}" aria-label="${this.labelText}"
      class="input form-group__input">
    </div>
    `;
  }

  buildSearch() {
    return `
    <div class="form-group__input-group">
      <label for="${this.id}" class="label form-group__label">${this.labelText}</label>
      <div class="input__container">
        <input id="${this.id}" type="text" name="${this.id}" placeholder="${this.placeholder}" aria-label="${this.labelText}"
        class="input form-group__input">
        <ul class="research-list" id="research-list-${this.id}"></ul>
      </div>
    </div>
    `;
  }

  render(buildType) {
    this.container.insertAdjacentHTML("beforeend", buildType);
  }
}
