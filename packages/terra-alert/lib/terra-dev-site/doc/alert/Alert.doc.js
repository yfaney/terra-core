'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _README = require('../../../../README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('../../../../package.json');

var _Alert = require('!raw-loader!../../../../src/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _AlertExample = require('../example/AlertExample');

var _AlertExample2 = _interopRequireDefault(_AlertExample);

var _ErrorExample = require('../example/ErrorExample');

var _ErrorExample2 = _interopRequireDefault(_ErrorExample);

var _WarningExample = require('../example/WarningExample');

var _WarningExample2 = _interopRequireDefault(_WarningExample);

var _AdvisoryExample = require('../example/AdvisoryExample');

var _AdvisoryExample2 = _interopRequireDefault(_AdvisoryExample);

var _InfoExample = require('../example/InfoExample');

var _InfoExample2 = _interopRequireDefault(_InfoExample);

var _SuccessExample = require('../example/SuccessExample');

var _SuccessExample2 = _interopRequireDefault(_SuccessExample);

var _CustomExample = require('../example/CustomExample');

var _CustomExample2 = _interopRequireDefault(_CustomExample);

var _LongTextExample = require('../example/LongTextExample');

var _LongTextExample2 = _interopRequireDefault(_LongTextExample);

var _ActionExample = require('../example/ActionExample');

var _ActionExample2 = _interopRequireDefault(_ActionExample);

var _SmallContainerExample = require('../example/SmallContainerExample');

var _SmallContainerExample2 = _interopRequireDefault(_SmallContainerExample);

var _DismissibleExample = require('../example/DismissibleExample');

var _DismissibleExample2 = _interopRequireDefault(_DismissibleExample);

var _ActionAndDismissibleExample = require('../example/ActionAndDismissibleExample');

var _ActionAndDismissibleExample2 = _interopRequireDefault(_ActionAndDismissibleExample);

var _BuildYourOwnAlertExample = require('../example/BuildYourOwnAlertExample');

var _BuildYourOwnAlertExample2 = _interopRequireDefault(_BuildYourOwnAlertExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default Alert',
      example: _react2.default.createElement(_AlertExample2.default, null)
    }, {
      title: 'Error Alert',
      example: _react2.default.createElement(_ErrorExample2.default, null)
    }, {
      title: 'Warning Alert',
      example: _react2.default.createElement(_WarningExample2.default, null)
    }, {
      title: 'Advisory Alert',
      example: _react2.default.createElement(_AdvisoryExample2.default, null)
    }, {
      title: 'Information Alert',
      example: _react2.default.createElement(_InfoExample2.default, null)
    }, {
      title: 'Success Alert',
      example: _react2.default.createElement(_SuccessExample2.default, null)
    }, {
      title: 'Custom Alert',
      example: _react2.default.createElement(_CustomExample2.default, null)
    }, {
      title: 'Long Text Alert',
      example: _react2.default.createElement(_LongTextExample2.default, null)
    }, {
      title: 'Alert with Action',
      example: _react2.default.createElement(_ActionExample2.default, null)
    }, {
      title: 'Alert in Small Container',
      example: _react2.default.createElement(_SmallContainerExample2.default, null)
    }, {
      title: 'Dismissible Alert',
      example: _react2.default.createElement(_DismissibleExample2.default, null)
    }, {
      title: 'Dismissible Alert with Actions',
      example: _react2.default.createElement(_ActionAndDismissibleExample2.default, null)
    }, {
      title: 'Build ',
      example: _react2.default.createElement(_BuildYourOwnAlertExample2.default, null)
    }],
    propsTables: [{
      componentName: 'Alert',
      componentSrc: _Alert2.default
    }]
  });
};

// Example Files
exports.default = DocPage;