'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconHelp = require('terra-icon/lib/icon/IconHelp');

var _IconHelp2 = _interopRequireDefault(_IconHelp);

var _Alert = require('terra-alert/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alertStartTagStr = '<Alert type="custom" title="Help!" customStatusColor="orange" customIcon={<IconHelp />} >';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

var alertEndTagStr = '</Alert>';
var alertContentStr = 'This is a <u>custom</u> alert';

var CustomExample = function CustomExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { dir: 'ltr' },
      _react2.default.createElement(
        'h3',
        null,
        'Alert of type custom with custom title, status color, and icon, and includes HTML in message'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'code',
        null,
        alertStartTagStr,
        _react2.default.createElement('br', null),
        '\xA0\xA0',
        alertContentStr,
        _react2.default.createElement('br', null),
        alertEndTagStr
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { type: 'custom', title: 'Help!', customStatusColor: 'orange', customIcon: _react2.default.createElement(_IconHelp2.default, null) },
      _react2.default.createElement(
        'span',
        null,
        'This is a',
        _react2.default.createElement(
          'i',
          null,
          'custom'
        ),
        ' ',
        'alert'
      )
    )
  );
};

exports.default = CustomExample;