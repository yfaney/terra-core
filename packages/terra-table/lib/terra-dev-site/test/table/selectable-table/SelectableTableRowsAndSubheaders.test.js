'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('../../../../Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var SelectableTableRowsExample = function SelectableTableRowsExample() {
  return _react2.default.createElement(
    _Table2.default,
    { isStriped: true, className: 'Table-Custom' },
    _react2.default.createElement(
      _Table2.default.Header,
      { className: 'Header-Custom' },
      _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Name', key: 'NAME', minWidth: 'small', className: 'HeaderCell-Custom' }),
      _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Address', key: 'ADDRESS', minWidth: 'medium', sort: 'asc' }),
      _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Phone Number', key: 'PHONE_NUMBER', minWidth: 'large' })
    ),
    _react2.default.createElement(
      _Table2.default.SelectableTableRows,
      { className: 'SelectableRows-Custom' },
      _react2.default.createElement(_Table2.default.Subheader, { key: 'SUBHEADER_0', content: 'Single' }),
      _react2.default.createElement(
        _Table2.default.Row,
        { key: 'PERSON_0' },
        _react2.default.createElement(_Table2.default.Cell, { content: 'John Smith', key: 'NAME', className: 'Cell-Custom' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '123 Adams Drive', key: 'ADDRESS' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '111-222-3333', key: 'PHONE_NUMBER' })
      ),
      _react2.default.createElement(
        _Table2.default.Row,
        { key: 'PERSON_1' },
        _react2.default.createElement(_Table2.default.Cell, { content: 'Jane Smith', key: 'NAME' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '321 Drive Street', key: 'ADDRESS' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '111-222-3333', key: 'PHONE_NUMBER' })
      ),
      _react2.default.createElement(_Table2.default.Subheader, { key: 'SUBHEADER_1', content: 'Married', className: 'Subheader-Custom' }),
      _react2.default.createElement(
        _Table2.default.Row,
        { key: 'PERSON_2' },
        _react2.default.createElement(_Table2.default.Cell, { content: 'Dave Smith', key: 'NAME' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '213 Raymond Road', key: 'ADDRESS' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '111-222-3333', key: 'PHONE_NUMBER' })
      ),
      _react2.default.createElement(
        _Table2.default.Row,
        { key: 'PERSON_3' },
        _react2.default.createElement(_Table2.default.Cell, { content: 'Mike Smith', key: 'NAME' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '132 Rock Road', key: 'ADDRESS' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '111-222-3333', key: 'PHONE_NUMBER' })
      )
    )
  );
};

exports.default = SelectableTableRowsExample;