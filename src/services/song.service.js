const Song = require("../models/song.model");

/**
 * Create a song
 * @param {Object} input
 * @param {Object} authenticatedUser
 * @returns {Promise<Song>}
 */
const createSong = async (input, authenticatedUser) => {
  if (!authenticatedUser) {
    throw new Error("Unauthorized");
  }
  input.body.createdBy = authenticatedUser.userId;
  const song = await Song.create(input.body);
  return song;
};

/**
 * List all songs
 * @param {Object} input
 * @param {Object} authenticatedUser
 * @returns {Promise<Song>}
 */
const listSongs = async (input, authenticatedUser) => {
  if (!authenticatedUser) {
    throw new Error("Unauthorized");
  }
  const songs = await Song.find(input);
  return songs;
};

/**
 * Update a song
 * @param {Object} input
 * @param {Object} authenticatedUser
 * @returns {Promise<Song>}
 */
const updateSong = async (input, authenticatedUser) => {
  if (!authenticatedUser) {
    throw new Error("Unauthorized");
  }
  const song = await Song.findById(input.params.id);
  if (!song) {
    throw new Error("Song not found");
  }
  input.body.updatedBy = authenticatedUser.userId;
  Object.assign(song, input.body);
  await song.save();
  return song;
};

/**
 * Delete a song
 * @param {Object} input
 * @param {Object} authenticatedUser
 * @returns {Promise<Song>}
 */
const deleteSong = async (input, authenticatedUser) => {
  if (!authenticatedUser) {
    throw new Error("Unauthorized");
  }
  const song = await Song.findById(input.params.id);
  if (!song) {
    throw new Error("Song not found");
  }
  await song.remove();
  return song;
};

module.exports = {
  createSong,
  listSongs,
  updateSong,
  deleteSong,
};
