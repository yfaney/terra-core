'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('../../../../Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var radio = function radio() {
  return (
    // TODO: Test this with next release of jsx-a11y, this rule seems to have a bug in the current version
    // eslint-disable-next-line jsx-a11y/aria-proptypes
    _react2.default.createElement(
      'div',
      { role: 'group', 'aria-labelledby': 'mainLabel' },
      _react2.default.createElement('div', { id: 'mainLabel', 'aria-label': 'Main Label' }),
      _react2.default.createElement(_Radio2.default, { id: 'first', labelText: 'First Radio', name: 'multiple', defaultChecked: true }),
      _react2.default.createElement(_Radio2.default, { id: 'second', labelText: 'Second Radio', name: 'multiple' }),
      _react2.default.createElement(_Radio2.default, { id: 'third', labelText: 'Third Radio', name: 'multiple' })
    )
  );
};

exports.default = radio;