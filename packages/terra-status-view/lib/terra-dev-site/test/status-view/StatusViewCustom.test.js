'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconDiamond = require('terra-icon/lib/icon/IconDiamond');

var _IconDiamond2 = _interopRequireDefault(_IconDiamond);

var _StatusView = require('../../../StatusView');

var _StatusView2 = _interopRequireDefault(_StatusView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_StatusView2.default, { id: 'statusView', title: 'Custom', variant: 'custom', customGlyph: _react2.default.createElement(_IconDiamond2.default, null) })
  );
};