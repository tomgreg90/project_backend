const { encryptPasswords } = require("../utils/utils");
const { expect } = require("chai");
const bcrypt = require("bcrypt");

describe("encryptPasswords", () => {
  it("returns an empty array when passed an empty array", () => {
    const array = [];
    const expected = [];
    const actual = encryptPasswords(array);
    expect(actual).to.eql(expected);
  });
  it("returns a single user with encrypted password", async () => {
    const array = [
      {
        username: "dom_thompson",
        password: "RFz9M@>2",
      },
    ];
    const expected = [
      {
        username: "dom_thompson",
        password: await bcrypt.hash("RFz9M@>2", 12),
      },
    ];

    const actual = encryptPasswords(array);

    expect(actual).to.eql(expected);
  });
});
