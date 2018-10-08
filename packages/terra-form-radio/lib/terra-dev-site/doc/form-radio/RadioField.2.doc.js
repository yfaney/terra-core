'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _RadioField = require('../../../../docs/RadioField.md');

var _RadioField2 = _interopRequireDefault(_RadioField);

var _package = require('../../../../package.json');

var _RadioField3 = require('!raw-loader!../../../../src/RadioField');

var _RadioField4 = _interopRequireDefault(_RadioField3);

var _DefaultRadioField = require('../example/field/DefaultRadioField');

var _DefaultRadioField2 = _interopRequireDefault(_DefaultRadioField);

var _DefaultRadioField3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/field/DefaultRadioField');

var _DefaultRadioField4 = _interopRequireDefault(_DefaultRadioField3);

var _ControlledRadioField = require('../example/field/ControlledRadioField');

var _ControlledRadioField2 = _interopRequireDefault(_ControlledRadioField);

var _ControlledRadioField3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/field/ControlledRadioField');

var _ControlledRadioField4 = _interopRequireDefault(_ControlledRadioField3);

var _OptionalRadioField = require('../example/field/OptionalRadioField');

var _OptionalRadioField2 = _interopRequireDefault(_OptionalRadioField);

var _OptionalRadioField3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/field/OptionalRadioField');

var _OptionalRadioField4 = _interopRequireDefault(_OptionalRadioField3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Examples
var RadioFieldExamples = function RadioFieldExamples() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _RadioField2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default RadioField Example',
      example: _react2.default.createElement(_DefaultRadioField2.default, null),
      source: _DefaultRadioField4.default
    }, {
      title: 'Optional RadioField Example',
      example: _react2.default.createElement(_OptionalRadioField2.default, null),
      source: _OptionalRadioField4.default
    }, {
      title: 'Controlled RadioField Example',
      example: _react2.default.createElement(_ControlledRadioField2.default, null),
      source: _ControlledRadioField4.default
    }],
    propsTables: [{
      componentName: 'RadioField',
      componentSrc: _RadioField4.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = RadioFieldExamples;