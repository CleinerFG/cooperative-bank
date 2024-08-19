import { Loan } from "../../../../js/models/Loan.js";
import { LoanController } from "../../../../js/controllers/LoanController.js";

const loanData = [
  {
    id: 1334,
    description: "Buy a Cell",
    debtor: "Claudette",
    creditor: "Kate",
    value: 4000,
    installments: 12,
    interestRate: 2,
  },
  {
    id: 1336,
    description: "Buy food",
    debtor: "Claudette",
    creditor: "Vitorio",
    value: 1100,
    installments: 4,
    interestRate: 2.1,
  },
  {
    id: 1338,
    description: "Credit card",
    debtor: "Claudette",
    creditor: "Kate",
    value: 2000,
    installments: 6,
    interestRate: 2.5,
  },
];

const loans = loanData.map(
  (loan) =>
    new Loan(
      loan.id,
      loan.description,
      loan.debtor,
      loan.creditor,
      loan.value,
      loan.installments,
      loan.interestRate
    )
);

export function initLoanController() {
  const payables = document.querySelector(".payables__cards");
  const ctrlPayables = new LoanController(payables, "payable");
  loans.forEach((loan) => ctrlPayables.addComponent(loan));
  ctrlPayables.renderComponents();
  // ctrlPayables.clearComponents();

  const receivables = document.querySelector(".receivables__cards");
  const ctrlReceivables = new LoanController(receivables, "receivable");
  loans.forEach((loan) => ctrlReceivables.addComponent(loan));
  ctrlReceivables.renderComponents();
}
