const db = require("../models");
const Answer = db.answers;
const Op = db.Sequelize.Op;
// https://bezkoder.com/sequelize-associate-one-to-many/
// look for better solutions


// Create and Save a new Answer
exports.create = (req, res) => {
    // Validate request
    if (!req.body.contentOfAnswer) {
        res.status(400).send({
            message: "Content can not be empty."
        });
        return;
    }

    // Create Answer
    const answer = {
        contentOfAnswer: req.body.contentOfAnswer,
        correct: req.body.correct,
        questionId: req.body.questionId
    }

    Answer.create(answer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Answer."
            });
        });
};

// Retrieve all Answers from the database.
exports.findAll = (req, res) => {
    const contentOfAnswer = req.query.contentOfAnswer;
    var condition = contentOfAnswer ? {
        contentOfAnswer: {
            [Op.like]: `%${contentOfAnswer}%`
        }
    } : null;

    Answer.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Answer."
            });
        });
};

// Find a single Answer with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Answer.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving Answer with id=" + id
            });
        });
};

// Find all Answer for stage with an id
exports.findByQuestionId = (req, res) => {
    var questionId = req.params.id;
    Answer.findAll({ where: { questionId: questionId } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving answers."
            });
        });
};

// Update a Answer by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Answer.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Answer was updated successfully."
                })
            } else {
                res.send({
                    message: `Cannot update Answer with id=${id}. Maybe Answer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Answer with id=" + id
            });
        });
};

// Delete a Answer with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Answer.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Answer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Answer with id=${id}. Maybe Answer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Answer with id=" + id
            });
        });
};