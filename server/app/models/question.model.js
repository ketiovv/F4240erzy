module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
        contentOfQuestion: {
            type: Sequelize.STRING
        },
    });

    return Question;
};