module.exports = (sequelize, Sequelize) => {
    const Stage = sequelize.define("stage", {
        stageNumber: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.INTEGER
        },
    });

    return Stage;
};