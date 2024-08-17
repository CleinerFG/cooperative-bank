import { Loan } from "../../../../js/models/Loan.js";
import { LoanRequest } from "../../../../js/models/LoanRequest.js";
import { LoanRequestController } from "../../../../js/controllers/LoanRequestController.js";

const loanData = {
  loanId: 1334,
  description: "Buy a Cell",
  debtor: "Claudette",
  creditor: "Kate",
  value: 4000,
  installments: 12,
  interestRate: 2,
};

const request = {
  requestID: 12,
  date: "23/07/2024",
};

const loanObj = new Loan(loanData.loanId, loanData.description, loanData.debtor, loanData.value, loanData.installments, loanData.interestRate);

const loanRequestObj = new LoanRequest(request.requestID, request.date, loanObj);

export function initLoanRequestController() {
  const container = document.querySelector(".open-requests__cards");
  const ctrl = new LoanRequestController(container);
  ctrl.addLoanRequest(loanRequestObj);
  ctrl.renderRequests();
}