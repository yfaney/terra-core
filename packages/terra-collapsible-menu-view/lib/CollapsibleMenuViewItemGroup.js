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

var _terraButtonGroup = require('terra-button-group');

var _terraButtonGroup2 = _interopRequireDefault(_terraButtonGroup);

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

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
   * Callback function that is called when the group's selection state changes
   */
  onChange: _propTypes2.default.func,
  /**
   * CollapsibleMenuView.Items to be grouped together
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * A list of keys of the CollapsibleMenuView.Items that should be selected.
   */
  selectedKeys: _propTypes2.default.arrayOf(_propTypes2.default.string)
};

var defaultProps = {
  selectedKeys: []
};

var childContextTypes = {
  isCollapsibleGroupItem: _propTypes2.default.bool
};

var contextTypes = {
  isCollapsibleMenuItem: _propTypes2.default.bool
};

var CollapsibleMenuViewItemGroup = function (_React$Component) {
  _inherits(CollapsibleMenuViewItemGroup, _React$Component);

  function CollapsibleMenuViewItemGroup(props) {
    _classCallCheck(this, CollapsibleMenuViewItemGroup);

    var _this = _possibleConstructorReturn(this, (CollapsibleMenuViewItemGroup.__proto__ || Object.getPrototypeOf(CollapsibleMenuViewItemGroup)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    return _this;
  }

  _createClass(CollapsibleMenuViewItemGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { isCollapsibleGroupItem: true };
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange(event, selectedIndex) {
      if (this.props.onChange) {
        var selectedKey = selectedIndex;
        _react2.default.Children.forEach(this.props.children, function (child, index) {
          if (selectedIndex === index) {
            selectedKey = child.key;
          }
        });

        this.props.onChange(event, selectedKey);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onChange = _props.onChange,
          selectedKeys = _props.selectedKeys,
          customProps = _objectWithoutProperties(_props, ['children', 'onChange', 'selectedKeys']);

      var isCollapsibleMenuItem = this.context.isCollapsibleMenuItem;


      if (isCollapsibleMenuItem && selectedKeys.length) {
        return _react2.default.createElement(
          _CollapsibleMenu2.default.ItemGroup,
          _extends({}, customProps, { onChange: this.handleOnChange }),
          children
        );
      }if (isCollapsibleMenuItem) {
        return _react2.default.createElement(
          _terraList2.default,
          _extends({}, customProps, { onChange: this.handleOnChange }),
          children
        );
      }

      var buttonGroupClassNames = cx(['face-up-item', customProps.className]);

      return _react2.default.createElement(
        _terraButtonGroup2.default,
        _extends({}, customProps, { onChange: onChange, className: buttonGroupClassNames, selectedKeys: selectedKeys }),
        children
      );
    }
  }]);

  return CollapsibleMenuViewItemGroup;
}(_react2.default.Component);

CollapsibleMenuViewItemGroup.propTypes = propTypes;
CollapsibleMenuViewItemGroup.defaultProps = defaultProps;
CollapsibleMenuViewItemGroup.childContextTypes = childContextTypes;
CollapsibleMenuViewItemGroup.contextTypes = contextTypes;

exports.default = CollapsibleMenuViewItemGroup;