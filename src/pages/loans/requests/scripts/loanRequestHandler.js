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
    date: "23/07/2024",
    creditor: "Meg Thomas",
    value: 5000,
    installments: 12,
    rate: 2,
    status: 3,
  },
];

const requests = requestData.map(
  (req) =>
    new LoanRequest(
      req.id,
      req.creditor,
      req.value,
      req.installments,
      req.rate,
      req.status
    )
);

export function initLoanRequestController() {
  const container = document.querySelector(".open-requests__cards");
  const ctrl = new LoanRequestCtrl(container);
  requests.forEach((req) => ctrl.addComponent(req));
  ctrl.renderComponents();
  // ctrl.clearComponents();
}
