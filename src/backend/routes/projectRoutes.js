const express = require('express');
const router = express.Router();
const { createProject } = require('../controllers/projectController');

router.post('/', createProject); // Create a new project

module.exports = router;
