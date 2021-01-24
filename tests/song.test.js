const Song = require("../src/models/song.model");
const songService = require("../src/services/song.service");
const SONG_MOCK_DATA = require("./mock-data/song-mock.data");

describe("Song Service", () => {
  beforeAll(() => {
    jest.setTimeout(6000);
    Song.find = jest.fn().mockResolvedValue(SONG_MOCK_DATA.read);
    Song.create = jest.fn().mockResolvedValue(SONG_MOCK_DATA.createResopnse);
    Song.findById = jest.fn().mockResolvedValue({
      save: jest.fn(),
    });
    Song.remove = jest.fn();
  });
  describe("Read Songs", () => {
    it("Should return Songs", async () => {
      const expected = SONG_MOCK_DATA.read;
      const result = songService.listSongs({}, SONG_MOCK_DATA.authentication);
      await expect(result).resolves.toEqual(expected);
    });

    it("Should return Unautorized", async () => {
      const expected = new Error("Unauthorized");
      const result = songService.listSongs({}, null);
      await expect(result).rejects.toEqual(expected);
    });
  });

  describe("Create Song", () => {
    it("Should Create a Song", async () => {
      const expected = SONG_MOCK_DATA.createResopnse;
      const result = songService.createSong(
        SONG_MOCK_DATA.createRequest,
        SONG_MOCK_DATA.authentication
      );
      await expect(result).resolves.toEqual(expected);
    });

    it("Should return Unautorized", async () => {
      const expected = new Error("Unauthorized");
      const result = songService.createSong(SONG_MOCK_DATA.createRequest, null);
      await expect(result).rejects.toEqual(expected);
    });
  });

  describe("Update Song", () => {
    it("Should Update a Song", async () => {
      const result = songService.updateSong(
        SONG_MOCK_DATA.updateRequest,
        SONG_MOCK_DATA.authentication
      );
    });

    it("Should return Unautorized", async () => {
      const expected = new Error("Unauthorized");
      const result = songService.updateSong(SONG_MOCK_DATA.updateRequest, null);
      await expect(result).rejects.toEqual(expected);
    });

    it("Should return Song not found", async () => {
      Song.findById = jest.fn().mockResolvedValue(null);
      const expected = new Error("Song not found");
      const result = songService.updateSong(
        SONG_MOCK_DATA.updateRequest,
        SONG_MOCK_DATA.authentication
      );
      await expect(result).rejects.toEqual(expected);
    });
  });

  describe("Delete Song", () => {
    it("Should return Unautorized", async () => {
      const expected = new Error("Unauthorized");
      const result = songService.deleteSong(SONG_MOCK_DATA.deleteRequest, null);
      await expect(result).rejects.toEqual(expected);
    });

    it("Should return Song not found", async () => {
      Song.findById = jest.fn().mockResolvedValue(undefined);
      const expected = new Error("Song not found");
      const result = songService.deleteSong(
        SONG_MOCK_DATA.deleteRequest,
        SONG_MOCK_DATA.authentication
      );
      await expect(result).rejects.toEqual(expected);
    });

    it("Should Delete a Song", async () => {
      Song.findById = jest.fn().mockResolvedValue({
        remove: jest.fn(),
      });
      const result = songService.deleteSong(
        SONG_MOCK_DATA.deleteRequest,
        SONG_MOCK_DATA.authentication
      );
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
