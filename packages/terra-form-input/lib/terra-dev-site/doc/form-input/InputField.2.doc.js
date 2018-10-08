'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _InputField = require('../../../../docs/InputField.md');

var _InputField2 = _interopRequireDefault(_InputField);

var _package = require('../../../../package.json');

var _InputField3 = require('!raw-loader!../../../../src/InputField');

var _InputField4 = _interopRequireDefault(_InputField3);

var _InputField5 = require('../../../InputField');

var _InputField6 = _interopRequireDefault(_InputField5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _InputField2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      example: _react2.default.createElement(_InputField6.default, {
        inputId: 'Profile Name',
        label: 'Profile Name',
        help: 'Note: This can not be changed in the future',
        inputAttrs: {
          placeholder: 'Profile Name',
          name: 'profile',
          type: 'text'
        }
      })
    }],
    propsTables: [{
      componentName: 'Form Input Field',
      componentSrc: _InputField4.default
    }]
  });
};

// Example Files
exports.default = DocPage;