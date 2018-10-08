'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _SelectField = require('../../../../docs/SelectField.md');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _package = require('../../../../package.json');

var _SelectField3 = require('!raw-loader!../../../../src/SelectField');

var _SelectField4 = _interopRequireDefault(_SelectField3);

var _SelectField5 = require('../example/SelectField');

var _SelectField6 = _interopRequireDefault(_SelectField5);

var _SelectField7 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SelectField');

var _SelectField8 = _interopRequireDefault(_SelectField7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _SelectField2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    propsTables: [{
      componentName: 'Select Field',
      componentSrc: _SelectField4.default
    }],
    examples: [{
      title: 'Select Field Example',
      example: _react2.default.createElement(_SelectField6.default, null),
      source: _SelectField8.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
exports.default = DocPage;