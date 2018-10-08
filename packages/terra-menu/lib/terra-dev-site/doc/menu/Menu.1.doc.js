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

var _Menu = require('!raw-loader!../../../../src/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('!raw-loader!../../../../src/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuItemGroup = require('!raw-loader!../../../../src/MenuItemGroup');

var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);

var _BasicMenu = require('../example/BasicMenu');

var _BasicMenu2 = _interopRequireDefault(_BasicMenu);

var _BasicMenu3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/BasicMenu');

var _BasicMenu4 = _interopRequireDefault(_BasicMenu3);

var _MenuBounded = require('../example/MenuBounded');

var _MenuBounded2 = _interopRequireDefault(_MenuBounded);

var _MenuBounded3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/MenuBounded');

var _MenuBounded4 = _interopRequireDefault(_MenuBounded3);

var _MenuWidths = require('../example/MenuWidths');

var _MenuWidths2 = _interopRequireDefault(_MenuWidths);

var _MenuWidths3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/MenuWidths');

var _MenuWidths4 = _interopRequireDefault(_MenuWidths3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default Menu',
      example: _react2.default.createElement(_BasicMenu2.default, null),
      source: _BasicMenu4.default
    }, {
      title: 'Menu With Arrow',
      example: _react2.default.createElement(_BasicMenu2.default, { isArrowDisplayed: true }),
      source: _BasicMenu4.default
    }, {
      title: 'Menu Bounded',
      example: _react2.default.createElement(_MenuBounded2.default, null),
      source: _MenuBounded4.default
    }, {
      title: 'Menu Widths',
      example: _react2.default.createElement(_MenuWidths2.default, null),
      source: _MenuWidths4.default
    }],
    propsTables: [{
      componentName: 'Menu',
      componentSrc: _Menu2.default
    }, {
      componentName: 'Menu.Item',
      componentSrc: _MenuItem2.default
    }, {
      componentName: 'Menu.ItemGroup',
      componentSrc: _MenuItemGroup2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;