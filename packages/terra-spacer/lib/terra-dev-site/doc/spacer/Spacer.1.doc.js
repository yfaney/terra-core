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

var _Spacer = require('!raw-loader!../../../../src/Spacer');

var _Spacer2 = _interopRequireDefault(_Spacer);

var _SpacerExample = require('../example/SpacerExample');

var _SpacerExample2 = _interopRequireDefault(_SpacerExample);

var _SpacerExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SpacerExample');

var _SpacerExample4 = _interopRequireDefault(_SpacerExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Spacer',
      description: 'Spacing default button with a padding value of large+4 and primary button with padding value of large+2',
      example: _react2.default.createElement(_SpacerExample2.default, null),
      source: _SpacerExample4.default
    }],
    propsTables: [{
      componentName: 'Spacer',
      componentSrc: _Spacer2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;