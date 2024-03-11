module.exports = {
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  testMatch: ["<rootDir>/tests/*/*.(test|spec).js"],
};