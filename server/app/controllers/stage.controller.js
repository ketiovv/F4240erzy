const db = require("../models");
const Stage = db.stages;
const Op = db.Sequelize.Op;


// Create and Save a new Stage
exports.create = (req, res) => {
    // Validate request
    if (!req.body.stageNumber) {
        res.status(400).send({
            message: "Content can not be empty."
        });
        return;
    }

    // Create Stage
    const stage = {
        stageNumber: req.body.stageNumber,
        amount: req.body.amount
    }

    Stage.create(stage)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Stage."
            });
        });
};

// Retrieve all Stages from the database.
exports.findAll = (req, res) => {
    const stageNumber = req.query.stageNumber;
    var condition = stageNumber ? {
        stageNumber: {
            [Op.like]: `%${stageNumber}%`
        }
    } : null;

    Stage.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving stage."
            });
        });
};

// Find a single Stage with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Stage.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving Stage with id=" + id
            });
        });
};

// Find all Stage for stage with an id
exports.findByStage = (req, res) => {
    var stage = req.params.stage;
    Stage.findAll({ where: { stageNumber: stage } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving stages."
            });
        });
};

// Update a Stage by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Stage.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Stage was updated successfully."
                })
            } else {
                res.send({
                    message: `Cannot update Stage with id=${id}. Maybe Stage was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Stage with id=" + id
            });
        });
};

// Delete a Stage with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Stage.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Stage was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Stage with id=${id}. Maybe Stage was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Stage with id=" + id
            });
        });
};