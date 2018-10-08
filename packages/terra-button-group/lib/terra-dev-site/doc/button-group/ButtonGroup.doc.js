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

var _ButtonGroup = require('!raw-loader!../../../../src/ButtonGroup.jsx');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _ButtonGroupButton = require('!raw-loader!../../../../src/ButtonGroupButton.jsx');

var _ButtonGroupButton2 = _interopRequireDefault(_ButtonGroupButton);

var _ButtonGroupWithIcons = require('../example/ButtonGroupWithIcons');

var _ButtonGroupWithIcons2 = _interopRequireDefault(_ButtonGroupWithIcons);

var _ButtonGroupWithIcons3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupWithIcons');

var _ButtonGroupWithIcons4 = _interopRequireDefault(_ButtonGroupWithIcons3);

var _ButtonGroupDisabledButtons = require('../example/ButtonGroupDisabledButtons');

var _ButtonGroupDisabledButtons2 = _interopRequireDefault(_ButtonGroupDisabledButtons);

var _ButtonGroupDisabledButtons3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupDisabledButtons');

var _ButtonGroupDisabledButtons4 = _interopRequireDefault(_ButtonGroupDisabledButtons3);

var _ButtonGroupSingleSelect = require('../example/ButtonGroupSingleSelect');

var _ButtonGroupSingleSelect2 = _interopRequireDefault(_ButtonGroupSingleSelect);

var _ButtonGroupSingleSelect3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupSingleSelect');

var _ButtonGroupSingleSelect4 = _interopRequireDefault(_ButtonGroupSingleSelect3);

var _ButtonGroupMultiSelect = require('../example/ButtonGroupMultiSelect');

var _ButtonGroupMultiSelect2 = _interopRequireDefault(_ButtonGroupMultiSelect);

var _ButtonGroupMultiSelect3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupMultiSelect');

var _ButtonGroupMultiSelect4 = _interopRequireDefault(_ButtonGroupMultiSelect3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Examples


/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Text and Icon - Default, no selected state',
      example: _react2.default.createElement(_ButtonGroupWithIcons2.default, null),
      source: _ButtonGroupWithIcons4.default
    }, {
      title: 'Single Select - Manage single button selection',
      example: _react2.default.createElement(_ButtonGroupSingleSelect2.default, null),
      source: _ButtonGroupSingleSelect4.default
    }, {
      title: 'Multi Select - Manage multiple button selections',
      example: _react2.default.createElement(_ButtonGroupMultiSelect2.default, null),
      source: _ButtonGroupMultiSelect4.default
    }, {
      title: 'Disabled Buttons - Default, no selected state',
      example: _react2.default.createElement(_ButtonGroupDisabledButtons2.default, null),
      source: _ButtonGroupDisabledButtons4.default
    }],
    propsTables: [{
      componentName: 'Button Group',
      componentSrc: _ButtonGroup2.default
    }, {
      componentName: 'Button Group Button',
      componentSrc: _ButtonGroupButton2.default
    }]
  });
};

exports.default = DocPage;