'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('../../../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingLevels = function HeadingLevels() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-level-1', level: 1 },
      'Level 1'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-level-2', level: 2 },
      'Level 2'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-level-3', level: 3 },
      'Level 3'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-level-4', level: 4 },
      'Level 4'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-level-5', level: 5 },
      'Level 5'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-level-6', level: 6 },
      'Level 6'
    )
  );
};

exports.default = HeadingLevels;