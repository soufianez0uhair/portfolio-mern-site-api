const express = require('express');
const { getProjects } = require('../controllers/projectsControllers');

const router = express.Router();

router
    .get('/', getProjects)
    

module.exports = router