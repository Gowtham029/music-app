const User = require("../models/user.model");

/**
 * Create a user
 * @param {Object} input
 * @returns {Promise<User>}
 */
const createUser = async (input) => {
  const user = await User.create(input.body);
  return user;
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter) => {
  const users = await User.find(filter);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (input) => {
  return User.findById(input.params.id);
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
};
