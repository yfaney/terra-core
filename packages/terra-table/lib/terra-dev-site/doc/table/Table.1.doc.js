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

var _Table = require('!raw-loader!../../../../src/Table');

var _Table2 = _interopRequireDefault(_Table);

var _TableHeader = require('!raw-loader!../../../../src/TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableHeaderCell = require('!raw-loader!../../../../src/TableHeaderCell');

var _TableHeaderCell2 = _interopRequireDefault(_TableHeaderCell);

var _TableRow = require('!raw-loader!../../../../src/TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableCell = require('!raw-loader!../../../../src/TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableSubheader = require('!raw-loader!../../../../src/TableSubheader');

var _TableSubheader2 = _interopRequireDefault(_TableSubheader);

var _NoStripedTable = require('../example/NoStripedTable');

var _NoStripedTable2 = _interopRequireDefault(_NoStripedTable);

var _NoStripedTable3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/NoStripedTable');

var _NoStripedTable4 = _interopRequireDefault(_NoStripedTable3);

var _NoPaddingTable = require('../example/NoPaddingTable');

var _NoPaddingTable2 = _interopRequireDefault(_NoPaddingTable);

var _NoPaddingTable3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/NoPaddingTable');

var _NoPaddingTable4 = _interopRequireDefault(_NoPaddingTable3);

var _StripedTable = require('../example/StripedTable');

var _StripedTable2 = _interopRequireDefault(_StripedTable);

var _StripedTable3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/StripedTable');

var _StripedTable4 = _interopRequireDefault(_StripedTable3);

var _TableWithMultipleOnClicks = require('../example/TableWithMultipleOnClicks');

var _TableWithMultipleOnClicks2 = _interopRequireDefault(_TableWithMultipleOnClicks);

var _TableWithMultipleOnClicks3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithMultipleOnClicks');

var _TableWithMultipleOnClicks4 = _interopRequireDefault(_TableWithMultipleOnClicks3);

var _TableWithHighlightedRows = require('../example/TableWithHighlightedRows');

var _TableWithHighlightedRows2 = _interopRequireDefault(_TableWithHighlightedRows);

var _TableWithHighlightedRows3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithHighlightedRows');

var _TableWithHighlightedRows4 = _interopRequireDefault(_TableWithHighlightedRows3);

var _TableWithSortingIndicator = require('../example/TableWithSortingIndicator');

var _TableWithSortingIndicator2 = _interopRequireDefault(_TableWithSortingIndicator);

var _TableWithSortingIndicator3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithSortingIndicator');

var _TableWithSortingIndicator4 = _interopRequireDefault(_TableWithSortingIndicator3);

var _TableWithLongContent = require('../example/TableWithLongContent');

var _TableWithLongContent2 = _interopRequireDefault(_TableWithLongContent);

var _TableWithLongContent3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithLongContent');

var _TableWithLongContent4 = _interopRequireDefault(_TableWithLongContent3);

var _TableWithCustomCells = require('../example/TableWithCustomCells');

var _TableWithCustomCells2 = _interopRequireDefault(_TableWithCustomCells);

var _TableWithCustomCells3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithCustomCells');

var _TableWithCustomCells4 = _interopRequireDefault(_TableWithCustomCells3);

var _TableWithSubheaders = require('../example/TableWithSubheaders');

var _TableWithSubheaders2 = _interopRequireDefault(_TableWithSubheaders);

var _TableWithSubheaders3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithSubheaders');

var _TableWithSubheaders4 = _interopRequireDefault(_TableWithSubheaders3);

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
      title: 'Table without zebra stripes',
      example: _react2.default.createElement(_NoStripedTable2.default, null),
      source: _NoStripedTable4.default
    }, {
      title: 'Table with zebra stripes',
      example: _react2.default.createElement(_StripedTable2.default, null),
      source: _StripedTable4.default
    }, {
      title: 'Table without padding',
      example: _react2.default.createElement(_NoPaddingTable2.default, null),
      source: _NoPaddingTable4.default
    }, {
      title: 'Table with multiple header onClick handlers (Click \u2018Name\u2019 header to preview)',
      example: _react2.default.createElement(_TableWithMultipleOnClicks2.default, null),
      source: _TableWithMultipleOnClicks4.default
    }, {
      title: 'Table with some rows selected. Table will not select or deselect any row',
      example: _react2.default.createElement(_TableWithHighlightedRows2.default, null),
      source: _TableWithHighlightedRows4.default
    }, {
      title: 'Table with sorting indicator',
      example: _react2.default.createElement(_TableWithSortingIndicator2.default, null),
      source: _TableWithSortingIndicator4.default
    }, {
      title: 'Table with long content',
      example: _react2.default.createElement(_TableWithLongContent2.default, null),
      source: _TableWithLongContent4.default
    }, {
      title: 'Table with custom cells',
      example: _react2.default.createElement(_TableWithCustomCells2.default, null),
      source: _TableWithCustomCells4.default
    }, {
      title: 'Table with subheaders',
      example: _react2.default.createElement(_TableWithSubheaders2.default, null),
      source: _TableWithSubheaders4.default
    }],
    propsTables: [{
      componentName: 'Table',
      componentSrc: _Table2.default
    }, {
      componentName: 'Table Header',
      componentSrc: _TableHeader2.default
    }, {
      componentName: 'Table Header Cell',
      componentSrc: _TableHeaderCell2.default
    }, {
      componentName: 'Table Subheader',
      componentSrc: _TableSubheader2.default
    }, {
      componentName: 'Table Row',
      componentSrc: _TableRow2.default
    }, {
      componentName: 'Table Cell',
      componentSrc: _TableCell2.default
    }]
  });
};

exports.default = DocPage;