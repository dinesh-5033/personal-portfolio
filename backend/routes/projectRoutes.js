const express = require("express");

const router = express.Router();

const {
    getProjects,
    addProject
} = require("../controllers/projectController");

// GET all projects
router.get("/", getProjects);

// POST project
router.post("/", addProject);

module.exports = router;