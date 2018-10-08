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

var _TabMenu = require('./_TabMenu');

var _TabMenu2 = _interopRequireDefault(_TabMenu);

var _TabsModule = require('./Tabs.module.scss');

var _TabsModule2 = _interopRequireDefault(_TabsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_TabsModule2.default);

var propTypes = {
  /**
   * Key of the current active tab.
   */
  activeKey: _propTypes2.default.string,

  /**
   * Tabs to display in menu.
   */
  children: _propTypes2.default.node,

  /**
   * Callback function when label truncation state has changed.
   * Parameters: 1. Bool indicating if any of the tab labels have been truncated.
   */
  onTruncationChange: _propTypes2.default.func
};

var CollapsedTabs = function CollapsedTabs(props) {
  props.onTruncationChange(false);
  return _react2.default.createElement(
    'div',
    { className: cx('collapsed-tabs-container') },
    _react2.default.createElement(
      _TabMenu2.default,
      { activeKey: props.activeKey },
      props.children
    )
  );
};

CollapsedTabs.propTypes = propTypes;
exports.default = CollapsedTabs;