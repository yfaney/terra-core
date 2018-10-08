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

var _DateTimePicker = require('!raw-loader!../../../../src/DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

var _DateTimePickerDefault = require('../example/DateTimePickerDefault');

var _DateTimePickerDefault2 = _interopRequireDefault(_DateTimePickerDefault);

var _DateTimePickerDefault3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DateTimePickerDefault');

var _DateTimePickerDefault4 = _interopRequireDefault(_DateTimePickerDefault3);

var _DateTimePickerDefaultDateTime = require('../example/DateTimePickerDefaultDateTime');

var _DateTimePickerDefaultDateTime2 = _interopRequireDefault(_DateTimePickerDefaultDateTime);

var _DateTimePickerDefaultDateTime3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DateTimePickerDefaultDateTime');

var _DateTimePickerDefaultDateTime4 = _interopRequireDefault(_DateTimePickerDefaultDateTime3);

var _DateTimePickerDefaultDateOnly = require('../example/DateTimePickerDefaultDateOnly');

var _DateTimePickerDefaultDateOnly2 = _interopRequireDefault(_DateTimePickerDefaultDateOnly);

var _DateTimePickerDefaultDateOnly3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DateTimePickerDefaultDateOnly');

var _DateTimePickerDefaultDateOnly4 = _interopRequireDefault(_DateTimePickerDefaultDateOnly3);

var _DateTimePickerExcludeDates = require('../example/DateTimePickerExcludeDates');

var _DateTimePickerExcludeDates2 = _interopRequireDefault(_DateTimePickerExcludeDates);

var _DateTimePickerExcludeDates3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DateTimePickerExcludeDates');

var _DateTimePickerExcludeDates4 = _interopRequireDefault(_DateTimePickerExcludeDates3);

var _DateTimePickerIncludeDates = require('../example/DateTimePickerIncludeDates');

var _DateTimePickerIncludeDates2 = _interopRequireDefault(_DateTimePickerIncludeDates);

var _DateTimePickerIncludeDates3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DateTimePickerIncludeDates');

var _DateTimePickerIncludeDates4 = _interopRequireDefault(_DateTimePickerIncludeDates3);

var _DateTimePickerFilterDates = require('../example/DateTimePickerFilterDates');

var _DateTimePickerFilterDates2 = _interopRequireDefault(_DateTimePickerFilterDates);

var _DateTimePickerFilterDates3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DateTimePickerFilterDates');

var _DateTimePickerFilterDates4 = _interopRequireDefault(_DateTimePickerFilterDates3);

var _DateTimePickerMinMax = require('../example/DateTimePickerMinMax');

var _DateTimePickerMinMax2 = _interopRequireDefault(_DateTimePickerMinMax);

var _DateTimePickerMinMax3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DateTimePickerMinMax');

var _DateTimePickerMinMax4 = _interopRequireDefault(_DateTimePickerMinMax3);

var _DateTimePickerDST = require('../example/DateTimePickerDST');

var _DateTimePickerDST2 = _interopRequireDefault(_DateTimePickerDST);

var _DateTimePickerDST3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DateTimePickerDST');

var _DateTimePickerDST4 = _interopRequireDefault(_DateTimePickerDST3);

var _DateTimePickerInsideModal = require('../example/DateTimePickerInsideModal');

var _DateTimePickerInsideModal2 = _interopRequireDefault(_DateTimePickerInsideModal);

var _DateTimePickerInsideModal3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DateTimePickerInsideModal');

var _DateTimePickerInsideModal4 = _interopRequireDefault(_DateTimePickerInsideModal3);

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
      example: _react2.default.createElement(_DateTimePickerDefault2.default, null),
      source: _DateTimePickerDefault4.default
    }, {
      title: 'Default Date Time',
      example: _react2.default.createElement(_DateTimePickerDefaultDateTime2.default, null),
      source: _DateTimePickerDefaultDateTime4.default
    }, {
      title: 'Default Date Only',
      example: _react2.default.createElement(_DateTimePickerDefaultDateOnly2.default, null),
      source: _DateTimePickerDefaultDateOnly4.default
    }, {
      title: 'Exclude Dates',
      example: _react2.default.createElement(_DateTimePickerExcludeDates2.default, null),
      source: _DateTimePickerExcludeDates4.default
    }, {
      title: 'Include Dates',
      example: _react2.default.createElement(_DateTimePickerIncludeDates2.default, null),
      source: _DateTimePickerIncludeDates4.default
    }, {
      title: 'Filter Dates',
      example: _react2.default.createElement(_DateTimePickerFilterDates2.default, null),
      source: _DateTimePickerFilterDates4.default
    }, {
      title: 'Min Max Selection Options',
      example: _react2.default.createElement(_DateTimePickerMinMax2.default, null),
      source: _DateTimePickerMinMax4.default
    }, {
      title: 'Daylight Saving',
      description: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'In the United States, the missing hour occurs when DST begins at these recent past and near future dates between 2:00 and 3:00.',
          _react2.default.createElement('br', null),
          ' ',
          '- March 13th, 2016',
          _react2.default.createElement('br', null),
          ' ',
          '- March 12th, 2017',
          _react2.default.createElement('br', null),
          ' ',
          '- March 11th, 2018',
          _react2.default.createElement('br', null),
          ' ',
          '- March 10th, 2019',
          _react2.default.createElement('br', null),
          ' ',
          '- March 08th, 2020'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In the United States, the ambiguous hour occurs when DST ends at these recent past and near future dates between 1:00 and 2:00:',
          _react2.default.createElement('br', null),
          ' ',
          '- November 6th, 2016',
          _react2.default.createElement('br', null),
          ' ',
          '- November 5th, 2017',
          _react2.default.createElement('br', null),
          ' ',
          '- November 4th, 2018',
          _react2.default.createElement('br', null),
          ' ',
          '- November 3rd, 2019',
          _react2.default.createElement('br', null),
          ' ',
          '- November 1st, 2020'
        ),
        _react2.default.createElement(
          'p',
          null,
          'For the United States, click',
          ' ',
          _react2.default.createElement(
            'a',
            { href: 'https://en.wikipedia.org/wiki/Daylight_saving_time_in_the_United_States' },
            'here'
          ),
          ' ',
          'to see more recent past and near future starting and ending dates of daylight saving time.',
          _react2.default.createElement('br', null),
          'For other time zones, click',
          ' ',
          _react2.default.createElement(
            'a',
            { href: 'http://www.timezoneconverter.com/cgi-bin/zoneinfo' },
            'here'
          ),
          ' ',
          'to see the starting and ending dates of daylight saving time for the current year.'
        )
      ),
      example: _react2.default.createElement(_DateTimePickerDST2.default, null),
      source: _DateTimePickerDST4.default
    }, {
      title: 'Presented Inside Modal',
      example: _react2.default.createElement(_DateTimePickerInsideModal2.default, null),
      source: _DateTimePickerInsideModal4.default
    }],
    propsTables: [{
      componentName: 'Date Time Picker',
      componentSrc: _DateTimePicker2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;