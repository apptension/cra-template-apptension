const { usersMock } = require('../fixtures/users');

module.exports = () => {
  const data = { users: usersMock };

  return data;
};
