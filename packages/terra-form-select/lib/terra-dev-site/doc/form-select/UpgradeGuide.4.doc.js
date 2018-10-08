'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _UPGRADEGUIDE = require('../../../../docs/UPGRADEGUIDE.md');

var _UPGRADEGUIDE2 = _interopRequireDefault(_UPGRADEGUIDE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: 'terra-form-select',
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/terra-form-select',
    readme: _UPGRADEGUIDE2.default
  });
}; /* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions */
exports.default = DocPage;