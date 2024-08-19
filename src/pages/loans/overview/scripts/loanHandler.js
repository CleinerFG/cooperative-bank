import { Loan } from "../../../../js/models/Loan.js";
import { LoanController } from "../../../../js/controllers/LoanController.js";

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

export function initLoanController() {
  const container = document.querySelector(".payables__cards");
  const ctrl = new LoanController(container, "payable");
  loanData.forEach((loan) => ctrl.addComponent(loan));
  ctrl.renderComponents();
  // ctrl.clearComponents();
}
