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

const Group = db.define("group", {
  groupName: { type: Sequelize.STRING },
  contact: { type: Sequelize.STRING },
  musicGenre: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  about: { type: Sequelize.STRING },
});

db.sync({ force: true }).then(() => {
  return Musician.bulkCreate(musicianData).then(() => {
    return Group.bulkCreate([
      {
        groupName: "MANCHESTER BEETHOVEN ORCHESTRA",
        contact: "Zoe Edmunds",
        musicGenre: "Classical Music",
        email: "admin@beethovenorchestra.co.uk",
        about:
          "We are an amateur orchestra attracting and welcoming members from across the Greater Manchester area. ",
      },
      {
        groupName: "Manchester Music Makers",
        contact: "Amelia Bailey",
        musicGenre: "Classical and Pop",
        email: "admin@manchestermusicmakers.co.uk",
        about:
          "Manchester Music Makers is a friendly orchestra of intermediate standard, always ready to welcome new members.",
      },
      {
        groupName: "The Dave Egerton Band",
        contact: "Penelope Glover",
        musicGenre: "Jazz and Swing",
        email: "admin@@daveegertonband.co.uk",
        about: "",
      },
    ]);
  });
});

const Musicians = db.models.musician;
const Groups = db.models.group;

module.exports = { Musicians, Groups };
