import { LoanRequest } from "../../../../js/models/display/LoanRequest.js";
import { LoanRequestsCtrl } from "../../../../js/controllers/display/LoanRequestsCtrl.js";

const requestData = [
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

const receivedData = [
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

const requests = requestData.map(
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

const received = receivedData.map(
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

export function initLoanRequestsController() {
  const containerOpen = document.querySelector(".open-requests__cards");
  const ctrlOpen = new LoanRequestsCtrl(containerOpen, "opened");
  requests.forEach((req) => ctrlOpen.addComponent(req));
  ctrlOpen.renderComponents();
  // ctrlOpen.clearComponents();

  const containerReceived = document.querySelector(".received-requests__cards");
  const ctrlReceived = new LoanRequestsCtrl(containerReceived, "received");
  received.forEach((req) => ctrlReceived.addComponent(req));
  ctrlReceived.renderComponents();
  ctrlReceived.clearComponents();
}
