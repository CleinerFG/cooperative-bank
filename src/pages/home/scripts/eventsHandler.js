import { Investment } from "../../../js/models/Investment.js";
import { Payment } from "../../../js/models/Payment.js";
import { EventController } from "../../../js/controllers/EventController.js";
import pathManager from "../../../js/utils/PathManager.js";

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
  const evController = new EventController(container, pathManager);

  // evController.addEvent(investInstances[0]);
  // evController.addEvent(payInstances[0]);
  evController.addEvent(investInstances[1]);
  // evController.addEvent(investInstances[2]);
  evController.addEvent(payInstances[1]);
  // evController.addEvent(investInstances[3]);
  // evController.addEvent(payInstances[2]);

  // investInstances.forEach((instance) => evController.addEvent(instance));
  // payInstances.forEach((instance) => evController.addEvent(instance));
  evController.renderAllEvents();
  evController.removeEvent(15);
  evController.removeEvent(11);
}
