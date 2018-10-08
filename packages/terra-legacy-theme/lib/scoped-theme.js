'use strict';

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

require('./scss/scoped-theme.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  themeName: '' + _package2.default.name
};