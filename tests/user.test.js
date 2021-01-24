const User = require("../src/models/user.model");
const userService = require("../src/services/user.service");
const USER_MOCK_DATA = require("./mock-data/user-mock.data");

describe("User Service", () => {
  beforeAll(() => {
    jest.setTimeout(6000);
    User.create = jest
      .fn()
      .mockResolvedValue(USER_MOCK_DATA.createUserResponse);
    User.find = jest.fn().mockResolvedValue(USER_MOCK_DATA.listUsersResponse);
    User.findById = jest.fn().mockResolvedValue(USER_MOCK_DATA.getUserResponse);
  });

  it("Should return Users", async () => {
    const expected = USER_MOCK_DATA.listUsersResponse;
    const result = userService.queryUsers();
    await expect(result).resolves.toEqual(expected);
  });

  it("Should return User", async () => {
    const expected = USER_MOCK_DATA.getUserResponse;
    const result = userService.getUserById(USER_MOCK_DATA.getUserRquest);
    await expect(result).resolves.toEqual(expected);
  });

  it("Should Create User", async () => {
    const expected = USER_MOCK_DATA.createUserResponse;
    const result = userService.createUser(USER_MOCK_DATA.createUserRequest);
    await expect(result).resolves.toEqual(expected);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
