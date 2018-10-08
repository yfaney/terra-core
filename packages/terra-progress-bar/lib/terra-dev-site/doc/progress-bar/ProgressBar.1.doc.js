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

var _ProgressBar = require('!raw-loader!../../../../src/ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _ProgressBarDefault = require('../example/ProgressBarDefault');

var _ProgressBarDefault2 = _interopRequireDefault(_ProgressBarDefault);

var _ProgressBarDefault3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ProgressBarDefault');

var _ProgressBarDefault4 = _interopRequireDefault(_ProgressBarDefault3);

var _ProgressBarSize = require('../example/ProgressBarSize');

var _ProgressBarSize2 = _interopRequireDefault(_ProgressBarSize);

var _ProgressBarSize3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ProgressBarSize');

var _ProgressBarSize4 = _interopRequireDefault(_ProgressBarSize3);

var _ProgressBarColor = require('../example/ProgressBarColor');

var _ProgressBarColor2 = _interopRequireDefault(_ProgressBarColor);

var _ProgressBarColor3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ProgressBarColor');

var _ProgressBarColor4 = _interopRequireDefault(_ProgressBarColor3);

var _ProgressBarGradient = require('../example/ProgressBarGradient');

var _ProgressBarGradient2 = _interopRequireDefault(_ProgressBarGradient);

var _ProgressBarGradient3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ProgressBarGradient');

var _ProgressBarGradient4 = _interopRequireDefault(_ProgressBarGradient3);

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
      example: _react2.default.createElement(_ProgressBarDefault2.default, null),
      source: _ProgressBarDefault4.default
    }, {
      title: 'Size',
      example: _react2.default.createElement(_ProgressBarSize2.default, null),
      source: _ProgressBarSize4.default
    }, {
      title: 'Color',
      example: _react2.default.createElement(_ProgressBarColor2.default, null),
      source: _ProgressBarColor4.default
    }, {
      title: 'Gradient',
      example: _react2.default.createElement(_ProgressBarGradient2.default, null),
      source: _ProgressBarGradient4.default
    }],
    propsTables: [{
      componentName: 'Progress Bar',
      componentSrc: _ProgressBar2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;