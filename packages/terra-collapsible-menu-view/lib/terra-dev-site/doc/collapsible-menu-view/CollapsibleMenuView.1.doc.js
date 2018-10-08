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

var _CollapsibleMenuView = require('!raw-loader!../../../../src/CollapsibleMenuView');

var _CollapsibleMenuView2 = _interopRequireDefault(_CollapsibleMenuView);

var _CollapsibleMenuViewItem = require('!raw-loader!../../../../src/CollapsibleMenuViewItem');

var _CollapsibleMenuViewItem2 = _interopRequireDefault(_CollapsibleMenuViewItem);

var _CollapsibleMenuViewItemGroup = require('!raw-loader!../../../../src/CollapsibleMenuViewItemGroup');

var _CollapsibleMenuViewItemGroup2 = _interopRequireDefault(_CollapsibleMenuViewItemGroup);

var _CollapsibleMenuViewToggle = require('!raw-loader!../../../../src/CollapsibleMenuViewToggle');

var _CollapsibleMenuViewToggle2 = _interopRequireDefault(_CollapsibleMenuViewToggle);

var _CollapsibleMenuViewDemo = require('../example/CollapsibleMenuViewDemo');

var _CollapsibleMenuViewDemo2 = _interopRequireDefault(_CollapsibleMenuViewDemo);

var _CollapsibleMenuViewDemo3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CollapsibleMenuViewDemo');

var _CollapsibleMenuViewDemo4 = _interopRequireDefault(_CollapsibleMenuViewDemo3);

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
      title: 'CollapsibleMenuView Example',
      example: _react2.default.createElement(_CollapsibleMenuViewDemo2.default, null),
      source: _CollapsibleMenuViewDemo4.default
    }],
    propsTables: [{
      componentName: 'CollapsibleMenuView',
      componentSrc: _CollapsibleMenuView2.default
    }, {
      componentName: 'CollapsibleMenuView.Item',
      componentSrc: _CollapsibleMenuViewItem2.default
    }, {
      componentName: 'CollapsibleMenuView.ItemGroup',
      componentSrc: _CollapsibleMenuViewItemGroup2.default
    }, {
      componentName: 'CollapsibleMenuView.Toggle',
      componentSrc: _CollapsibleMenuViewToggle2.default
    }]
  });
};

exports.default = DocPage;