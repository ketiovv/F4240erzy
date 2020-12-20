module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
        stage: {
            type: Sequelize.INTEGER
        },
        contentOfQuestion: {
            type: Sequelize.STRING
        },
    });

    return Question;
};