const faker = require("faker");
const mongooseTypes = require("mongoose").Types;

const USER_MOCK_DATA = {
  createUserRequest: {
    body: {
      email: faker.internet.email(),
      username: faker.name.firstName(),
      userId: mongooseTypes.ObjectId(),
    },
  },
  createUserResponse: {
    _id: mongooseTypes.ObjectId(),
    email: faker.internet.email(),
    username: faker.name.firstName(),
    userId: mongooseTypes.ObjectId(),
    __v: 0,
  },
  listUsersRequest: {},
  listUsersResponse: [
    {
      _id: mongooseTypes.ObjectId(),
      email: faker.internet.email(),
      username: faker.name.firstName(),
      userId: mongooseTypes.ObjectId(),
      __v: 0,
    },
    {
      _id: mongooseTypes.ObjectId(),
      email: faker.internet.email(),
      username: faker.name.firstName(),
      userId: mongooseTypes.ObjectId(),
      __v: 0,
    },
  ],
  getUserRquest: {
    params: {
      id: mongooseTypes.ObjectId(),
    },
  },
  getUserResponse: {
    _id: mongooseTypes.ObjectId(),
    email: faker.internet.email(),
    username: faker.name.firstName(),
    userId: mongooseTypes.ObjectId(),
    __v: 0,
  },
};

module.exports = USER_MOCK_DATA;
