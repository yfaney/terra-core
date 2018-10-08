'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _propTypes2.default.node.isRequired
};

var boxedExampleDivStyle = {
  border: '3px dotted #d3d4d5',
  paddingTop: '2rem',
  maxWidth: '768px'
};

var ExampleTemplate = function ExampleTemplate(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: boxedExampleDivStyle },
    children
  );
};

ExampleTemplate.propTypes = propTypes;

exports.default = ExampleTemplate;