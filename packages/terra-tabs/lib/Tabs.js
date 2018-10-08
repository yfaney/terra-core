'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _terraResponsiveElement = require('terra-responsive-element');

var _terraResponsiveElement2 = _interopRequireDefault(_terraResponsiveElement);

require('terra-base/lib/baseStyles');

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

var _CollapsibleTabs = require('./_CollapsibleTabs');

var _CollapsibleTabs2 = _interopRequireDefault(_CollapsibleTabs);

var _CollapsedTabs = require('./_CollapsedTabs');

var _CollapsedTabs2 = _interopRequireDefault(_CollapsedTabs);

var _TabUtils = require('./TabUtils');

var _TabUtils2 = _interopRequireDefault(_TabUtils);

var _TabsModule = require('./Tabs.module.scss');

var _TabsModule2 = _interopRequireDefault(_TabsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_TabsModule2.default);

/**
NOTE: This is being commented out until discussions have been resolved around if modular tabs should be removed.
const variants = {
  MODULAR_CENTERED: 'modular-centered',
  MODULAR_LEFT_ALIGNED: 'modular-left-aligned',
  STRUCTURAL: 'structural',
};
*/

var propTypes = {

  /**
   * Tabs style. One of: Tabs.Opts.Variants.MODULAR_CENTERED, Tabs.Opts.Variants.MODULAR_LEFT_ALIGNED, or Tabs.Opts.Variants.STRUCTURAL.
   * NOTE: This is being commented out until discussions have been resolved around if we want modular tabs.
  variant: PropTypes.oneOf([variants.MODULAR_CENTERED, variants.MODULAR_LEFT_ALIGNED, variants.STRUCTURAL]),
  */

  /**
   * Indicates if tabs should fill the width available in the tab bar.
   */
  tabFill: _propTypes2.default.bool,

  /**
   * Indicates if the pane content should fill to the height of the parent container.
   */
  fill: _propTypes2.default.bool,

  /**
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected pane's key
   */
  onChange: _propTypes2.default.func,

  /**
   * Tabs.Pane components to be displayed.
   */
  children: _propTypes2.default.node.isRequired,

  /**
   * Key of the pane that should be active. Use this prop along with onChange to create controlled tabs.
   */
  activeKey: _propTypes2.default.string,

  /**
   * Key of the pane that should be open initially.
   */
  defaultActiveKey: _propTypes2.default.string
};

var defaultProps = {
  tabFill: false,
  fill: false
};

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.getInitialState = _this.getInitialState.bind(_this);
    _this.getActiveTabIndex = _this.getActiveTabIndex.bind(_this);
    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.handleTruncationChange = _this.handleTruncationChange.bind(_this);
    _this.wrapPaneOnClick = _this.wrapPaneOnClick.bind(_this);
    _this.state = {
      activeKey: _this.getInitialState(),
      isLabelTruncated: false
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'getInitialState',
    value: function getInitialState() {
      if (this.props.activeKey) {
        return null;
      }
      return _TabUtils2.default.initialSelectedTabKey(this.props.children, this.props.defaultActiveKey);
    }
  }, {
    key: 'getActiveTabIndex',
    value: function getActiveTabIndex() {
      var _this2 = this;

      var activeIndex = -1;
      _react2.default.Children.forEach(this.props.children, function (child, index) {
        if (child.key === _this2.state.activeKey || child.key === _this2.props.activeKey) {
          activeIndex = index;
        }
      });

      return activeIndex;
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange(event, selectedPane) {
      if (!selectedPane.props.isDisabled) {
        if (this.props.onChange) {
          this.props.onChange(event, selectedPane.key);
        }
        if (!this.props.activeKey && _TabUtils2.default.shouldHandleSelection(this.state.activeKey, selectedPane.key)) {
          this.setState({ activeKey: selectedPane.key });
        }
      }
    }
  }, {
    key: 'handleTruncationChange',
    value: function handleTruncationChange(isLabelTruncated) {
      if (this.state.isLabelTruncated !== isLabelTruncated) {
        this.setState({ isLabelTruncated: isLabelTruncated });
      }
    }
  }, {
    key: 'wrapPaneOnClick',
    value: function wrapPaneOnClick(pane) {
      var _this3 = this;

      return function (event) {
        _this3.handleOnChange(event, pane);

        if (pane.props.onClick) {
          pane.props.onClick(event);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          tabFill = _props.tabFill,
          fill = _props.fill,
          onChange = _props.onChange,
          children = _props.children,
          activeKey = _props.activeKey,
          defaultActiveKey = _props.defaultActiveKey,
          customProps = _objectWithoutProperties(_props, ['tabFill', 'fill', 'onChange', 'children', 'activeKey', 'defaultActiveKey']);

      // NOTE: Hardcoding variant to structural until discussions have resolved around if we want modular tabs.


      var variant = 'structural';
      var tabsClassNames = cx(['tabs-container', { 'tab-fill': tabFill }, variant, customProps.className]);

      var content = null;
      var isIconOnly = false;
      var clonedPanes = [];
      _react2.default.Children.forEach(children, function (child) {
        var isActive = false;
        if (child.key === _this4.state.activeKey || child.key === activeKey) {
          isActive = true;
          content = child.props.children;
        }

        if (child.props.isIconOnly) {
          isIconOnly = true;
        }

        clonedPanes.push(_react2.default.cloneElement(child, {
          className: cx([{ 'is-active': isActive }, child.props.className]),
          'aria-selected': isActive,
          onClick: _this4.wrapPaneOnClick(child)
        }));
      });

      content = _react2.default.Children.map(content, function (contentItem) {
        return _react2.default.cloneElement(contentItem, { isLabelHidden: isIconOnly || _this4.state.isLabelTruncated });
      });

      var collapsibleTabs = _react2.default.createElement(
        _CollapsibleTabs2.default,
        {
          activeKey: activeKey || this.state.activeKey,
          activeIndex: this.getActiveTabIndex(),
          onChange: this.handleOnChange,
          onTruncationChange: this.handleTruncationChange,
          variant: variant
        },
        clonedPanes
      );

      var collapsedTabs = _react2.default.createElement(
        _CollapsedTabs2.default,
        { activeKey: activeKey || this.state.activeKey, onTruncationChange: this.handleTruncationChange },
        clonedPanes
      );

      return _react2.default.createElement(
        _terraContentContainer2.default,
        _extends({}, customProps, {
          className: tabsClassNames,
          fill: fill,
          header: _react2.default.createElement(_terraResponsiveElement2.default, {
            defaultElement: collapsedTabs,
            tiny: collapsibleTabs
          })
        }),
        _react2.default.createElement(
          'div',
          {
            role: 'tabpanel',
            className: cx(['pane-content', { 'fill-parent': fill }])
          },
          content
        )
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
Tabs.Pane = _TabPane2.default;
Tabs.Utils = _TabUtils2.default;
/**
Note: This is being commented out until discussions have been resolved around if we want modular tabs.
Tabs.Opts = {
  Variants: variants,
};
*/
exports.default = Tabs;