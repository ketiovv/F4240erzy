module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
        id: {
            type: Sequelize.INTEGER
        },
        stage: {
            type: Sequelize.INTEGER
        },
        contentOfQuestion: {
            type: Sequelize.STRING
        },
    });

    return Question;
};