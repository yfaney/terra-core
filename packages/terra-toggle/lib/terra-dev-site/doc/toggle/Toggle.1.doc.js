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

var _Toggle = require('!raw-loader!../../../../src/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _DefaultToggle = require('../example/DefaultToggle');

var _DefaultToggle2 = _interopRequireDefault(_DefaultToggle);

var _DefaultToggle3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultToggle');

var _DefaultToggle4 = _interopRequireDefault(_DefaultToggle3);

var _AnimatedToggle = require('../example/AnimatedToggle');

var _AnimatedToggle2 = _interopRequireDefault(_AnimatedToggle);

var _AnimatedToggle3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AnimatedToggle');

var _AnimatedToggle4 = _interopRequireDefault(_AnimatedToggle3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default Toggle',
      example: _react2.default.createElement(_DefaultToggle2.default, null),
      source: _DefaultToggle4.default
    }, {
      title: 'isAnimated Toggle',
      example: _react2.default.createElement(_AnimatedToggle2.default, null),
      source: _AnimatedToggle4.default
    }],
    propsTables: [{
      componentName: 'Toggle',
      componentSrc: _Toggle2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;