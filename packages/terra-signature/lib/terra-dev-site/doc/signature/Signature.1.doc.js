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

var _Signature = require('!raw-loader!../../../../src/Signature');

var _Signature2 = _interopRequireDefault(_Signature);

var _SignatureExample = require('../example/SignatureExample');

var _SignatureExample2 = _interopRequireDefault(_SignatureExample);

var _SignatureExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SignatureExample');

var _SignatureExample4 = _interopRequireDefault(_SignatureExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default Signature',
      example: _react2.default.createElement(_SignatureExample2.default, null),
      source: _SignatureExample4.default
    }],
    propsTables: [{
      componentName: 'Signature',
      componentSrc: _Signature2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;