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

var _SlideGroup = require('!raw-loader!../../../../src/SlideGroup.jsx');

var _SlideGroup2 = _interopRequireDefault(_SlideGroup);

var _SlideGroupDemo = require('../example/SlideGroupDemo');

var _SlideGroupDemo2 = _interopRequireDefault(_SlideGroupDemo);

var _SlideGroupDemo3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SlideGroupDemo');

var _SlideGroupDemo4 = _interopRequireDefault(_SlideGroupDemo3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Non-Animated SlideGroup',
      example: _react2.default.createElement(_SlideGroupDemo2.default, null),
      source: _SlideGroupDemo4.default
    }, {
      title: 'Animated SlideGroup',
      example: _react2.default.createElement(_SlideGroupDemo2.default, { isAnimated: true }),
      source: _SlideGroupDemo4.default
    }],
    propsTables: [{
      componentName: 'Slide Group',
      componentSrc: _SlideGroup2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;