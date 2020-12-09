const faker = require('faker');
const { range, map } = require('ramda');

faker.seed(100);

const usersMock = map(
  () => ({
    id: faker.random.uuid(),
    login: faker.internet.userName(),
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    email: faker.internet.email(),
  }),
  range(0, 100)
);

module.exports = {
  usersMock,
};
