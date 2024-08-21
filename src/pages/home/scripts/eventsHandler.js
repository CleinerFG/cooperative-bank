import { Event } from "../../../js/models/display/Event.js";
import { EventCtrl } from "../../../js/controllers/display/EventCtrl.js";

const data = [
  {
    id: 1450,
    type: 2,
    dueDate: "10/05/2024",
    value: "2.200",
  },
  {
    id: 1456,
    type: 1,
    dueDate: "10/09/2024",
    value: "300",
  },
  {
    id: 15565,
    type: 2,
    dueDate: "08/07/2024",
    value: "2.800",
  },
  {
    id: 515,
    type: 2,
    dueDate: "09/05/2024",
    value: "3.400",
  },
  {
    id: 104,
    type: 1,
    dueDate: "10/08/2024",
    value: "200",
  },
  {
    id: 410,
    type: 2,
    dueDate: "12/07/2024",
    value: "5.800",
  },
  {
    id: 4610,
    type: 1,
    dueDate: "15/08/2024",
    value: "400",
  },
];

const events = data.map(
  (event) => new Event(event.id, event.type, event.dueDate, event.value)
);

export function initEventsController() {
  const container = document.querySelector(".events__cards");
  const ctrl = new EventCtrl(container);

  events.forEach((event) => ctrl.addComponent(event));
  ctrl.renderComponents();
  ctrl.clearComponents();
}
