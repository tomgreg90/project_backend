const Musicians = require("./db");

const resolvers = {
  Query: {
    musicians: () => {
      return Musicians.findAll().then((res) => {
        return res;
      });
    },
    musicianById: (parent, args) => {
      return Musicians.findAll({ where: { id: args.id } }).then((res) => {
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
  },
};

module.exports = resolvers;
