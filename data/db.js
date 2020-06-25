const Sequelize = require("sequelize");
const musicianData = require("./musicians");
const groupData = require("./groups");

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

const Group = db.define("group", {
  groupName: { type: Sequelize.STRING },
  contact: { type: Sequelize.STRING },
  musicGenre: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  about: { type: Sequelize.STRING },
});

db.sync({ force: true }).then(() => {
  return Musician.bulkCreate(musicianData).then(() => {
    return Group.bulkCreate(groupData);
  });
});

const Musicians = db.models.musician;
const Groups = db.models.group;

module.exports = { Musicians, Groups };
