const Project = require('../models/projectModel');

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

module.exports = {getProjects, createProject}