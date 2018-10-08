'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('terra-list/lib/List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListExample = function ListExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _List2.default,
      { isDivided: true },
      _react2.default.createElement(_List2.default.Item, { content: _react2.default.createElement(
          'span',
          null,
          'test'
        ), key: '123' }),
      _react2.default.createElement(_List2.default.Item, { content: _react2.default.createElement(
          'span',
          null,
          'test'
        ), key: '124' }),
      _react2.default.createElement(_List2.default.Item, { content: _react2.default.createElement(
          'span',
          null,
          'test'
        ), key: '125' })
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = ListExample;