'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SingleSelectList = require('terra-list/lib/SingleSelectList');

var _SingleSelectList2 = _interopRequireDefault(_SingleSelectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SingleSelectExamples = function SingleSelectExamples() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Example'
    ),
    _react2.default.createElement(
      _SingleSelectList2.default,
      { hasChevrons: true, isDivided: true },
      _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
          'span',
          null,
          'test'
        ), key: '123' }),
      _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
          'span',
          null,
          'test'
        ), key: '124' }),
      _react2.default.createElement(_SingleSelectList2.default.Item, { content: _react2.default.createElement(
          'span',
          null,
          'test'
        ), key: '125' })
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = SingleSelectExamples;