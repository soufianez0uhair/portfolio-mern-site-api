const Project = require('../models/projectModel');
const mongoose = require('mongoose');

const getProjects = async (req, res) => {
    const projects = await Project.find({}).sort({createdAt: -1});

    if(!projects) {
        return res
                  .status(400)
                  .json({
                    status: 'fail',
                    message: 'No project was found!'
                  })
    }

    res
        .status(200)
        .json({
            status: 'success',
            data: {
                projects
            }
        })
}

const createProject = async (req, res) => {
    const {title, description, github, demo} = req.body;

    try {
        const project = await Project.create({title, description, github, demo});

        return res
                  .status(200)
                  .json({
                    status: 'success',
                    data: {
                        project
                    }
                  })
    } catch(err) {
        return res
                  .status(400)
                  .json({
                    status: 'fail',
                    message: err.message
                  })
    }
}

const getProject = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res
                  .status(400)
                  .json({
                    status: 'fail',
                    message: 'Invalid Id'
                  })
    }

    const project = await Project.findById(id);

    if(!project) {
        return res
                  .status(400)
                  .json({
                    status: 'fail',
                    message: 'No such project was found!'
                  })
    }

    res
        .status(200)
        .json({
            status: 'success',
            data: {
                project
            }
        })
}

const updateProject = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res
                  .status(400)
                  .json({
                    status: 'fail',
                    message: 'Invalid id'
                  })
    }

    const project = await Project.findOneAndUpdate({_id: id}, {...req.body}, {new: true});

    if(!project) {
        return res
                  .status(400)
                  .json({
                    status: 'fail',
                    message: 'No such project was found!'
                  })
    }

    res
        .status(200)
        .json({
            status: 'success',
            data: {
                project
            }
        })
}

const deleteProject = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res
                  .status(400)
                  .json({
                    status: 'fail',
                    message: 'Invalid Id'
                  })
    }

    const project = await Project.findOneAndDelete({_id: id});

    if(!project) {
        return res
                  .status(400)
                  .json({
                    status: 'fail',
                    message: 'No such project was found!'
                  })
    }

    res
        .status(200)
        .json({
            status: 'success',
            data: {
                project
            }
        })
}

module.exports = {getProjects, createProject, getProject, updateProject, deleteProject}