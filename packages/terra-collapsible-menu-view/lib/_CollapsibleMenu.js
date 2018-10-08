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

var _terraMenu = require('terra-menu');

var _terraMenu2 = _interopRequireDefault(_terraMenu);

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
   * List of CollapsibleMenuView.Item(s)/CollapsibleMenuView.ItemGroup(s)/CollapsibleMenuView.Divider(s) to be displayed as content within the Menu.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: _propTypes2.default.func,
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760, or auto
   */
  contentWidth: _propTypes2.default.oneOf(Object.keys(_terraMenu2.default.Opts.widths)),

  /**
   * Button to display the menu from
   */
  button: _propTypes2.default.element.isRequired
};

var childContextTypes = {
  isCollapsibleMenuItem: _propTypes2.default.bool
};

var CollapsibleMenu = function (_React$Component) {
  _inherits(CollapsibleMenu, _React$Component);

  function CollapsibleMenu(props) {
    _classCallCheck(this, CollapsibleMenu);

    var _this = _possibleConstructorReturn(this, (CollapsibleMenu.__proto__ || Object.getPrototypeOf(CollapsibleMenu)).call(this, props));

    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.wrappedOnClick = _this.wrappedOnClick.bind(_this);
    _this.wrapButtonClick = _this.wrapButtonClick.bind(_this);
    _this.wrapChildrenOnClick = _this.wrapChildrenOnClick.bind(_this);
    _this.setButtonNode = _this.setButtonNode.bind(_this);
    _this.getButtonNode = _this.getButtonNode.bind(_this);
    _this.state = { isOpen: false };
    return _this;
  }

  _createClass(CollapsibleMenu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { isCollapsibleMenuItem: true };
    }
  }, {
    key: 'setButtonNode',
    value: function setButtonNode(node) {
      this.buttonNode = node;
    }
  }, {
    key: 'getButtonNode',
    value: function getButtonNode() {
      return this.buttonNode;
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'wrappedOnClick',
    value: function wrappedOnClick(item) {
      var _this2 = this;

      return function (event) {
        _this2.handleRequestClose();

        if (item.props.onClick) {
          item.props.onClick(event);
        }
      };
    }
  }, {
    key: 'wrapButtonClick',
    value: function wrapButtonClick(button) {
      var _this3 = this;

      return function (event) {
        _this3.setState({ isOpen: true });

        if (button.props.onClick) {
          button.props.onClick(event);
        }
      };
    }
  }, {
    key: 'wrapChildrenOnClick',
    value: function wrapChildrenOnClick(children) {
      var _this4 = this;

      var cloneChildren = children ? [] : undefined;
      _react2.default.Children.forEach(children, function (item) {
        var clonedElement = item;
        if (item.props.shouldCloseOnClick) {
          clonedElement = _react2.default.cloneElement(item, { onClick: _this4.wrappedOnClick(item) });
        } else if (item.props.children) {
          var clonedChildren = _this4.wrapChildrenOnClick(item.props.children);
          clonedElement = _react2.default.cloneElement(item, { children: clonedChildren });
        } else if (item.props.subMenuItems) {
          var subMenuItems = _this4.wrapChildrenOnClick(item.props.subMenuItems);
          clonedElement = _react2.default.cloneElement(item, { subMenuItems: subMenuItems });
        }
        cloneChildren.push(clonedElement);
      });

      return cloneChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          button = _props.button,
          contentWidth = _props.contentWidth,
          customProps = _objectWithoutProperties(_props, ['children', 'button', 'contentWidth']);

      var clonedButton = _react2.default.cloneElement(button, { onClick: this.wrapButtonClick(button) });

      return _react2.default.createElement(
        'div',
        { className: cx('face-up-item'), ref: this.setButtonNode },
        _react2.default.createElement(
          _terraMenu2.default,
          _extends({}, customProps, {
            onRequestClose: this.handleRequestClose,
            isArrowDisplayed: true,
            isOpen: this.state.isOpen,
            targetRef: this.getButtonNode,
            contentWidth: contentWidth
          }),
          this.wrapChildrenOnClick(children)
        ),
        clonedButton
      );
    }
  }]);

  return CollapsibleMenu;
}(_react2.default.Component);

CollapsibleMenu.propTypes = propTypes;
CollapsibleMenu.childContextTypes = childContextTypes;
CollapsibleMenu.Item = _terraMenu2.default.Item;
CollapsibleMenu.ItemGroup = _terraMenu2.default.ItemGroup;
CollapsibleMenu.Opts = {
  widths: _terraMenu2.default.Opts.widths
};

exports.default = CollapsibleMenu;