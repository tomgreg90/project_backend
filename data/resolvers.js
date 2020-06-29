const { Musicians, Groups, Users } = require("./db");
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    musicians: (parent, args, context) => {
      if (!context.user) return null;
      return Musicians.findAll().then((res) => {
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
    register: async (parent, args) => {
      args.password = await bcrypt.hash(args.password, 12);
      const { username, password } = args;

      return Users.create({ username, password }).then((res) => {
        return res;
      });
    },
    login: async (parent, args) => {
      const user = await Users.findOne({ where: { username: args.username } });
      if (!user) throw new Error("User does not exist!");

      const valid = await bcrypt.compare(args.password, user.password);
      if (!valid) throw new Error("Invalid password!");
    },
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
