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

var _ToggleSectionHeader = require('!raw-loader!../../../../src/ToggleSectionHeader');

var _ToggleSectionHeader2 = _interopRequireDefault(_ToggleSectionHeader);

var _DefaultToggleSectionHeader = require('../example/DefaultToggleSectionHeader');

var _DefaultToggleSectionHeader2 = _interopRequireDefault(_DefaultToggleSectionHeader);

var _DefaultToggleSectionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultToggleSectionHeader');

var _DefaultToggleSectionHeader4 = _interopRequireDefault(_DefaultToggleSectionHeader3);

var _AnimatedToggleSectionHeader = require('../example/AnimatedToggleSectionHeader');

var _AnimatedToggleSectionHeader2 = _interopRequireDefault(_AnimatedToggleSectionHeader);

var _AnimatedToggleSectionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AnimatedToggleSectionHeader');

var _AnimatedToggleSectionHeader4 = _interopRequireDefault(_AnimatedToggleSectionHeader3);

var _TransparentToggleSectionHeader = require('../example/TransparentToggleSectionHeader');

var _TransparentToggleSectionHeader2 = _interopRequireDefault(_TransparentToggleSectionHeader);

var _TransparentToggleSectionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TransparentToggleSectionHeader');

var _TransparentToggleSectionHeader4 = _interopRequireDefault(_TransparentToggleSectionHeader3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default',
      example: _react2.default.createElement(_DefaultToggleSectionHeader2.default, null),
      source: _DefaultToggleSectionHeader4.default
    }, {
      title: 'Two Column',
      example: _react2.default.createElement(_AnimatedToggleSectionHeader2.default, null),
      source: _AnimatedToggleSectionHeader4.default
    }, {
      title: 'Transparent',
      example: _react2.default.createElement(_TransparentToggleSectionHeader2.default, null),
      source: _TransparentToggleSectionHeader4.default
    }],
    propsTables: [{
      componentName: 'Toggle Section Header',
      componentSrc: _ToggleSectionHeader2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;