# Vue.js Boilerplate

## Usage

```sh
git clone https://github.com/kurosame/vuejs-boilerplate.git
yarn install
yarn build:vendor # Build for vendor (This must be done in advance)
```

## Tasks

```sh
yarn start            # webpack-dev-server localhost:8000
yarn build            # Build for development
yarn build:production # Build for production
yarn test             # Unit test (jest + vue-test-utils)
yarn test:ci          # Unit test for CI
```

## Mock

Start mock server\
You can check the axios sample and the async/await sample

```sh
json-server mock.json # localhost:3000
```
