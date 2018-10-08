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

var _Control = require('terra-form/lib/Control');

var _Control2 = _interopRequireDefault(_Control);

require('terra-base/lib/baseStyles');

var _CollapsibleMenu = require('./_CollapsibleMenu');

var _CollapsibleMenu2 = _interopRequireDefault(_CollapsibleMenu);

var _CollapsibleMenuViewModule = require('./CollapsibleMenuView.module.scss');

var _CollapsibleMenuViewModule2 = _interopRequireDefault(_CollapsibleMenuViewModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_CollapsibleMenuViewModule2.default);

var propTypes = {
  /**
   * Sets the item's text
   */
  text: _propTypes2.default.string.isRequired,
  /**
   * Indicates if the item is selected.
   */
  isSelected: _propTypes2.default.bool,
  /**
   * Callback function for when selection state changes. Is called with event and isSelected parameters
   */
  onChange: _propTypes2.default.func,
  /**
   *  Indicates that the toggle should be selectable
   */
  isSelectable: _propTypes2.default.bool,
  /**
   * Indicates if the toggle should be disabled.
   */
  isDisabled: _propTypes2.default.bool,
  /**
   * Indicates that clicking on this item while displayed inside a menu should close the menu
   */
  shouldCloseOnClick: _propTypes2.default.bool
};

var contextTypes = {
  isCollapsibleMenuItem: _propTypes2.default.bool
};

var defaultProps = {
  isSelected: false,
  isSelectable: true,
  shouldCloseOnClick: true
};

var CollapsibleMenuViewToggle = function (_React$Component) {
  _inherits(CollapsibleMenuViewToggle, _React$Component);

  function CollapsibleMenuViewToggle(props) {
    _classCallCheck(this, CollapsibleMenuViewToggle);

    var _this = _possibleConstructorReturn(this, (CollapsibleMenuViewToggle.__proto__ || Object.getPrototypeOf(CollapsibleMenuViewToggle)).call(this, props));

    _this.wrappedOnChange = _this.wrappedOnChange.bind(_this);
    return _this;
  }

  // Wrapping onChange event so that the same parameters will be given when the display is a checkbox and a menu.item


  _createClass(CollapsibleMenuViewToggle, [{
    key: 'wrappedOnChange',
    value: function wrappedOnChange(event) {
      if (this.props.onChange) {
        this.props.onChange(event, event.target.checked);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          isSelected = _props.isSelected,
          isSelectable = _props.isSelectable,
          isDisabled = _props.isDisabled,
          onChange = _props.onChange,
          shouldCloseOnClick = _props.shouldCloseOnClick,
          customProps = _objectWithoutProperties(_props, ['text', 'isSelected', 'isSelectable', 'isDisabled', 'onChange', 'shouldCloseOnClick']);

      var isCollapsibleMenuItem = this.context.isCollapsibleMenuItem;


      var controllClassName = cx(['control', { 'is-disabled': isDisabled || !isSelectable }, customProps.className]);

      if (isCollapsibleMenuItem) {
        return _react2.default.createElement(_CollapsibleMenu2.default.Item, _extends({}, customProps, {
          text: text,
          isSelected: isSelected,
          isSelectable: isSelectable,
          isDisabled: isDisabled,
          onChange: onChange
        }));
      }

      return _react2.default.createElement(
        'div',
        { className: cx(['face-up-item']) },
        _react2.default.createElement(_Control2.default, _extends({}, customProps, {
          className: controllClassName,
          type: 'checkbox',
          labelText: text,
          defaultChecked: isSelected,
          onChange: this.wrappedOnChange,
          inputAttrs: { disabled: isDisabled || !isSelectable }
        }))
      );
    }
  }]);

  return CollapsibleMenuViewToggle;
}(_react2.default.Component);

CollapsibleMenuViewToggle.propTypes = propTypes;
CollapsibleMenuViewToggle.defaultProps = defaultProps;
CollapsibleMenuViewToggle.contextTypes = contextTypes;

exports.default = CollapsibleMenuViewToggle;