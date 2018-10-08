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

var _VisuallyHiddenText = require('!raw-loader!../../../../src/VisuallyHiddenText');

var _VisuallyHiddenText2 = _interopRequireDefault(_VisuallyHiddenText);

var _DefaultVisuallyHiddenText = require('../example/DefaultVisuallyHiddenText');

var _DefaultVisuallyHiddenText2 = _interopRequireDefault(_DefaultVisuallyHiddenText);

var _DefaultVisuallyHiddenText3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultVisuallyHiddenText.jsx');

var _DefaultVisuallyHiddenText4 = _interopRequireDefault(_DefaultVisuallyHiddenText3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'VisuallyHiddenText with empty string',
      example: _react2.default.createElement(_DefaultVisuallyHiddenText2.default, null),
      source: _DefaultVisuallyHiddenText4.default
    }],
    propsTables: [{
      componentName: 'VisuallyHiddenText',
      componentSrc: _VisuallyHiddenText2.default
    }]
  });
};

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
exports.default = DocPage;