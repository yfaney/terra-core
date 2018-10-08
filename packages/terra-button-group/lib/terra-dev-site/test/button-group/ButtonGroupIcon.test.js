'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonGroup = require('../../../ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStyle = { backgroundColor: 'black', height: '1em', width: '1em' };
var icon = _react2.default.createElement(
  'span',
  { style: iconStyle, className: 'test' },
  _react2.default.createElement(
    'svg',
    { width: '1em', height: '1em' },
    _react2.default.createElement('rect', { width: '1em', height: '1em' })
  )
);

var IconButtonGroup = function IconButtonGroup() {
  return _react2.default.createElement(
    _ButtonGroup2.default,
    { id: 'button-group-icon' },
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Text1', icon: icon, key: 'icon1' }),
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Text2', icon: icon, key: 'icon2' })
  );
};

exports.default = IconButtonGroup;