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

var _SearchField = require('!raw-loader!../../../../src/SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

var _SearchFieldBasic = require('../example/SearchFieldBasic');

var _SearchFieldBasic2 = _interopRequireDefault(_SearchFieldBasic);

var _SearchFieldBasic3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldBasic');

var _SearchFieldBasic4 = _interopRequireDefault(_SearchFieldBasic3);

var _SearchFieldPlaceholder = require('../example/SearchFieldPlaceholder');

var _SearchFieldPlaceholder2 = _interopRequireDefault(_SearchFieldPlaceholder);

var _SearchFieldPlaceholder3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldPlaceholder');

var _SearchFieldPlaceholder4 = _interopRequireDefault(_SearchFieldPlaceholder3);

var _SearchFieldMinimumLength = require('../example/SearchFieldMinimumLength');

var _SearchFieldMinimumLength2 = _interopRequireDefault(_SearchFieldMinimumLength);

var _SearchFieldMinimumLength3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldMinimumLength');

var _SearchFieldMinimumLength4 = _interopRequireDefault(_SearchFieldMinimumLength3);

var _SearchFieldDelayed = require('../example/SearchFieldDelayed');

var _SearchFieldDelayed2 = _interopRequireDefault(_SearchFieldDelayed);

var _SearchFieldDelayed3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldDelayed');

var _SearchFieldDelayed4 = _interopRequireDefault(_SearchFieldDelayed3);

var _SearchFieldDefaultValue = require('../example/SearchFieldDefaultValue');

var _SearchFieldDefaultValue2 = _interopRequireDefault(_SearchFieldDefaultValue);

var _SearchFieldDefaultValue3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldDefaultValue');

var _SearchFieldDefaultValue4 = _interopRequireDefault(_SearchFieldDefaultValue3);

var _SearchFieldDisabled = require('../example/SearchFieldDisabled');

var _SearchFieldDisabled2 = _interopRequireDefault(_SearchFieldDisabled);

var _SearchFieldDisabled3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldDisabled');

var _SearchFieldDisabled4 = _interopRequireDefault(_SearchFieldDisabled3);

var _SearchFieldBlock = require('../example/SearchFieldBlock');

var _SearchFieldBlock2 = _interopRequireDefault(_SearchFieldBlock);

var _SearchFieldBlock3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldBlock');

var _SearchFieldBlock4 = _interopRequireDefault(_SearchFieldBlock3);

var _SearchFieldDisableAutoSearch = require('../example/SearchFieldDisableAutoSearch');

var _SearchFieldDisableAutoSearch2 = _interopRequireDefault(_SearchFieldDisableAutoSearch);

var _SearchFieldDisableAutoSearch3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldDisableAutoSearch');

var _SearchFieldDisableAutoSearch4 = _interopRequireDefault(_SearchFieldDisableAutoSearch3);

var _SearchFieldFilterNumeric = require('../example/SearchFieldFilterNumeric');

var _SearchFieldFilterNumeric2 = _interopRequireDefault(_SearchFieldFilterNumeric);

var _SearchFieldFilterNumeric3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldFilterNumeric');

var _SearchFieldFilterNumeric4 = _interopRequireDefault(_SearchFieldFilterNumeric3);

var _SearchFieldFocus = require('../example/SearchFieldFocus');

var _SearchFieldFocus2 = _interopRequireDefault(_SearchFieldFocus);

var _SearchFieldFocus3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldFocus');

var _SearchFieldFocus4 = _interopRequireDefault(_SearchFieldFocus3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Search Field',
      example: _react2.default.createElement(_SearchFieldBasic2.default, null),
      source: _SearchFieldBasic4.default
    }, {
      title: 'Search Field with Placeholder Text',
      example: _react2.default.createElement(_SearchFieldPlaceholder2.default, null),
      source: _SearchFieldPlaceholder4.default
    }, {
      title: 'Search Field with Minimum Search Text Length of 5 Characters',
      example: _react2.default.createElement(_SearchFieldMinimumLength2.default, null),
      source: _SearchFieldMinimumLength4.default
    }, {
      title: 'Search Field with Delay of 2000ms',
      example: _react2.default.createElement(_SearchFieldDelayed2.default, null),
      source: _SearchFieldDelayed4.default
    }, {
      title: 'Search Field with a Default Value',
      example: _react2.default.createElement(_SearchFieldDefaultValue2.default, null),
      source: _SearchFieldDefaultValue4.default
    }, {
      title: 'Search Field that is Disabled',
      example: _react2.default.createElement(_SearchFieldDisabled2.default, null),
      source: _SearchFieldDisabled4.default
    }, {
      title: 'Search Field that Displays as Block Style to Fill Container',
      example: _react2.default.createElement(_SearchFieldBlock2.default, null),
      source: _SearchFieldBlock4.default
    }, {
      title: 'Search Field with Auto-search Turned Off',
      example: _react2.default.createElement(_SearchFieldDisableAutoSearch2.default, null),
      source: _SearchFieldDisableAutoSearch4.default
    }, {
      title: 'Search Field with onChange Event Filtering Numbers',
      example: _react2.default.createElement(_SearchFieldFilterNumeric2.default, null),
      source: _SearchFieldFilterNumeric4.default
    }, {
      title: 'Search Field with Focus',
      example: _react2.default.createElement(_SearchFieldFocus2.default, null),
      source: _SearchFieldFocus4.default
    }],
    propsTables: [{
      componentName: 'Search Field',
      componentSrc: _SearchField2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;