module.exports = {
  rootDir: "..",
  testMatch: [
    "**/__test__/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@groceries-frontend)/" --env=jsdom',
  ],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
