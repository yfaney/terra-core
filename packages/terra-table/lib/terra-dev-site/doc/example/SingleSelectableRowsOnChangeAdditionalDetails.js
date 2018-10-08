'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('terra-table/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var people = [{
  key: 'PERSON_0',
  name: 'John Smith',
  address: '123 Adams Drive',
  phoneNumber: '111-222-3333'
}, {
  key: 'PERSON_1',
  name: 'Jane Smith',
  address: '321 Drive Street',
  phoneNumber: '111-222-3333'
}, {
  key: 'PERSON_2',
  name: 'Dave Smith',
  address: '213 Raymond Road',
  phoneNumber: '111-222-3333'
}];
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var onChange = function onChange(event, selectedIndex) {
  // eslint-disable-next-line no-alert
  alert('Selected name: ' + people[selectedIndex].name);
};

var SingleSelectableRowsOnChangeAdditionalDetails = function SingleSelectableRowsOnChangeAdditionalDetails() {
  return _react2.default.createElement(
    _Table2.default,
    { isStriped: false },
    _react2.default.createElement(
      _Table2.default.Header,
      null,
      _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Name', key: 'NAME', minWidth: 'small' }),
      _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Address', key: 'ADDRESS', minWidth: 'medium' }),
      _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Phone Number', key: 'PHONE_NUMBER', minWidth: 'large' })
    ),
    _react2.default.createElement(
      _Table2.default.SingleSelectableRows,
      { onChange: onChange },
      people.map(function (person) {
        return _react2.default.createElement(
          _Table2.default.Row,
          { key: person.key },
          _react2.default.createElement(_Table2.default.Cell, { content: person.name, key: 'NAME' }),
          _react2.default.createElement(_Table2.default.Cell, { content: person.address, key: 'ADDRESS' }),
          _react2.default.createElement(_Table2.default.Cell, { content: person.phoneNumber, key: 'PHONE_NUMBER' })
        );
      })
    )
  );
};

exports.default = SingleSelectableRowsOnChangeAdditionalDetails;