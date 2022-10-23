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



module.exports = {getProjects}