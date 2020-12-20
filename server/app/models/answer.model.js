module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer", {
        id: {
            type: Sequelize.INTEGER
        },
        contentOfAnswer: {
            type: Sequelize.STRING
        },
    });

    return Answer;
};