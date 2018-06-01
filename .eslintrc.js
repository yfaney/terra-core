const fs = require('fs');
const path = require('path');
const loadJsonFile = require('load-json-file');
const glob = require('glob');
const packageNames = [];

// Get the names of each terra package
loadJsonFile.sync(path.resolve('lerna.json')).packages.forEach((globPath) => {
  glob.sync(globPath).forEach((packagePath) => {
    if (fs.existsSync(packagePath)) {
      packageNames.push(packagePath.replace('packages/', ''));
    }
  });
});

module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "max-len": "off", // Remove warnings on max line length exceeding 100 characters
    "react/require-default-props": "off", // Disabled the requirement to default all non-required props
  },
  "env": {
    "browser": true,
    "jest": true
  },
  "settings": {
    "import/core-modules": packageNames,
    "import/resolver": {
      "webpack": {
        "config": './webpack.config.js'
      }
    }
  },
  "globals": {
    "shallow": true,
    "render": true,
    "mount": true
  }
}
