import { Investment } from "../../../js/models/Investment.js";
import { EventController } from "../../../js/controllers/EventController.js";

const dataInvests = [
  {
    dueDate: "10/05/2024",
    investmentType: "CDB",
    value: "2.200",
  },
  {
    dueDate: "08/07/2024",
    investmentType: "CDB",
    value: "2.800",
  },
  {
    dueDate: "09/05/2024",
    investmentType: "LCA",
    value: "3.400",
  },
  {
    dueDate: "12/07/2024",
    investmentType: "LCI",
    value: "5.800",
  },
];

export function initEventsHandler() {
  const investInstances = dataInvests.map(
    ({ dueDate, investmentType, value }) =>
      new Investment(dueDate, value, investmentType)
  );

  const container = document.querySelector(".events__cards");
  const evController = new EventController(container);

  investInstances.forEach((instance) => evController.addEvent(instance));
  evController.renderAllEvents();
}
