'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('terra-table/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableWithLongContent = function TableWithLongContent() {
  return _react2.default.createElement(
    _Table2.default,
    { isStriped: false },
    _react2.default.createElement(
      _Table2.default.Header,
      null,
      _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Column Heading 1', key: 'COLUMN_0', minWidth: 'small' }),
      _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header End Header', key: 'COLUMN_1', minWidth: 'medium' }),
      _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Column Heading 3', key: 'COLUMN_2', minWidth: 'large' })
    ),
    _react2.default.createElement(
      _Table2.default.SingleSelectableRows,
      null,
      _react2.default.createElement(
        _Table2.default.Row,
        { key: 'ROW_0' },
        _react2.default.createElement(_Table2.default.Cell, { content: 'Table Data', key: 'COLUMN_0' }),
        _react2.default.createElement(_Table2.default.Cell, { content: 'Table Data', key: 'COLUMN_1' }),
        _react2.default.createElement(_Table2.default.Cell, { content: 'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text', key: 'COLUMN_2' })
      ),
      _react2.default.createElement(
        _Table2.default.Row,
        { key: 'ROW_1' },
        _react2.default.createElement(_Table2.default.Cell, { content: 'Table Data', key: 'COLUMN_0' }),
        _react2.default.createElement(_Table2.default.Cell, { content: 'Table Data', key: 'COLUMN_1' }),
        _react2.default.createElement(_Table2.default.Cell, { content: 'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text', key: 'COLUMN_2' })
      ),
      _react2.default.createElement(
        _Table2.default.Row,
        { key: 'ROW_2' },
        _react2.default.createElement(_Table2.default.Cell, { content: 'Table Data', key: 'COLUMN_0' }),
        _react2.default.createElement(_Table2.default.Cell, { content: 'Table Data', key: 'COLUMN_1' }),
        _react2.default.createElement(_Table2.default.Cell, { content: 'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text', key: 'COLUMN_2' })
      )
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = TableWithLongContent;