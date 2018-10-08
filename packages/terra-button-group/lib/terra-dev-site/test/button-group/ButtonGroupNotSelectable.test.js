'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonGroup = require('../../../ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _ButtonGroup2.default,
    { id: 'button-group-not-selectable' },
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Not Selectable 1', key: '1' }),
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Not Selectable 2', key: '2' }),
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Not Selectable 3', key: '3' }),
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Not Selectable 4', key: '4' })
  );
};