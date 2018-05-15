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
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  coverageReporters: ['html', 'text-summary']
}
