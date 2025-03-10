const express = require('express');
const router = express.Router();
const controller = require('../controllers/loanController');

router.get('/:category', controller.getAllByCategory);
router.get('/:category/details/:id', controller.getDetailsByCategoryAndId);

module.exports = router;
