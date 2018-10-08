'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _CheckboxField = require('../../../../docs/CheckboxField.md');

var _CheckboxField2 = _interopRequireDefault(_CheckboxField);

var _package = require('../../../../package.json');

var _CheckboxField3 = require('!raw-loader!../../../../src/CheckboxField');

var _CheckboxField4 = _interopRequireDefault(_CheckboxField3);

var _DefaultCheckboxField = require('../example/field/DefaultCheckboxField');

var _DefaultCheckboxField2 = _interopRequireDefault(_DefaultCheckboxField);

var _DefaultCheckboxField3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/field/DefaultCheckboxField');

var _DefaultCheckboxField4 = _interopRequireDefault(_DefaultCheckboxField3);

var _ControlledCheckboxField = require('../example/field/ControlledCheckboxField');

var _ControlledCheckboxField2 = _interopRequireDefault(_ControlledCheckboxField);

var _ControlledCheckboxField3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/field/ControlledCheckboxField');

var _ControlledCheckboxField4 = _interopRequireDefault(_ControlledCheckboxField3);

var _OptionalCheckboxField = require('../example/field/OptionalCheckboxField');

var _OptionalCheckboxField2 = _interopRequireDefault(_OptionalCheckboxField);

var _OptionalCheckboxField3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/field/OptionalCheckboxField');

var _OptionalCheckboxField4 = _interopRequireDefault(_OptionalCheckboxField3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Examples
var checkboxFieldExamples = function checkboxFieldExamples() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _CheckboxField2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/terra-form-checkbox/src/CheckboxField.jsx',
    examples: [{
      title: 'Default CheckboxField Example',
      example: _react2.default.createElement(_DefaultCheckboxField2.default, null),
      source: _DefaultCheckboxField4.default
    }, {
      title: 'Optional CheckboxField Example',
      example: _react2.default.createElement(_OptionalCheckboxField2.default, null),
      source: _OptionalCheckboxField4.default
    }, {
      title: 'Controlled CheckboxField Example',
      example: _react2.default.createElement(_ControlledCheckboxField2.default, null),
      source: _ControlledCheckboxField4.default
    }],
    propsTables: [{
      componentName: 'CheckboxField',
      componentSrc: _CheckboxField4.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = checkboxFieldExamples;