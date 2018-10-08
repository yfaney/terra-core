'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonGroup = require('../../../ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroupWrapping = function ButtonGroupWrapping() {
  return _react2.default.createElement(
    _ButtonGroup2.default,
    { id: 'button-group-text' },
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'A-Really-Long Text', key: 'text1' }),
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'A-Really-Long Text', key: 'text2' }),
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'A-Really-Long Text', key: 'text3' }),
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'A-Really-Long Text', key: 'text4' }),
    _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'A-Really-Long Text', key: 'text5' })
  );
};

exports.default = ButtonGroupWrapping;