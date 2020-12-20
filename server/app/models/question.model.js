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
        // answers:{
        // check how to use list of string
        // },
        correctAnswer: {
            type: Sequelize.STRING
        }
    });

    return Question;
};