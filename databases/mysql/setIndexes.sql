CREATE INDEX idx_user_id ON accounts (user_id);
CREATE INDEX idx_status_id ON accounts (status_id);

CREATE INDEX idx_debtor_account_id ON loans (debtor_account_id);
CREATE INDEX idx_creditor_account_id ON loans (creditor_account_id);
CREATE INDEX idx_status_id ON loans (status_id);

CREATE INDEX idx_loan_id ON loan_installments (loan_id);
CREATE INDEX idx_status_id ON loan_installments (status_id);

CREATE INDEX idx_installment_id ON loan_payments (installment_id);

CREATE INDEX idx_sender_account_id ON transfers (sender_account_id);
CREATE INDEX idx_receiver_account_id ON transfers (receiver_account_id);
CREATE INDEX idx_status_id ON transfers (status_id);

CREATE INDEX idx_account_id ON investments (account_id);
CREATE INDEX idx_status_id ON investments (status_id);

CREATE INDEX idx_account_id ON operations (account_id);
CREATE INDEX idx_category_id ON operations (category_id);
CREATE INDEX idx_flow_id ON operations (flow_id);