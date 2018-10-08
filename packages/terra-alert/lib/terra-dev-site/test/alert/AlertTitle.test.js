'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Alert = require('../../../Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Alert2.default,
      { id: 'alertAlert', type: 'alert', title: 'Alert_Alert:' },
      'Alert of type Alert with custom title'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'errorAlert', type: 'error', title: 'Error_Alert:' },
      'Alert of type Error with custom title'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'warningAlert', type: 'warning', title: 'Warning_Alert:' },
      'Alert of type Warning with custom title'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'advisoryAlert', type: 'advisory', title: 'Advisory_Alert:' },
      'Alert of type Advisory with custom title'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'infoAlert', type: 'info', title: 'Info_Alert:' },
      'Alert of type Info with custom title'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'successAlert', type: 'success', title: 'Success_Alert:' },
      'Alert of type Success with custom title'
    )
  );
};