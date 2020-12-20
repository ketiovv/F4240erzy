module.exports = app => {
    const answers = require("../controllers/answer.controller.js");
    var router = require("express").Router();

    // Create a new Answer
    router.post("/", answers.create);

    // Retrieve all Answer
    router.get("/", answers.findAll);

    // Retrieve a single Answers with id
    router.get("/:id", answers.findOne);

    // Retrieve all Answers with stage
    router.get("/question/:id", answers.findByQuestionId);

    // Update a Answer with id
    router.put("/:id", answers.update);

    // Delete a Answer with id
    router.delete("/:id", answers.delete);

    app.use('/api/answers', router);
};