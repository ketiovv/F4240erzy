module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer", {
        contentOfAnswer: {
            type: Sequelize.STRING
        },
        correct: {
            type: Sequelize.BOOLEAN
        }
    });

    return Answer;
};