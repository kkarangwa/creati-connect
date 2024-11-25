const express = require('express');
const router = express.Router();
const { createPortfolio } = require('../controllers/portfolioController');

router.post('/', createPortfolio); // Create a new portfolio

module.exports = router;
