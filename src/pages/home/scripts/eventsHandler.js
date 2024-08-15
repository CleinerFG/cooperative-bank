import { Investment } from "../../../js/models/Investment.js";
import { Payment } from "../../../js/models/Payment.js";
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

const dataPayments = [
  { dueDate: "10/08/2024", value: "200", creditor: "Claudette Morel" },
  { dueDate: "10/09/2024", value: "300", creditor: "Kate Denson" },
  { dueDate: "10/10/2024", value: "50", creditor: "Meg Thomas" },
];

const investInstances = dataInvests.map(
  ({ dueDate, investmentType, value }) =>
    new Investment(dueDate, value, investmentType)
);

const payInstances = dataPayments.map(
  ({ dueDate, value, creditor }) => new Payment(dueDate, value, creditor)
);

export function initEventsController() {
  const container = document.querySelector(".events__cards");
  const evController = new EventController(container);

  // evController.addEvent(investInstances[0]);
  // evController.addEvent(payInstances[0]);
  // evController.addEvent(investInstances[1]);
  evController.addEvent(investInstances[2]);
  evController.addEvent(payInstances[1]);
  // evController.addEvent(investInstances[3]);
  evController.addEvent(payInstances[2]);

  // investInstances.forEach((instance) => evController.addEvent(instance));
  // payInstances.forEach((instance) => evController.addEvent(instance));
  evController.renderAllEvents();
}
