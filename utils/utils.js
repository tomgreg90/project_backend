const bcrypt = require("bcrypt");

const encryptPasswords = (users) => {
  return users.map(async (user) => {
    user.password = await bcrypt.hash(user.password, 12);

    return user;
  });
};

module.exports = { encryptPasswords };
