'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('../../../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingVisualProps = function HeadingVisualProps() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-visual-props', level: 1, size: 'medium', color: '#304FFE', isItalic: true, weight: 200 },
      'All Visual Props Set'
    )
  );
};

exports.default = HeadingVisualProps;