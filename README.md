# Vue.js Boilerplate

## Usage

```sh
git clone https://github.com/kurosame/vuejs-boilerplate.git
yarn install
yarn build:vendor # build for vendor (this must be done in advance)
```

## Tasks

```sh
yarn start            # webpack-dev-server localhost:8000
yarn build            # build for development
yarn build:production # build for production
yarn test             # unit test (jest + vue-test-utils)
```

To test in watch mode, add watch option or watchAll option of the jest option

```sh
yarn test --watch
yarn test --watchAll
```

## Mock

start mock server\
axios sample and async/await sample can be confirmed

```sh
json-server mock.json # localhost:3000
```
