module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts'],
  testMatch: ['<rootDir>/test/unit/specs/**/*.ts'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/test/unit/$1'
  },
  setupFiles: ['<rootDir>/test/unit/setup.ts'],
  snapshotSerializers: ['jest-serializer-vue'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.vue',
    '<rootDir>/src/containers/**/*.vue',
    '<rootDir>/src/vuex/actions/**/*.ts',
    '<rootDir>/src/vuex/getters/**/*.ts',
    '<rootDir>/src/vuex/modules/**/*.ts'
  ],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  coverageReporters: ['html', 'text-summary'],
  verbose: true
}
