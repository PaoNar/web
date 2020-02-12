const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize("cine", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  define: {
    timestamps: false
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;