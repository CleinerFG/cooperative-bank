const service = require('../services/loanInstallmentService');

module.exports = {
  async getAllByLoanId(req, res) {
    try {
      const { loanId } = req.params;
      const installments = await service.getAllByLoanId(loanId);
      if (!installments || installments.length === 0)
        return res.sendStatus(204);
      return res.json(installments);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async getPaymentByInstallmentId(req, res) {
    try {
      const { installmentId } = req.params;
      const payment = await service.getPaymentByInstallmentId(installmentId);
      if (!payment) return res.sendStatus(204);
      return res.json(payment);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },
};
