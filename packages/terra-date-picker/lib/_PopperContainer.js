'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPortal = require('react-portal');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _PopperContainerModule = require('./_PopperContainer.module.scss');

var _PopperContainerModule2 = _interopRequireDefault(_PopperContainerModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_PopperContainerModule2.default);

var PopperContainer = function PopperContainer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _reactPortal.Portal,
    null,
    _react2.default.createElement(
      'div',
      { className: cx('popper-container') },
      children
    )
  );
};

PopperContainer.propTypes = {
  children: _propTypes2.default.node
};

exports.default = PopperContainer;