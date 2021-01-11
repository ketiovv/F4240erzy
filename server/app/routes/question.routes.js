module.exports = app => {
    const questions = require("../controllers/question.controller.js");
    var router = require("express").Router();

    // Create a new Question
    router.post("/", questions.create);

    // Retrieve all Questions
    router.get("/", questions.findAll);

    // Retrieve a single Questions with id
    router.get("/:id", questions.findOne);

    // Retrieve all Questions with stage
    router.get("/stage/:stage", questions.findByStage);

    // Retrieve random Question at stage
    router.get("/random/:stageId", questions.findOneByStage)

    // Update a Question with id
    router.put("/:id", questions.update);

    // Delete a Question with id
    router.delete("/:id", questions.delete);

    app.use('/api/questions', router);
};