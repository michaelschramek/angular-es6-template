System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.3",
    "angular-resource": "github:angular/bower-angular-resource@1.4.3",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "babel": "npm:babel-core@5.7.4",
    "babel-runtime": "npm:babel-runtime@5.7.0",
    "bootstrap-sass": "github:twbs/bootstrap-sass@3.3.5",
    "core-js": "npm:core-js@0.9.13",
    "jquery": "github:components/jquery@2.1.4",
    "lodash": "npm:lodash@3.10.0",
    "restangular": "github:mgonto/restangular@1.5.1",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.3"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:mgonto/restangular@1.5.1": {
      "angular": "github:angular/bower-angular@1.4.3",
      "lodash": "npm:lodash@3.10.0"
    },
    "npm:babel-runtime@5.7.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.13": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:lodash@3.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

