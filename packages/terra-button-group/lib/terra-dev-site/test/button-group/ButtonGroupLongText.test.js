'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonGroup = require('../../../ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LongTextButtonGroup = function LongTextButtonGroup() {
  return _react2.default.createElement(
    _ButtonGroup2.default,
    { id: 'button-group-text' },
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Text', key: 'text1' }),
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'This button contains a really really really long text. The text should wrap and the height of the button should increase. The height of the all other buttons in the group should match. ', key: 'text2' })
  );
};

exports.default = LongTextButtonGroup;