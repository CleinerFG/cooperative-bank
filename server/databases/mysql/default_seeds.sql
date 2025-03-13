INSERT INTO account_statuses (description) VALUES
  ('active'),
  ('closed');

INSERT INTO loan_statuses (description) VALUES
  ('pending'),
  ('active'),
  ('finished'),
  ('canceled'),
  ('rejected');

INSERT INTO loan_installment_statuses (description) VALUES
  ('pending'),
  ('paid');

INSERT INTO transfer_statuses (description) VALUES
  ('sent'),
  ('refunded');

INSERT INTO investment_statuses (description) VALUES
  ('active'),
  ('liquidated'),
  ('canceled');

INSERT INTO operation_categories (record_table) VALUES
  ('loans'),
  ('loan_payments'), 
  ('transfers'),
  ('investments');

INSERT INTO operation_flows (description) VALUES
  ('credit'),
  ('debit');