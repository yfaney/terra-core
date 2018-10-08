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
      { id: 'alertAlert', type: _Alert2.default.Opts.Types.ALERT },
      'Alert of type Alert'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'errorAlert', type: _Alert2.default.Opts.Types.ERROR },
      'Alert of type Error'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'warningAlert', type: _Alert2.default.Opts.Types.WARNING },
      'Alert of type Warning'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'advisoryAlert', type: _Alert2.default.Opts.Types.ADVISORY },
      'Alert of type Advisory'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'infoAlert', type: _Alert2.default.Opts.Types.INFO },
      'Alert of type Info'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'successAlert', type: _Alert2.default.Opts.Types.SUCCESS },
      'Alert of type Success'
    )
  );
};