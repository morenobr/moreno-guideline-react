module.exports = {
  roots: ["./src"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["node_modules/", "dist/"],
  transform: {
    "^.+\\.tsx?$": "@morenobr/guideline-react-jest/babelTransform.js",
  },
  testMatch: ["**/*.test.(ts|tsx)"],
  collectCoverageFrom: ["src/**"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
