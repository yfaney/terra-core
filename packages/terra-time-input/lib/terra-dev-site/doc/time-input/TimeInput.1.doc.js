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

var _TimeInput = require('!raw-loader!../../../../src/TimeInput');

var _TimeInput2 = _interopRequireDefault(_TimeInput);

var _TimeInputDefaultTime = require('../example/TimeInputDefaultTime');

var _TimeInputDefaultTime2 = _interopRequireDefault(_TimeInputDefaultTime);

var _TimeInputDefaultTime3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputDefaultTime');

var _TimeInputDefaultTime4 = _interopRequireDefault(_TimeInputDefaultTime3);

var _TimeInputDefaultTwelveHour = require('../example/TimeInputDefaultTwelveHour');

var _TimeInputDefaultTwelveHour2 = _interopRequireDefault(_TimeInputDefaultTwelveHour);

var _TimeInputDefaultTwelveHour3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputDefaultTwelveHour');

var _TimeInputDefaultTwelveHour4 = _interopRequireDefault(_TimeInputDefaultTwelveHour3);

var _TimeInputNoDefaultTime = require('../example/TimeInputNoDefaultTime');

var _TimeInputNoDefaultTime2 = _interopRequireDefault(_TimeInputNoDefaultTime);

var _TimeInputNoDefaultTime3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputNoDefaultTime');

var _TimeInputNoDefaultTime4 = _interopRequireDefault(_TimeInputNoDefaultTime3);

var _TimeInputNoDefaultTwelveHour = require('../example/TimeInputNoDefaultTwelveHour');

var _TimeInputNoDefaultTwelveHour2 = _interopRequireDefault(_TimeInputNoDefaultTwelveHour);

var _TimeInputNoDefaultTwelveHour3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputNoDefaultTwelveHour');

var _TimeInputNoDefaultTwelveHour4 = _interopRequireDefault(_TimeInputNoDefaultTwelveHour3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Without Default Time',
      example: _react2.default.createElement(_TimeInputNoDefaultTime2.default, null),
      source: _TimeInputNoDefaultTime4.default
    }, {
      title: 'With Default Time',
      example: _react2.default.createElement(_TimeInputDefaultTime2.default, null),
      source: _TimeInputDefaultTime4.default
    }, {
      title: 'Without Default Time - 12 Hour',
      example: _react2.default.createElement(_TimeInputNoDefaultTwelveHour2.default, null),
      source: _TimeInputNoDefaultTwelveHour4.default
    }, {
      title: 'With Default Time - 12 Hour',
      example: _react2.default.createElement(_TimeInputDefaultTwelveHour2.default, null),
      source: _TimeInputDefaultTwelveHour4.default
    }],
    propsTables: [{
      componentName: 'Time Input',
      componentSrc: _TimeInput2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;