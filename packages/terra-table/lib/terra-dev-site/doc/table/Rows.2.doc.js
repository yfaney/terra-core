'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _Rows = require('../../../../docs/Rows.md');

var _Rows2 = _interopRequireDefault(_Rows);

var _package = require('../../../../package.json');

var _TableRows = require('!raw-loader!../../../../src/TableRows');

var _TableRows2 = _interopRequireDefault(_TableRows);

var _RowsOnClick = require('../example/RowsOnClick');

var _RowsOnClick2 = _interopRequireDefault(_RowsOnClick);

var _RowsOnClick3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/RowsOnClick');

var _RowsOnClick4 = _interopRequireDefault(_RowsOnClick3);

var _RowsOnKeyDown = require('../example/RowsOnKeyDown');

var _RowsOnKeyDown2 = _interopRequireDefault(_RowsOnKeyDown);

var _RowsOnKeyDown3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/RowsOnKeyDown');

var _RowsOnKeyDown4 = _interopRequireDefault(_RowsOnKeyDown3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _Rows2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Table Rows (onClick callback)',
      example: _react2.default.createElement(_RowsOnClick2.default, null),
      source: _RowsOnClick4.default
    }, {
      title: 'Table Rows (onKeyDown callback)',
      description: 'Note: Requires Table Row children to be focusable.',
      example: _react2.default.createElement(_RowsOnKeyDown2.default, null),
      source: _RowsOnKeyDown4.default
    }],
    propsTables: [{
      componentName: 'Table Rows',
      componentSrc: _TableRows2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;