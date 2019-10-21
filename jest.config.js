module.exports = {
  "roots": [
    "<rootDir>/src/"
],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "moduleNameMapper": {
    "@config/(.*)": "<rootDir>/src/config/$1",
    "@interfaces/(.*)": "<rootDir>/src/interfaces/$1",
    "@services/(.*)": "<rootDir>/src/services/$1"
  }
}