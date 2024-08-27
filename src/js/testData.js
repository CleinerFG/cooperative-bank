import { Event } from "./models/display/Event.js";
import { LoanRequest } from "./models/display/LoanRequest.js";

// --------------------------------------------------------------------------------
// Test data Home
// --------------------------------------------------------------------------------

// Home: Section Events

const apiDataEvents = [
  {
    id: 1450,
    type: 2,
    dueDate: "10/05/2024",
    value: 2200,
  },
  {
    id: 1456,
    type: 1,
    dueDate: "10/09/2024",
    value: 300,
  },
  {
    id: 15565,
    type: 2,
    dueDate: "08/07/2024",
    value: 2800,
  },
  {
    id: 515,
    type: 2,
    dueDate: "09/05/2024",
    value: 3400,
  },
  {
    id: 104,
    type: 1,
    dueDate: "10/08/2024",
    value: 200,
  },
  {
    id: 410,
    type: 2,
    dueDate: "12/07/2024",
    value: 5800,
  },
  {
    id: 4610,
    type: 1,
    dueDate: "15/08/2024",
    value: 400,
  },
];

export const eventsData = apiDataEvents.map(
  (event) => new Event(event.id, event.type, event.dueDate, event.value)
);

// --------------------------------------------------------------------------------
// Test data Loans/requests
// --------------------------------------------------------------------------------

// Loans/requests: Opened Requests

const apiDataOpenedRequests = [
  {
    id: 12,
    date: "23/07/2024",
    creditor: "Kate Denson",
    value: 4000,
    installments: 12,
    installmentValue: 200,
    rate: 2,
    status: 1,
    type: 1,
  },
  {
    id: 14,
    date: "03/09/2024",
    date: "23/07/2024",
    creditor: "Vitorio Toscano",
    value: 1000,
    installments: 12,
    installmentValue: 400,
    rate: 2,
    status: 2,
    type: 1,
  },
  {
    id: 15,
    date: "04/05/2024",
    creditor: "Meg Thomas",
    value: 5000,
    installments: 12,
    installmentValue: 300,
    rate: 2,
    status: 3,
    type: 1,
  },
];

export const openedRequestsData = apiDataOpenedRequests.map(
  (req) =>
    new LoanRequest(
      req.id,
      req.type,
      req.status,
      null,
      req.creditor,
      req.date,
      req.value,
      req.installments,
      req.rate,
      req.installmentValue
    )
);

// Loans/requests: Received Requests

const apiDataReceivedRequests = [
  {
    id: 20,
    date: "23/07/2024",
    debtor: "Kate Denson",
    value: 4000,
    installments: 12,
    installmentValue: 400,
    rate: 2,
    status: 1,
    type: 2,
  },
  {
    id: 18,
    date: "03/09/2024",
    debtor: "Vitorio Toscano",
    value: 1000,
    installments: 12,
    installmentValue: 400,
    rate: 2,
    status: 1,
    type: 2,
  },
];

export const receivedRequestsData = apiDataReceivedRequests.map(
  (req) =>
    new LoanRequest(
      req.id,
      req.type,
      req.status,
      req.debtor,
      null,
      req.date,
      req.value,
      req.installments,
      req.rate,
      req.installmentValue
    )
);
