import { Investment } from "../../../js/models/Investment.js";
import { Payment } from "../../../js/models/Payment.js";
import { EventController } from "../../../js/controllers/EventController.js";

const dataInvests = [
  {
    eventID: 10,
    dueDate: "10/05/2024",
    investmentType: "CDB",
    value: "2.200",
  },
  {
    eventID: 11,
    dueDate: "08/07/2024",
    investmentType: "CDB",
    value: "2.800",
  },
  {
    eventID: 12,
    dueDate: "09/05/2024",
    investmentType: "LCA",
    value: "3.400",
  },
  {
    eventID: 13,
    dueDate: "12/07/2024",
    investmentType: "LCI",
    value: "5.800",
  },
];

const dataPayments = [
  {
    eventID: 14,
    dueDate: "10/08/2024",
    value: "200",
    creditor: "Claudette Morel",
  },
  {
    eventID: 15,
    dueDate: "10/09/2024",
    value: "300",
    creditor: "Kate Denson",
  },
  {
    eventID: 16,
    dueDate: "15/08/2024",
    value: "400",
    creditor: "Meg Thomas",
  },
];

const investInstances = dataInvests.map(
  ({ eventID, dueDate, investmentType, value }) =>
    new Investment(eventID, dueDate, value, investmentType)
);

const payInstances = dataPayments.map(
  ({ eventID, dueDate, value, creditor }) =>
    new Payment(eventID, dueDate, value, creditor)
);

export function initEventsController() {
  const container = document.querySelector(".events__cards");
  const ctrl = new EventController(container);

  investInstances.forEach((instance) => ctrl.addComponent(instance));
  payInstances.forEach((instance) => {
    ctrl.addComponent(instance);
  });
  ctrl.renderComponents();
  // ctrl.clearComponents();
}
