'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _BlockActionFooterModule = require('./BlockActionFooter.module.scss');

var _BlockActionFooterModule2 = _interopRequireDefault(_BlockActionFooterModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_BlockActionFooterModule2.default);

var propTypes = {
  children: _propTypes2.default.node
};

var defaultProps = {
  children: undefined
};

var BlockActionFooter = function BlockActionFooter(_ref) {
  var children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['children']);

  var isEmpty = !_react2.default.Children.toArray(children).length;

  var blockActionFooterClassNames = cx(['block-action-footer', { 'with-actions': !isEmpty }, customProps.className]);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: blockActionFooterClassNames }),
    children
  );
};

BlockActionFooter.propTypes = propTypes;
BlockActionFooter.defaultProps = defaultProps;

exports.default = BlockActionFooter;