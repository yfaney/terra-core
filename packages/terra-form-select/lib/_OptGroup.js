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

require('terra-base/lib/baseStyles');

var _OptGroupModule = require('./_OptGroup.module.scss');

var _OptGroupModule2 = _interopRequireDefault(_OptGroupModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_OptGroupModule2.default);

var propTypes = {
  /**
   * The group options.
   */
  children: _propTypes2.default.node,
  /**
   * Whether the option group is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The group label.
   */
  label: _propTypes2.default.node.isRequired
};

var defaultProps = {
  disabled: false
};

var OptGroup = function OptGroup(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      label = _ref.label;
  return _react2.default.createElement(
    'li',
    { className: cx('opt-group', { 'is-disabled': disabled }) },
    _react2.default.createElement(
      'div',
      { className: cx('label') },
      label
    ),
    _react2.default.createElement(
      'ul',
      { className: cx('options') },
      _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, { disabled: disabled || !!child.props.disabled });
      })
    )
  );
};

OptGroup.propTypes = propTypes;
OptGroup.defaultProps = defaultProps;
OptGroup.isOptGroup = true;

exports.default = OptGroup;