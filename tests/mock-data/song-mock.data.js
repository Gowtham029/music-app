const faker = require("faker");
const mongooseTypes = require("mongoose").Types;

const SONG_MOCK_DATA = {
  createRequest: {
    body: {
      title: faker.name.title(),
      albumName: faker.name.jobTitle(),
      duration: faker.random.number(),
    },
  },
  createResopnse: {
    _id: mongooseTypes.ObjectId(),
    title: faker.name.title(),
    albumName: faker.name.jobTitle(),
    duration: faker.random.number(),
    createdBy: mongooseTypes.ObjectId(),
    updatedBy: mongooseTypes.ObjectId(),
    __v: 0,
  },
  read: [
    {
      _id: mongooseTypes.ObjectId(),
      title: faker.name.title(),
      albumName: faker.name.jobTitle(),
      duration: faker.random.number(),
      __v: 0,
    },
    {
      _id: mongooseTypes.ObjectId(),
      title: faker.name.title(),
      albumName: faker.name.jobTitle(),
      duration: faker.random.number(),
      __v: 0,
    },
  ],
  updateRequest: {
    params: {
      id: "600d214a6405b12a34681141",
    },
    body: { title: faker.name.title() },
  },
  updateResponse: {
    _id: mongooseTypes.ObjectId(),
    title: faker.name.title(),
    albumName: faker.name.jobTitle(),
    duration: faker.random.number(),
    __v: 0,
  },
  deleteRequest: {
    params: {
      id: mongooseTypes.ObjectId(),
    },
  },
  deleteResponse: {
    message: "Deleted",
  },
  authentication: {
    userId: mongooseTypes.ObjectId(),
    username: faker.name.firstName(),
  },
};

module.exports = SONG_MOCK_DATA;
