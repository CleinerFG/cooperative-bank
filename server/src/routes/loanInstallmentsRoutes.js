const express = require('express');
const router = express.Router();
const controller = require('../controllers/loanInstallmentController');

router.get('/:loanId', controller.getAllByLoanId);
router.get('/payment/:id', controller.getPaymentById);

module.exports = router;
