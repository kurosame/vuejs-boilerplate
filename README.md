# Vue.js Boilerplate

## Usage

```sh
git clone https://github.com/kurosame/vuejs-boilerplate.git
yarn install
```

## Tasks

```sh
yarn start             # Run webpack-dev-server
yarn start:e2e         # Run webpack-dev-server for E2E test
yarn start:mock        # Run mock
yarn start:server      # Run server
yarn start:server:e2e  # Run server for E2E test
yarn build             # Build for development
yarn build:production  # Build for production
yarn test              # Unit test (Jest + vue-test-utils)
yarn test:ci           # Unit test for CI
yarn e2e               # E2E test (Cypress)
yarn e2e:ci            # E2E test for CI
yarn e2e:run           # Run Cypress for E2E test
yarn e2e:run:ci        # Run Cypress for E2E test for CI
yarn clean:cache       # Clear cache of webpack
yarn clean:dist        # Clear dist directory
yarn clean:screenshots # Clear screenshots of Cypress
```

## Mock

Mock server is start at port 3000 when the `yarn start`\
You can check the axios sample and the async/await sample\
Also, you can edit fixtures/mock.json\
using https://github.com/typicode/json-server

## License

MIT
