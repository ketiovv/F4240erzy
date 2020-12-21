module.exports = app => {
    const stages = require("../controllers/stage.controller.js");
    var router = require("express").Router();

    // Create a new Question
    router.post("/", stages.create);

    // Retrieve all Questions
    router.get("/", stages.findAll);

    // Retrieve a single Questions with id
    router.get("/:id", stages.findOne);

    // Retrieve all Questions with stage
    router.get("/stageNumber/:stage", stages.findByStage);

    // Update a Question with id
    router.put("/:id", stages.update);

    // Delete a Question with id
    router.delete("/:id", stages.delete);

    app.use('/api/stages', router);
};