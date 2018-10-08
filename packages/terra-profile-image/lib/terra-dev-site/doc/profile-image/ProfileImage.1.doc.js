'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('../../../../package.json');

var _ProfileImage = require('!raw-loader!../../../../src/ProfileImage');

var _ProfileImage2 = _interopRequireDefault(_ProfileImage);

var _ProfileImageDefault = require('../example/ProfileImageDefault');

var _ProfileImageDefault2 = _interopRequireDefault(_ProfileImageDefault);

var _ProfileImageDefault3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ProfileImageDefault');

var _ProfileImageDefault4 = _interopRequireDefault(_ProfileImageDefault3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default Profile Image',
      example: _react2.default.createElement(_ProfileImageDefault2.default, null),
      source: _ProfileImageDefault4.default
    }],
    propsTables: [{
      componentName: 'Profile Image',
      componentSrc: _ProfileImage2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;