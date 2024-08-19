import { Loan } from "../../../../js/models/Loan.js";
import { LoanRequest } from "../../../../js/models/LoanRequest.js";
import { LoanRequestController } from "../../../../js/controllers/LoanRequestController.js";

const loanData = [
  {
    loanId: 1334,
    description: "Buy a Cell",
    debtor: "Claudette",
    creditor: "Kate",
    value: 4000,
    installments: 12,
    interestRate: 2,
  },
  {
    loanId: 1336,
    description: "Buy food",
    debtor: "Claudette",
    creditor: "Vitorio",
    value: 1100,
    installments: 4,
    interestRate: 2.1,
  },
  {
    loanId: 1338,
    description: "Credit card",
    debtor: "Claudette",
    creditor: "Kate",
    value: 2000,
    installments: 6,
    interestRate: 2.5,
  },
];

const requestData = [
  {
    requestID: 12,
    date: "23/07/2024",
  },
  {
    requestID: 14,
    date: "03/09/2024",
  },
  {
    requestID: 15,
    date: "04/05/2024",
  },
];

const requests = [];
for (let i = 0; i < requestData.length; i++) {
  const loan = new Loan(
    loanData[i].loanId,
    loanData[i].description,
    loanData[i].debtor,
    loanData[i].creditor,
    loanData[i].value,
    loanData[i].installments,
    loanData[i].interestRate
  );

  const request = new LoanRequest(
    requestData[i].requestID,
    requestData[i].date,
    loan
  );

  requests.push(request);
}

requests[0].status = 1;
requests[1].status = 2;
requests[2].status = 3;

export function initLoanRequestController() {
  const container = document.querySelector(".open-requests__cards");
  const ctrl = new LoanRequestController(container);
  requests.forEach((req) => ctrl.addComponent(req));
  ctrl.renderComponents();
  ctrl.clearComponents();
}
