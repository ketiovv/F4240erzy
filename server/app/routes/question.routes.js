module.exports = app => {
    const questions = require("../controllers/question.controller.js");
    var router = require("express").Router();

    // Create a new Question
    router.post("/", questions.create);

    // Retrieve all Questions
    router.get("/", questions.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", questions.findOne);

    app.use('/api/questions', router);
};