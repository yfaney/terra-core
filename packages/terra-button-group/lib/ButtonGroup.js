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

require('terra-base/lib/baseStyles');

var _ButtonGroupButton = require('./ButtonGroupButton');

var _ButtonGroupButton2 = _interopRequireDefault(_ButtonGroupButton);

var _ButtonGroupUtils = require('./ButtonGroupUtils');

var _ButtonGroupUtils2 = _interopRequireDefault(_ButtonGroupUtils);

var _ButtonGroupModule = require('./ButtonGroup.module.scss');

var _ButtonGroupModule2 = _interopRequireDefault(_ButtonGroupModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_ButtonGroupModule2.default);

var propTypes = {
  /**
   * Child nodes
   */
  children: _propTypes2.default.node,

  /**
   * Callback function when the state changes. Parameters are (event, key).
   */
  onChange: _propTypes2.default.func,

  /**
   * A list of keys of the buttons that should be selected.
   */
  selectedKeys: _propTypes2.default.arrayOf(_propTypes2.default.string)
};

var defaultProps = {
  children: [],
  selectedKeys: []
};

var ButtonGroup = function (_React$Component) {
  _inherits(ButtonGroup, _React$Component);

  function ButtonGroup(props) {
    _classCallCheck(this, ButtonGroup);

    var _this = _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    return _this;
  }

  _createClass(ButtonGroup, [{
    key: 'handleOnChange',
    value: function handleOnChange(event, key) {
      if (this.props.onChange) {
        this.props.onChange(event, key);
      }
    }
  }, {
    key: 'wrapOnClick',
    value: function wrapOnClick(item) {
      var _this2 = this;

      var onClick = item.props.onClick;

      return function (event) {
        _this2.handleOnChange(event, item.key);

        if (onClick) {
          onClick(event);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          onChange = _props.onChange,
          selectedKeys = _props.selectedKeys,
          customProps = _objectWithoutProperties(_props, ['children', 'onChange', 'selectedKeys']);

      var buttonGroupClassNames = cx(['button-group', customProps.className]);

      var allButtons = children ? [] : undefined;

      _react2.default.Children.forEach(children, function (child) {
        var isActive = selectedKeys.indexOf(child.key) > -1;
        var cloneChild = _react2.default.cloneElement(child, {
          onClick: _this3.wrapOnClick(child),
          className: cx([{ 'is-active': isActive }, child.props.className]),
          'aria-pressed': isActive
        });
        allButtons.push(cloneChild);
      });

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: buttonGroupClassNames }),
        allButtons
      );
    }
  }]);

  return ButtonGroup;
}(_react2.default.Component);

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
ButtonGroup.Button = _ButtonGroupButton2.default;
ButtonGroup.Utils = _ButtonGroupUtils2.default;

exports.default = ButtonGroup;