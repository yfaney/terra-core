'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MultiSelectList = require('../../../../MultiSelectList');

var _MultiSelectList2 = _interopRequireDefault(_MultiSelectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = function list() {
  return _react2.default.createElement(
    _MultiSelectList2.default,
    { maxSelectionCount: 2 },
    _react2.default.createElement(_MultiSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        null,
        'test 1'
      ), key: '123', isSelected: true }),
    _react2.default.createElement(_MultiSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        null,
        'test 2'
      ), key: '124', isSelected: true }),
    _react2.default.createElement(_MultiSelectList2.default.Item, { content: _react2.default.createElement(
        'p',
        null,
        'test 3'
      ), key: '125' })
  );
};

exports.default = list;