const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.questions = require("./question.model.js")(sequelize, Sequelize);
db.answers = require("./answer.model.js")(sequelize, Sequelize);

// TODO: Delete answers cascade
// add below to hasMany() -> (onDelete: 'cascade') ??
db.questions.hasMany(db.answers, { as: "answers" });
db.answers.belongsTo(db.questions, { foreignKey: "questionId", as: "question" });

module.exports = db;