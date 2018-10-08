'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconDue = require('terra-icon/lib/icon/IconDue');

var _IconDue2 = _interopRequireDefault(_IconDue);

var _Status = require('terra-status/lib/Status');

var _Status2 = _interopRequireDefault(_Status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icon = _react2.default.createElement(_IconDue2.default, { height: '60', width: '60' });
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var StatusIcon = function StatusIcon() {
  return _react2.default.createElement(
    _Status2.default,
    { color: '#ff0000' },
    icon
  );
};

exports.default = StatusIcon;