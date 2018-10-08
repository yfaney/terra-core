'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Alert = require('terra-alert/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alertStartTagStr = '<Alert type="alert" >';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

var alertEndTagStr = '</Alert>';
var alertText = 'This is an alert';

var AlertExample = function AlertExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { dir: 'ltr' },
      _react2.default.createElement(
        'h3',
        null,
        'Basic Alert of type alert with default title'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'code',
        null,
        alertStartTagStr,
        alertText,
        alertEndTagStr
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { type: 'alert' },
      alertText
    )
  );
};

exports.default = AlertExample;