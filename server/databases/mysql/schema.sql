CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  cpf VARCHAR(11) UNIQUE NOT NULL,
  birth DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS account_statuses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description enum('active', 'closed') NOT NULL
);

CREATE TABLE IF NOT EXISTS accounts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT NOW(),
  operation_password VARCHAR(60) DEFAULT NULL,
  balance DECIMAL(14,2) NOT NULL DEFAULT 0,
  status_id INT NOT NULL DEFAULT 1,

  FOREIGN KEY (user_id) REFERENCES users (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  FOREIGN KEY (status_id) REFERENCES account_statuses (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS loan_statuses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description enum('pending', 'active', 'finished', 'canceled', 'rejected') NOT NULL
);

CREATE TABLE IF NOT EXISTS loans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  debtor_account_id INT NOT NULL,
  creditor_account_id INT NOT NULL,
  contract_date DATETIME NOT NULL DEFAULT NOW(),
  value DECIMAL(11,2) NOT NULL,
  month_rate DECIMAL(4,2) NOT NULL,
  installments_qty INT NOT NULL,
  status_id INT NOT NULL DEFAULT 1,

  FOREIGN KEY (debtor_account_id) REFERENCES accounts (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  FOREIGN KEY (creditor_account_id) REFERENCES accounts (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  FOREIGN KEY (status_id) REFERENCES loan_statuses (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,

  CONSTRAINT chk_debtor_not_creditor CHECK (debtor_account_id <> creditor_account_id)
);


CREATE TABLE IF NOT EXISTS loan_installment_statuses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description enum('pending', 'paid') NOT NULL
);

CREATE TABLE IF NOT EXISTS loan_installments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  loan_id INT NOT NULL,
  value DECIMAL(11,2) NOT NULL,
  due_date date NOT NULL,
  status_id INT NOT NULL DEFAULT 1,

  FOREIGN KEY (loan_id) REFERENCES loans (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  FOREIGN KEY (status_id) REFERENCES loan_installment_statuses (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS loan_payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  installment_id INT NOT NULL,
  date DATETIME NOT NULL DEFAULT NOW() ,
  value DECIMAL(11,2) NOT NULL,

  FOREIGN KEY (installment_id) REFERENCES loan_installments (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS transfer_statuses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description enum('sent', 'refunded') NOT NULL
);

CREATE TABLE IF NOT EXISTS transfers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sender_account_id INT NOT NULL,
  receiver_account_id INT NOT NULL,
  date DATETIME NOT NULL DEFAULT NOW() ,
  value DECIMAL(14,2) NOT NULL,
  status_id INT NOT NULL DEFAULT 1,

  FOREIGN KEY (sender_account_id) REFERENCES accounts (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  FOREIGN KEY (receiver_account_id) REFERENCES accounts (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  FOREIGN KEY (status_id) REFERENCES transfer_statuses (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS investment_statuses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description enum('active', 'liquidated', 'canceled') NOT NULL
);

CREATE TABLE IF NOT EXISTS investments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_id INT NOT NULL,
  contract_date DATETIME NOT NULL,
  liquidy_date DATETIME NOT NULL,
  month_rate DECIMAL(4,2) NOT NULL,
  value DECIMAL(11,2) NOT NULL,
  status_id INT NOT NULL DEFAULT 1,

  FOREIGN KEY (account_id) REFERENCES accounts (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  FOREIGN KEY (status_id) REFERENCES investment_statuses (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS operation_categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  record_table enum('loans', 'loan_payments', 'transfers', 'investments') NOT NULL
)
COMMENT = 'This table defines the categories of operations, specifying the type of record
associated with each operation. The "record_table" column represents the source table
of the record, which is dynamically determined based on the "category_id"
in the related "operations" table. This enables a polymorphic
relationship to different tables depending on the operations category.
';

CREATE TABLE IF NOT EXISTS operation_flows (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description enum('credit', 'debit') NOT NULL
);

CREATE TABLE IF NOT EXISTS operations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_id INT NOT NULL,
  category_id INT NOT NULL,
  category_record_id INT NOT NULL COMMENT 'Polymorphic relationship: contains a record from the table specified in "record_table" of the table "operation_categories" according to the "category_id" of this table',
  flow_id INT NOT NULL,
  value DECIMAL(14,2) NOT NULL,

  FOREIGN KEY (account_id) REFERENCES accounts (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  FOREIGN KEY (category_id) REFERENCES operation_categories (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  FOREIGN KEY (flow_id) REFERENCES operation_flows (id)
    ON UPDATE RESTRICT ON DELETE RESTRICT
  );
  