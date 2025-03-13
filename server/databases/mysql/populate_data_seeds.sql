INSERT INTO users (cpf, full_name, birth) VALUES
  ('14481718064', 'Ashley Williams', '1978-04-08'),
  ('69641640062', 'Cheryl Mason', '1993-06-27'),
  ('22646086091', 'Ada Wong', '1992-07-03'),
  ('79537234096', 'Claudette Morel', '1975-09-12'),
  ('58243072020', 'Dwight Fairfield', '1989-11-22'),
  ('99196216093', 'Meg Thomas', '1990-05-15'),
  ('27803226086', 'Jake Park', '1991-02-09'),
  ('48745826056', 'David King', '1989-11-21');

INSERT INTO accounts (user_id, email, password, balance) VALUES
  (1, 'ashley.williams@email.com', '12345678a', 48376),
  (2, 'cheryl.mason@email.com', '12345678b', 32546),
  (3, 'ada.wong@email.com', '12345678c', 0),
  (4, 'claudette.morel@email.com', '12345678d', 0),
  (5, 'dwight.fairfield@email.com', '12345678e', 0),
  (6, 'meg.thomas@email.com', '12345678f', 4556),
  (7, 'jake.park@email.com', '12345678g', 0),
  (8, 'david.king2@email.com', '12345678h', 0);

INSERT INTO loans (
  debtor_account_id,
  creditor_account_id,
  contract_date,
  value,
  month_rate,
  installments_qty
) 
VALUES
  (8, 5, '2024-11-21 14:30:00', 5000, 2.5, 12),
  (5, 3, '2024-06-15 09:45:00', 3000, 3.2, 6),
  (7, 6, '2024-09-10 16:20:00', 4500.5, 1.8, 24),
  (2, 1, '2024-03-05 11:00:00', 2000, 2, 6),
  (2, 8, '2024-12-01 08:15:00', 10000, 3.5, 36);

INSERT INTO loans (
  debtor_account_id,
  creditor_account_id,
  contract_date,
  value,
  month_rate,
  installments_qty,
  status_id
) 
VALUES
  (3, 6, '2024-10-22 11:20:00', 3300, 1.5, 6, 2),
  (5, 3, '2024-05-15 08:23:00', 25000, 3.2, 3, 2),
  (4, 2, '2024-03-10 07:50:00', 6500, 1.8, 6, 2),
  (6, 1, '2024-02-12 15:00:00', 8200, 2, 3, 2),
  (2, 7, '2024-09-13 16:12:00', 980, 1.2, 3, 2);

INSERT INTO loan_installments (
  loan_id,
  due_date,
  value
) 
VALUES
  (6, '2024-11-22', 550),
  (6, '2024-12-22', 550),
  (6, '2025-01-22', 550),
  (6, '2025-02-22', 550),
  (6, '2025-03-22', 550),
  (6, '2025-04-22', 550),
  (7, '2024-06-15', 8333.33),
  (7, '2024-07-15', 8333.33),
  (7, '2024-08-15', 8333.33),
  (8, '2024-04-10', 1085),
  (8, '2024-05-10', 1085),
  (8, '2024-06-10', 1085),
  (8, '2024-07-10', 1085),
  (8, '2024-08-10', 1085),
  (8, '2024-09-10', 1085);