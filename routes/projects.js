const express = require('express');
const { getProjects, createProject } = require('../controllers/projectsControllers');

const router = express.Router();

router
    .get('/', getProjects)
    .post('/', createProject)

module.exports = router