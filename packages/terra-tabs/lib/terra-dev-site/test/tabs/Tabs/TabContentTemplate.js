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
  id: _propTypes2.default.string
};

var TabContentTemplate = function TabContentTemplate(_ref) {
  var isLabelHidden = _ref.isLabelHidden,
      label = _ref.label,
      id = _ref.id;
  return _react2.default.createElement(
    'div',
    { style: { padding: '20px', height: '100%' }, id: id, className: 'tabContent' },
    isLabelHidden ? _react2.default.createElement(
      'h3',
      { className: 'truncationHeader' },
      label
    ) : null,
    'Content for',
    ' ',
    _react2.default.createElement(
      'i',
      null,
      label
    )
  );
};

TabContentTemplate.propTypes = propTypes;
exports.default = TabContentTemplate;