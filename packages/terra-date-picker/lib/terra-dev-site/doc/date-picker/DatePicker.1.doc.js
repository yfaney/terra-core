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

var _DatePicker = require('!raw-loader!../../../../src/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _DatePickerDefault = require('../example/DatePickerDefault');

var _DatePickerDefault2 = _interopRequireDefault(_DatePickerDefault);

var _DatePickerDefault3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerDefault');

var _DatePickerDefault4 = _interopRequireDefault(_DatePickerDefault3);

var _DatePickerExcludeDates = require('../example/DatePickerExcludeDates');

var _DatePickerExcludeDates2 = _interopRequireDefault(_DatePickerExcludeDates);

var _DatePickerExcludeDates3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerExcludeDates');

var _DatePickerExcludeDates4 = _interopRequireDefault(_DatePickerExcludeDates3);

var _DatePickerIncludeDates = require('../example/DatePickerIncludeDates');

var _DatePickerIncludeDates2 = _interopRequireDefault(_DatePickerIncludeDates);

var _DatePickerIncludeDates3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerIncludeDates');

var _DatePickerIncludeDates4 = _interopRequireDefault(_DatePickerIncludeDates3);

var _DatePickerFilterDates = require('../example/DatePickerFilterDates');

var _DatePickerFilterDates2 = _interopRequireDefault(_DatePickerFilterDates);

var _DatePickerFilterDates3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerFilterDates');

var _DatePickerFilterDates4 = _interopRequireDefault(_DatePickerFilterDates3);

var _DatePickerMinMax = require('../example/DatePickerMinMax');

var _DatePickerMinMax2 = _interopRequireDefault(_DatePickerMinMax);

var _DatePickerMinMax3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerMinMax');

var _DatePickerMinMax4 = _interopRequireDefault(_DatePickerMinMax3);

var _DatePickerDefaultDate = require('../example/DatePickerDefaultDate');

var _DatePickerDefaultDate2 = _interopRequireDefault(_DatePickerDefaultDate);

var _DatePickerDefaultDate3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerDefaultDate');

var _DatePickerDefaultDate4 = _interopRequireDefault(_DatePickerDefaultDate3);

var _DatePickerInsideModal = require('../example/DatePickerInsideModal');

var _DatePickerInsideModal2 = _interopRequireDefault(_DatePickerInsideModal);

var _DatePickerInsideModal3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerInsideModal');

var _DatePickerInsideModal4 = _interopRequireDefault(_DatePickerInsideModal3);

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
      example: _react2.default.createElement(_DatePickerDefault2.default, null),
      source: _DatePickerDefault4.default
    }, {
      title: 'Exclude Dates',
      example: _react2.default.createElement(_DatePickerExcludeDates2.default, null),
      source: _DatePickerExcludeDates4.default
    }, {
      title: 'Filter Dates',
      example: _react2.default.createElement(_DatePickerFilterDates2.default, null),
      source: _DatePickerFilterDates4.default
    }, {
      title: 'Include Dates',
      example: _react2.default.createElement(_DatePickerIncludeDates2.default, null),
      source: _DatePickerIncludeDates4.default
    }, {
      title: 'Min Max Selection Options',
      example: _react2.default.createElement(_DatePickerMinMax2.default, null),
      source: _DatePickerMinMax4.default
    }, {
      title: 'Default Date',
      example: _react2.default.createElement(_DatePickerDefaultDate2.default, null),
      source: _DatePickerDefaultDate4.default
    }, {
      title: 'Presented Inside Modal',
      example: _react2.default.createElement(_DatePickerInsideModal2.default, null),
      source: _DatePickerInsideModal4.default
    }],
    propsTables: [{
      componentName: 'Date Picker',
      componentSrc: _DatePicker2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;