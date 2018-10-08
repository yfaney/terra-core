'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _MultiSelectableRows = require('../../../../docs/MultiSelectableRows.md');

var _MultiSelectableRows2 = _interopRequireDefault(_MultiSelectableRows);

var _package = require('../../../../package.json');

var _MultiSelectableRows3 = require('!raw-loader!../../../../src/MultiSelectableRows');

var _MultiSelectableRows4 = _interopRequireDefault(_MultiSelectableRows3);

var _MultiSelectableRows5 = require('../example/MultiSelectableRows');

var _MultiSelectableRows6 = _interopRequireDefault(_MultiSelectableRows5);

var _MultiSelectableRows7 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectableRows');

var _MultiSelectableRows8 = _interopRequireDefault(_MultiSelectableRows7);

var _MultiSelectableRowsMaxSelectable = require('../example/MultiSelectableRowsMaxSelectable');

var _MultiSelectableRowsMaxSelectable2 = _interopRequireDefault(_MultiSelectableRowsMaxSelectable);

var _MultiSelectableRowsMaxSelectable3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectableRowsMaxSelectable');

var _MultiSelectableRowsMaxSelectable4 = _interopRequireDefault(_MultiSelectableRowsMaxSelectable3);

var _MultiSelectableRowsWithSubheader = require('../example/MultiSelectableRowsWithSubheader');

var _MultiSelectableRowsWithSubheader2 = _interopRequireDefault(_MultiSelectableRowsWithSubheader);

var _MultiSelectableRowsWithSubheader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectableRowsWithSubheader');

var _MultiSelectableRowsWithSubheader4 = _interopRequireDefault(_MultiSelectableRowsWithSubheader3);

var _MultiSelectableRowsOnChange = require('../example/MultiSelectableRowsOnChange');

var _MultiSelectableRowsOnChange2 = _interopRequireDefault(_MultiSelectableRowsOnChange);

var _MultiSelectableRowsOnChange3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectableRowsOnChange');

var _MultiSelectableRowsOnChange4 = _interopRequireDefault(_MultiSelectableRowsOnChange3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _MultiSelectableRows2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Multiple Selectable Rows',
      example: _react2.default.createElement(_MultiSelectableRows6.default, null),
      source: _MultiSelectableRows8.default
    }, {
      title: 'Multiple Selectable Rows (Max selectable: 2)',
      example: _react2.default.createElement(_MultiSelectableRowsMaxSelectable2.default, null),
      source: _MultiSelectableRowsMaxSelectable4.default
    }, {
      title: 'Multiple Selectable Rows (Includes Subheaders)',
      example: _react2.default.createElement(_MultiSelectableRowsWithSubheader2.default, null),
      source: _MultiSelectableRowsWithSubheader4.default
    }, {
      title: 'Multiple Selectable Rows (onChange callback)',
      example: _react2.default.createElement(_MultiSelectableRowsOnChange2.default, null),
      source: _MultiSelectableRowsOnChange4.default
    }],
    propsTables: [{
      componentName: 'Multi Select Table',
      componentSrc: _MultiSelectableRows4.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;