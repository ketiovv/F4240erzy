const db = require("../models");
const Question = db.questions;
const Op = db.Sequelize.Op;


// Create and Save a new Question
exports.create = (req, res) => {
    // Validate request
    if (!req.body.contentOfQuestion) {
        res.status(400).send({
            message: "Content can not be empty."
        });
        return;
    }

    // Create Question
    const question = {
        stage: req.body.stage,
        contentOfQuestion: req.body.contentOfQuestion
    }

    Question.create(question)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Question."
            });
        });
};

// Retrieve all Questions from the database.
exports.findAll = (req, res) => {
    const contentOfQuestion = req.query.contentOfQuestion;
    var condition = contentOfQuestion ? {
        contentOfQuestion: {
            [Op.like]: `%${contentOfQuestion}%`
        }
    } : null;

    Question.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving question."
            });
        });
};

// Find a single Question with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Question.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving Question with id=" + id
            });
        });
};

// Update a Question by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Question.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Question was updated successfully."
                })
            } else {
                res.send({
                    message: `Cannot update Question with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Question with id=" + id
            });
        });
};