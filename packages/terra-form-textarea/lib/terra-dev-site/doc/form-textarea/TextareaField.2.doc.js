'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _TextareaField = require('../../../../docs/TextareaField.md');

var _TextareaField2 = _interopRequireDefault(_TextareaField);

var _package = require('../../../../package.json');

var _TextareaField3 = require('!raw-loader!../../../../src/TextareaField');

var _TextareaField4 = _interopRequireDefault(_TextareaField3);

var _TextareaField5 = require('../../../TextareaField');

var _TextareaField6 = _interopRequireDefault(_TextareaField5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _TextareaField2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      example: _react2.default.createElement(_TextareaField6.default, {
        inputId: 'Profile Description',
        label: 'Profile Description',
        help: 'Every Profile Needs a Description',
        inputAttrs: {
          name: 'description',
          placeholder: 'Enter a profile Description'
        }
      })
    }],
    propsTables: [{
      componentName: 'Textarea Field',
      componentSrc: _TextareaField4.default
    }]
  });
};

// Example Files
exports.default = DocPage;