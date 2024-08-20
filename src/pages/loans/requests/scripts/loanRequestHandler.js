import { LoanRequest } from "../../../../js/models/LoanRequest.js";
import { LoanRequestCtrl } from "../../../../js/controllers/LoanRequestCtrl.js";

const requestData = [
  {
    id: 12,
    date: "23/07/2024",
    creditor: "Kate Denson",
    value: 4000,
    installments: 12,
    rate: 2,
    status: 1,
  },
  {
    id: 14,
    date: "03/09/2024",
    date: "23/07/2024",
    creditor: "Vitorio Toscano",
    value: 1000,
    installments: 12,
    rate: 2,
    status: 2,
  },
  {
    id: 15,
    date: "04/05/2024",
    creditor: "Meg Thomas",
    value: 5000,
    installments: 12,
    rate: 2,
    status: 3,
  },
];

const receivedData = [
  {
    id: 20,
    date: "23/07/2024",
    debtor: "Kate Denson",
    value: 4000,
    installments: 12,
    rate: 2,
    status: 1,
  },
  {
    id: 18,
    date: "03/09/2024",
    date: "23/07/2024",
    debtor: "Vitorio Toscano",
    value: 1000,
    installments: 12,
    rate: 2,
    status: 1,
  },
];

const requests = requestData.map(
  (req) =>
    new LoanRequest(
      req.id,
      req.status,
      null,
      req.creditor,
      req.date,
      req.value,
      req.installments,
      req.rate
    )
);

const received = receivedData.map(
  (req) =>
    new LoanRequest(
      req.id,
      req.status,
      req.debtor,
      null,
      req.date,
      req.value,
      req.installments,
      req.rate
    )
);

export function initLoanRequestController() {
  const containerOpen = document.querySelector(".open-requests__cards");
  const ctrlOpen = new LoanRequestCtrl(containerOpen);
  requests.forEach((req) => ctrlOpen.addComponent(req));
  ctrlOpen.renderComponents();
  // ctrlOpen.clearComponents();

  const containerReceived = document.querySelector(".received-requests__cards");
  const ctrlReceived = new LoanRequestCtrl(containerReceived);
  received.forEach((req) => ctrlReceived.addComponent(req));
  ctrlReceived.renderComponents();
  // ctrlReceived.clearComponents();
}
