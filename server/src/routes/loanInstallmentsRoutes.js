const express = require('express');
const router = express.Router();
const controller = require('../controllers/loanInstallmentController');

router.get('/:loanId', controller.getAllByLoanId);
router.get('/payment/:installmentId', controller.getPaymentByInstallmentId);

module.exports = router;
