const Sequelize = require("sequelize");
const musicianData = require("./musicians");

const db = new Sequelize("musicians", "tomgreg90", "password", {
  dialect: "postgres",
  storage: "localhost",
});

const Musician = db.define("musician", {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  instrument: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
});

db.sync({ force: true }).then(() => {
  return Musician.bulkCreate(musicianData).then(() => {
    console.log("database created");
  });
});

const Musicians = db.models.musician;

module.exports = Musicians;
