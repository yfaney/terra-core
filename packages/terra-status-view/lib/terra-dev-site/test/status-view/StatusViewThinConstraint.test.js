'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _StatusView = require('../../../StatusView');

var _StatusView2 = _interopRequireDefault(_StatusView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipsum = 'Lorem ipsum dolor';

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { maxWidth: '90px', border: '1px black solid' } },
    _react2.default.createElement(
      _StatusView2.default,
      { id: 'statusView', variant: 'error', title: ipsum, message: ipsum },
      _react2.default.createElement(_terraButton2.default, { text: ipsum, key: '1', id: 'button1' }),
      _react2.default.createElement(_terraButton2.default, { text: ipsum, key: '2', id: 'button2' })
    )
  );
};