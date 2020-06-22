const Sequelize = require("sequelize");
const musicianData = require("./musicians");

let db;
if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
  });
} else {
  db = new Sequelize("musicians", "tomgreg90", "password", {
    dialect: "postgres",
    storage: "localhost",
  });
}

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
