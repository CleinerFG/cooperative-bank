import { HeaderView } from "../views/components/HeaderView.js";
import { FooterView } from "../views/components/FooterView.js";

export class LayoutController {
  constructor() {
    this.header = new HeaderView();
    this.footer = new FooterView();
  }

  initComponents() {
    this.header.render();
    this.footer.render();
  }
}
