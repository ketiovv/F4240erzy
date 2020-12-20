module.exports = app => {
    const questions = require("../controllers/question.controller.js");
    var router = require("express").Router();

    // Create a new Question
    router.post("/", questions.create);

    // Retrieve all Questions
    router.get("/", questions.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", questions.findOne);

    // Update a Question with id
    router.put("/:id", questions.update);

    // Delete a Question with id
    router.delete("/:id", questions.delete);

    app.use('/api/questions', router);
};