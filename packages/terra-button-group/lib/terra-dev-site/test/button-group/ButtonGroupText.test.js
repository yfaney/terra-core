'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonGroup = require('../../../ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextButtonGroup = function TextButtonGroup() {
  return _react2.default.createElement(
    _ButtonGroup2.default,
    { id: 'button-group-text' },
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Text1', key: 'text1' }),
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Text2', key: 'text2' })
  );
};

exports.default = TextButtonGroup;