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

var _Tabs = require('!raw-loader!../../../../src/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabPane = require('!raw-loader!../../../../src/TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

var _TabsTemplate = require('../example/TabsTemplate');

var _TabsTemplate2 = _interopRequireDefault(_TabsTemplate);

var _TabsTemplate3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TabsTemplate');

var _TabsTemplate4 = _interopRequireDefault(_TabsTemplate3);

var _TabsWithFilledContent = require('../example/TabsWithFilledContent');

var _TabsWithFilledContent2 = _interopRequireDefault(_TabsWithFilledContent);

var _TabsWithFilledContent3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TabsWithFilledContent');

var _TabsWithFilledContent4 = _interopRequireDefault(_TabsWithFilledContent3);

var _IconOnlyTabs = require('../example/IconOnlyTabs');

var _IconOnlyTabs2 = _interopRequireDefault(_IconOnlyTabs);

var _IconOnlyTabs3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/IconOnlyTabs');

var _IconOnlyTabs4 = _interopRequireDefault(_IconOnlyTabs3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files


/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Compact',
      example: _react2.default.createElement(_TabsTemplate2.default, null),
      source: _TabsTemplate4.default
    }, {
      title: 'Expanded',
      example: _react2.default.createElement(_TabsTemplate2.default, { tabFill: true }),
      source: _TabsTemplate4.default
    }, {
      title: 'Icon Only',
      example: _react2.default.createElement(_IconOnlyTabs2.default, null),
      source: _IconOnlyTabs4.default
    }, {
      title: 'Fill Parent Container',
      example: _react2.default.createElement(_TabsWithFilledContent2.default, { fill: true }),
      source: _TabsWithFilledContent4.default
    }],
    propsTables: [{
      componentName: 'Tabs',
      componentSrc: _Tabs2.default
    }, {
      componentName: 'Tabs.Pane',
      componentSrc: _TabPane2.default
    }]
  });
};

exports.default = DocPage;