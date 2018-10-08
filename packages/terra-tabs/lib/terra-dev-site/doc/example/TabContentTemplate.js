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
  isLabelHidden: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  children: _propTypes2.default.node
};

var TabContentTemplate = function TabContentTemplate(_ref) {
  var isLabelHidden = _ref.isLabelHidden,
      label = _ref.label,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: { padding: '10px', height: '100%' } },
    isLabelHidden ? _react2.default.createElement(
      'h3',
      null,
      label
    ) : null,
    children || _react2.default.createElement(
      'div',
      null,
      'Content for',
      _react2.default.createElement(
        'i',
        null,
        label
      )
    )
  );
};

TabContentTemplate.propTypes = propTypes;
exports.default = TabContentTemplate;