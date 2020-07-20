const { Musicians, Groups } = require("./db");
const { Op } = require("sequelize");

const resolvers = {
  Query: {
    musicians: (parent, args) => {
      console.log(args.instrument);

      return Musicians.findAll({
        where: {
          [Op.or]: [
            {
              instrument: { [Op.substring]: args.instrument },
            },
            { instrument: { [Op.iLike]: args.instrument } },
          ],
        },
      }).then((res) => {
        return res;
      });
    },
    musicianById: (parent, args) => {
      const { id } = args;
      return Musicians.findAll({ where: { id } }).then((res) => {
        return res[0];
      });
    },
    groups: () => {
      return Groups.findAll().then((res) => {
        return res;
      });
    },
    groupById: (parent, args) => {
      const { id } = args;
      return Groups.findAll({ where: { id } }).then((res) => {
        return res[0];
      });
    },
  },
  Mutation: {
    updateMusician: (parent, args) => {
      return Musicians.findByPk(args.id).then((res) => {
        return res
          .update({
            email: args.email,
          })
          .then((res) => {
            return res;
          });
      });
    },
    postMusician: (parent, args) => {
      const { firstName, lastName, instrument, email } = args;
      return Musicians.create({ firstName, lastName, instrument, email }).then(
        (res) => {
          return res;
        }
      );
    },
    postGroup: (parent, args) => {
      const { groupName, contact, musicGenre, email, about } = args;
      return Groups.create({
        groupName,
        contact,
        musicGenre,
        email,
        about,
      }).then((res) => {
        return res;
      });
    },
  },
};

module.exports = resolvers;
