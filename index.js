const mongoose = require("mongoose");
const User = require("./services/user.service");
const Song = require("./services/song.service");

const MOCK_DATA_SONG = require("./tests/mock-data/song-mock.data");

const { MONGO_URL } = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

mongoose
  .connect(MONGO_URL, options)
  .then(async () => {
    console.log("Connected to Database")

    console.log("Run npm run coverage to see the mock test results")
  })
  .catch((err) => {
    console.log(err);
  });

// The Calling/Exposing the CRUD operations goes here, Since We mocked the CRUD operations haven't exposed
// ...
// ...
// ...
// const createSong = async () => {
//   try {
//     const result = await Song.updateSong(
//       MOCK_DATA_SONG.updateRequest,
//       MOCK_DATA_SONG.authentication
//     );
//     console.log("Created Successfully", result);
//   } catch (error) {
//     throw error;
//   }
// };
