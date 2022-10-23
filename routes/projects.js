const express = require('express');
const { getProjects, createProject, getProject, updateProject, deleteProject } = require('../controllers/projectsControllers');

const router = express.Router();

router
    .get('/', getProjects)
    .post('/', createProject)
    .get('/:id', getProject)
    .patch('/:id', updateProject)
    .delete('/:id', deleteProject)

module.exports = router