# Vue.js Boilerplate

## Usage

```sh
git clone https://github.com/kurosame/vuejs-boilerplate.git
yarn install
```

## Tasks

```sh
yarn start             # webpack-dev-server to localhost:8000
yarn build             # Build for development
yarn build:production  # Build for production
yarn test              # Unit test (Jest + vue-test-utils)
yarn test:ci           # Unit test for CI
yarn e2e               # E2E test (Cypress) to localhost:9000
yarn e2e:ci            # E2E test for CI
yarn e2e:start         # Run server for E2E test
yarn e2e:run           # Run Cypress for E2E test
yarn e2e:run:ci        # Run Cypress for E2E test for CI
yarn clean:cache       # Clear cache of webpack
yarn clean:dist        # Clear dist directory
yarn clean:screenshots # Clear screenshots of Cypress
```

## Hot Module Replacement

```sh
yarn start --hot
```

## Mock

Mock server is start at port 3000 when the `yarn start`\
You can check the axios sample and the async/await sample\
Also, you can edit mock.js\
using https://github.com/jaywcjlove/webpack-api-mocker

## License

MIT
