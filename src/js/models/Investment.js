import { Event } from "./Event.js";

export class Investment extends Event {
  constructor(dueDate, value, investmentType) {
    super("Investment", dueDate, value);
    this.investmentType = investmentType;
  }

  render() {
    super.render();
  }
}
