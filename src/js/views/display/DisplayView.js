export class DisplayView {
  #container;
  #component;
  constructor(container, component) {
    this.#container = container;
    this.#component = component;
  }

  get component() {
    return this.#component;
  }

  get container() {
    return this.#container;
  }

  _getEntityInfo() {
    const entity = this.component.creditor ? "Creditor" : "Debtor";
    const entityValue = this.component.creditor ?? this.component.debtor;
    return { entity, entityValue };
  }

  #renderCardItem(label, value) {
    console.log({ label, value });
    return `
      <div class="card-data__item">
        <span class="card-data__label">${label}</span>
        <span class="card-data__value">${value}</span>
      </div>
    `;
  }

  _createHeaderCard(str) {
    return `
      <header class="card-data__header">
      ${str}
      </header>
      `;
  }

  _createMainCard(...cardItems) {
    const itemsStr = cardItems
      .map(({ label, value }) => this.#renderCardItem(label, value))
      .join("");

    return `
    <main class="card-data__content">
    ${itemsStr}
    </main>
    `;
  }

  _createFooterCard(str) {
    return `
    <footer class="card-data__footer">
      ${str}
    </footer>
    `;
  }

  render() {
    throw new Error("Must be implemented in the subclass");
  }
}
