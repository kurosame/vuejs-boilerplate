module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
  testMatch: ['<rootDir>/test/e2e/specs/**/*.ts'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  preset: 'jest-puppeteer',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  verbose: true
}
