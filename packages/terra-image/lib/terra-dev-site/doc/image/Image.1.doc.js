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

var _Image = require('!raw-loader!../../../../src/Image');

var _Image2 = _interopRequireDefault(_Image);

var _ImageDefault = require('../example/ImageDefault');

var _ImageDefault2 = _interopRequireDefault(_ImageDefault);

var _ImageDefault3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ImageDefault');

var _ImageDefault4 = _interopRequireDefault(_ImageDefault3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default Image',
      example: _react2.default.createElement(_ImageDefault2.default, null),
      source: _ImageDefault4.default
    }],
    propsTables: [{
      componentName: 'Image',
      componentSrc: _Image2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;