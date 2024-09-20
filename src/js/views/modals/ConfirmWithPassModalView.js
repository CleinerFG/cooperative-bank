import { ModalView } from "./ModalView.js";

export class ConfirmWithPassModalView extends ModalView {
  get _modalContent() {
    return `
      <h2>Confirm With Password</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas vero id       ocaecati modi sapiente fuga animi
      veritatis eligendi, qui enim accusantium numquam? Repudiandae sint labore vel, officia nesciunt pariatur soluta.
      </p>
    `;
  }
}
