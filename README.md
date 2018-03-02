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
yarn test             # unit test (karma + mocha + power-assert)
```

## Mock

start mock server\
axios sample and async/await sample can be confirmed

```sh
json-server mock.json # localhost:3000
```
