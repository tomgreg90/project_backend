const Musicians = require("./db");

const resolvers = {
  Query: {
    musicians: () => {
      return Musicians.findAll().then((res) => {
        return res;
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
            console.log(res);
            return res;
          });
      });
    },
  },
};

module.exports = resolvers;
