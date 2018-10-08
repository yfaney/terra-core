'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _ManagedSelectableTable = require('../../../../docs/ManagedSelectableTable.md');

var _ManagedSelectableTable2 = _interopRequireDefault(_ManagedSelectableTable);

var _package = require('../../../../package.json');

var _SelectableTableRows = require('!raw-loader!../../../../src/SelectableTableRows');

var _SelectableTableRows2 = _interopRequireDefault(_SelectableTableRows);

var _SingleRowSelectableTable = require('../example/SingleRowSelectableTable');

var _SingleRowSelectableTable2 = _interopRequireDefault(_SingleRowSelectableTable);

var _SingleRowSelectableTable3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SingleRowSelectableTable');

var _SingleRowSelectableTable4 = _interopRequireDefault(_SingleRowSelectableTable3);

var _SelectableRowsDisableUnselectedRows = require('../example/SelectableRowsDisableUnselectedRows');

var _SelectableRowsDisableUnselectedRows2 = _interopRequireDefault(_SelectableRowsDisableUnselectedRows);

var _SelectableRowsDisableUnselectedRows3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SelectableRowsDisableUnselectedRows');

var _SelectableRowsDisableUnselectedRows4 = _interopRequireDefault(_SelectableRowsDisableUnselectedRows3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _ManagedSelectableTable2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Selectable Table',
      description: 'Note: Recording what item(s) are selected is an implementation detail of the consumer. This example shows a single-selectable table implementation.',
      example: _react2.default.createElement(_SingleRowSelectableTable2.default, null),
      source: _SingleRowSelectableTable4.default
    }, {
      title: 'Selectable Rows (Unselected rows are disabled)',
      description: 'A listener has been added for trying to change the selection state of a row, but only enabled rows can have their selection state changed.',
      example: _react2.default.createElement(_SelectableRowsDisableUnselectedRows2.default, null),
      source: _SelectableRowsDisableUnselectedRows4.default
    }],
    propsTables: [{
      componentName: 'Selectable Table Rows',
      componentSrc: _SelectableTableRows2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;