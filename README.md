# vuejs-boilerplate

## Usage

```sh
git clone https://github.com/kurosame/vuejs-boilerplate.git
yarn install
yarn build:vendor # This must be done in advance
```

## Tasks

### using TypeScript

```sh
yarn start            # webpack-dev-server localhost:8000
yarn build            # build for development
yarn build:production # build for production
yarn build:vendor     # build for vendor
yarn test             # unit test (karma + mocha + power-assert)
```

### using JavaScript(Babel)

```sh
yarn start:js            # webpack-dev-server localhost:8000
yarn build:js            # build for development
yarn build:production:js # build for production
yarn build:vendor        # build for vendor
yarn test                # unit test (karma + mocha + power-assert)
```

## Mock

start mock server\
axios sample and async/await sample can be confirmed

```sh
json-server mock.json # localhost:3000
```
