const { users } = require('./insertUsers');

const randomDebtorIdAndCreditorId = () => {
  const length = users.length;
  const randomId = () => {
    return Math.floor(Math.random() * length);
  };

  let creditorId, debtorId;

  do {
    creditorId = randomId();
    debtorId = randomId();
  } while (creditorId === debtorId);

  return [creditorId, debtorId];
};



module.exports = [
  {
    debtor_account_id: 8,
    creditor_account_id: 5,
    contract_date: '2024-11-21 14:30:00',
    value: 5000,
    monthRate: 2.5,
    installmentsQty: 12,
  },
  {
    debtor_account_id: 5,
    creditor_account_id: 3,
    contract_date: '2024-06-15 09:45:00',
    value: 3000,
    monthRate: 3.2,
    installmentsQty: 6,
  },
  {
    debtor_account_id: 7,
    creditor_account_id: 6,
    contract_date: '2024-09-10 16:20:00',
    value: 4500.5,
    monthRate: 1.8,
    installmentsQty: 24,
  },
  {
    debtor_account_id: 2,
    creditor_account_id: 1,
    contract_date: '2024-03-05 11:00:00',
    value: 2000,
    monthRate: 2,
    installmentsQty: 6,
  },
  {
    debtor_account_id: 2,
    creditor_account_id: 8,
    contract_date: '2024-12-01 08:15:00',
    value: 10000,
    monthRate: 3.5,
    installmentsQty: 36,
  },
  {
    debtor_account_id: 3,
    creditor_account_id: 6,
    contract_date: '2024-10-22 11:20:00',
    value: 3300,
    monthRate: 1.5,
    installmentsQty: 6,
    status_id: 2,
  },
  {
    debtor_account_id: 5,
    creditor_account_id: 3,
    contract_date: '2024-05-15 08:23:00',
    value: 25000,
    monthRate: 3.2,
    installmentsQty: 3,
    status_id: 2,
  },
  {
    debtor_account_id: 4,
    creditor_account_id: 2,
    contract_date: '2024-03-10 07:50:00',
    value: 6500,
    monthRate: 1.8,
    installmentsQty: 6,
    status_id: 2,
  },
  {
    debtor_account_id: 6,
    creditor_account_id: 1,
    contract_date: '2024-02-12 15:00:00',
    value: 8200,
    monthRate: 2,
    installmentsQty: 3,
    status_id: 2,
  },
  {
    debtor_account_id: 2,
    creditor_account_id: 7,
    contract_date: '2024-09-13 16:12:00',
    value: 980,
    monthRate: 1.2,
    installmentsQty: 3,
    status_id: 2,
  },
];
