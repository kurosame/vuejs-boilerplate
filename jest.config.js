module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['<rootDir>/test/unit/specs/**/*.ts'],
  transform: {
    '^.+\\.ts$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/vuex/actions/**/*.ts',
    '<rootDir>/src/vuex/getters/**/*.ts',
    '<rootDir>/src/vuex/modules/**/*.ts',
    '<rootDir>/src/vuex/state/**/*.ts'
  ],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  coverageReporters: ['html', 'text-summary'],
  verbose: true
}
