import { Loan } from "../../../../js/models/display/Loan.js";
import { LoanCtrl } from "../../../../js/controllers/display/LoanCtrl.js";

const transactions = [
  {
    id: 15466,
    type: 1,
    status: 1,
    description: "Loan for new equipment",
    creditor: "The Trapper",
    date: "15/07/2024",
    amountDue: 4200,
    value: 5000,
    installments: 10,
    rate: 1.5,
    installmentValue: 515,
    remainingInstallments: 8,
  },
  {
    id: 24645,
    type: 2,
    status: 1,
    description: "Payment for services rendered",
    debtor: "Meg Thomas",
    date: "20/06/2024",
    amountDue: 1500,
    value: 5000,
    installments: 10,
    rate: 2,
    installmentValue: 500,
    remainingInstallments: 6,
  },
  {
    id: 456453,
    type: 2,
    status: 1,
    description: "Loan for medical expenses",
    debtor: "Claudette Morel",
    date: "10/05/2024",
    amountDue: 3000,
    value: 3000,
    installments: 6,
    rate: 2,
    installmentValue: 520,
    remainingInstallments: 6,
  },
  {
    id: 44654,
    type: 2,
    status: 1,
    description: "Loan for travel expenses",
    debtor: "Jake Park",
    date: "01/05/2024",
    amountDue: 1000,
    value: 2000,
    installments: 8,
    rate: 1,
    installmentValue: 200,
    remainingInstallments: 4,
  },
  {
    id: 46455,
    type: 1,
    status: 1,
    description: "Payment for rented equipment",
    creditor: "The Wraith",
    date: "05/08/2024",
    amountDue: 1000,
    value: 1000,
    installments: 2,
    rate: 1,
    installmentValue: 505,
    remainingInstallments: 2,
  },
];

const payables = transactions.filter((trans) => trans.type === 1);
const receivables = transactions.filter((trans) => trans.type === 2);

const loansPayables = payables.map(
  (loan) =>
    new Loan(
      loan.id,
      loan.type,
      loan.status,
      loan.description,
      null,
      loan.creditor,
      loan.date,
      loan.amountDue,
      loan.value,
      loan.installments,
      loan.rate,
      loan.installmentValue,
      loan.remainingInstallments
    )
);

const loansReceivables = receivables.map(
  (loan) =>
    new Loan(
      loan.id,
      loan.type,
      loan.status,
      loan.description,
      loan.debtor,
      null,
      loan.date,
      loan.amountDue,
      loan.value,
      loan.installments,
      loan.rate,
      loan.installmentValue,
      loan.remainingInstallments
    )
);

export function initLoanController() {
  const payablesContainer = document.querySelector(".payables__cards");
  const ctrlPayables = new LoanCtrl(payablesContainer, 1);
  loansPayables.forEach((loan) => ctrlPayables.addComponent(loan));
  ctrlPayables.renderComponents();
  ctrlPayables.clearComponents();

  const receivables = document.querySelector(".receivables__cards");
  const ctrlReceivables = new LoanCtrl(receivables, 2);
  loansReceivables.forEach((loan) => ctrlReceivables.addComponent(loan));
  ctrlReceivables.renderComponents();
  // ctrlReceivables.clearComponents();
}
