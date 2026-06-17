const Project = require("../models/Project");

// Get all projects
const getProjects = async (req, res) => {

    try {

        const projects = await Project.find();

        res.json(projects);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Add new project
const addProject = async (req, res) => {

    try {

        const project = new Project(req.body);

        await project.save();

        res.status(201).json(project);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }

};

module.exports = {
    getProjects,
    addProject
};