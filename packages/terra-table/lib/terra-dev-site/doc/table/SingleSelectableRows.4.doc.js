'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _SingleSelectableRows = require('../../../../docs/SingleSelectableRows.md');

var _SingleSelectableRows2 = _interopRequireDefault(_SingleSelectableRows);

var _package = require('../../../../package.json');

var _SingleSelectableRows3 = require('!raw-loader!../../../../src/SingleSelectableRows');

var _SingleSelectableRows4 = _interopRequireDefault(_SingleSelectableRows3);

var _SingleRowSelectableTable = require('../example/SingleRowSelectableTable');

var _SingleRowSelectableTable2 = _interopRequireDefault(_SingleRowSelectableTable);

var _SingleRowSelectableTable3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SingleRowSelectableTable');

var _SingleRowSelectableTable4 = _interopRequireDefault(_SingleRowSelectableTable3);

var _TableWithNonSelectableRow = require('../example/TableWithNonSelectableRow');

var _TableWithNonSelectableRow2 = _interopRequireDefault(_TableWithNonSelectableRow);

var _TableWithNonSelectableRow3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithNonSelectableRow');

var _TableWithNonSelectableRow4 = _interopRequireDefault(_TableWithNonSelectableRow3);

var _SingleSelectableRowsOnChange = require('../example/SingleSelectableRowsOnChange');

var _SingleSelectableRowsOnChange2 = _interopRequireDefault(_SingleSelectableRowsOnChange);

var _SingleSelectableRowsOnChangeAdditionalDetails = require('../example/SingleSelectableRowsOnChangeAdditionalDetails');

var _SingleSelectableRowsOnChangeAdditionalDetails2 = _interopRequireDefault(_SingleSelectableRowsOnChangeAdditionalDetails);

var _SingleSelectableRowsOnChange3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SingleSelectableRowsOnChange');

var _SingleSelectableRowsOnChange4 = _interopRequireDefault(_SingleSelectableRowsOnChange3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _SingleSelectableRows2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Single Selectable Rows',
      example: _react2.default.createElement(_SingleRowSelectableTable2.default, null),
      source: _SingleRowSelectableTable4.default
    }, {
      title: 'Single Selectable Rows (Second row unselectable)',
      example: _react2.default.createElement(_TableWithNonSelectableRow2.default, null),
      source: _TableWithNonSelectableRow4.default
    }, {
      title: 'Single Selectable Rows (onChange callback)',
      example: _react2.default.createElement(_SingleSelectableRowsOnChange2.default, null),
      source: _SingleSelectableRowsOnChange4.default
    }, {
      title: 'Single Selectable Rows (additional details from onChange)',
      example: _react2.default.createElement(_SingleSelectableRowsOnChangeAdditionalDetails2.default, null),
      source: _SingleSelectableRowsOnChange4.default
    }],
    propsTables: [{
      componentName: 'Single Selectable Rows',
      componentSrc: _SingleSelectableRows4.default
    }]
  });
};

exports.default = DocPage;