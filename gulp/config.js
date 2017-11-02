const API_MOCK_ORIGIN = 'https://localhost:8000'
const API_QA_ORIGIN = 'http://qa.ixam-creative.jp'

global.config = {
  production: {
    api: {
      endpoint: {
        facebook: '/facebook/api'
      }
    }
  },
  staging: {
    api: {
      endpoint: {
        facebook: '/facebook/api'
      }
    }
  },
  development: {
    api: {
      endpoint: {
        facebook: '/facebook/api'
      }
    }
  },
  docker: {
    api: {
      endpoint: {
        facebook: '/facebook/api'
      }
    }
  },
  mock: {
    api: {
      target: 'http://local.oahu.jp:8087',
      path: '/api',
      endpoint: {
        facebook: API_MOCK_ORIGIN + '/api'
      }
    }
  },
  qa: {
    api: {
      endpoint: {
        facebook: API_QA_ORIGIN + '/facebook/api'
      }
    }
  },
  paths: {
    assets: 'assets',
    src: {
      app: 'src',
      index: 'src/index.html',
      entries: 'src/index.js'
    },
    test: {
      karmaConfig: 'test/unit/karma.conf.js'
    },
    dist: {
      app: 'dist'
    }
  },
  filenames: {
    build: {
      scripts: 'bundle',
      scriptsVendor: 'vendor',
      styles: 'bundle.css'
    },
    release: {
      scripts: 'bundle.min.js'
    }
  },
  bundle: {
    replace: {
      gitCommitHash: 'GIT_COMMIT_HASH_PLACE_HOLDER'
    }
  }
}
