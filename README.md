# Vue.js Boilerplate

## Usage

```sh
git clone https://github.com/kurosame/vuejs-boilerplate.git
npm install
```

## Tasks

```sh
npm start                 # Run webpack-dev-server
npm run start:e2e         # Run webpack-dev-server for E2E test
npm run start:mock        # Run mock
npm run start:server      # Run server
npm run start:server:e2e  # Run server for E2E test
npm run build             # Build for development
npm run build:production  # Build for production
npm test                  # Unit test (Jest + vue-test-utils)
npm run test:ci           # Unit test for CI
npm run e2e               # E2E test (Cypress)
npm run e2e:ci            # E2E test for CI
npm run e2e:run           # Run Cypress for E2E test
npm run e2e:run:ci        # Run Cypress for E2E test for CI
npm run storybook         # Storybook
npm run storybook:run     # Run Storybook
npm run clean:cache       # Clear cache of webpack
npm run clean:dist        # Clear dist directory
npm run clean:screenshots # Clear screenshots of Cypress
```

## Mock

Mock server is start at port 3000 when the `npm start`\
You can check the axios sample and the async/await sample\
Also, you can edit fixtures/mock.json\
using https://github.com/typicode/json-server

## Dependency

- node-sass  
  Depends on sass-loader
- vue-template-compiler  
  Depends on vue-loader

## License

MIT
