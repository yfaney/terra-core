'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _TagModule = require('./_Tag.module.scss');

var _TagModule2 = _interopRequireDefault(_TagModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_TagModule2.default);

var propTypes = {
  /**
   * The content of the tag.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Callback function triggered when the tag is deselected.
   */
  onDeselect: _propTypes2.default.func.isRequired,
  /**
   * The value of the tag.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
};

/* eslint-disable jsx-a11y/no-static-element-interactions */
var Tag = function Tag(_ref) {
  var children = _ref.children,
      onDeselect = _ref.onDeselect,
      value = _ref.value;
  return _react2.default.createElement(
    'li',
    { className: cx('tag') },
    _react2.default.createElement(
      'span',
      { className: cx('display') },
      children
    ),
    _react2.default.createElement(
      'span',
      { className: cx('deselect'), onClick: function onClick() {
          onDeselect(value);
        }, role: 'presentation' },
      _react2.default.createElement('span', { className: cx('icon') })
    )
  );
};

Tag.propTypes = propTypes;

exports.default = Tag;