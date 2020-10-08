/* eslint-disable no-undef */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/index.ts"],
  testMatch: ["<rootDir>/**/?(*.)+(test).ts?(x)"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
};
