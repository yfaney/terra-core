'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

var _Menu = require('../../../../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var childContextTypes = {
  isSelectableMenu: _propTypes2.default.bool
};

var MenuItemDisabled = function (_React$Component) {
  _inherits(MenuItemDisabled, _React$Component);

  function MenuItemDisabled() {
    _classCallCheck(this, MenuItemDisabled);

    return _possibleConstructorReturn(this, (MenuItemDisabled.__proto__ || Object.getPrototypeOf(MenuItemDisabled)).apply(this, arguments));
  }

  _createClass(MenuItemDisabled, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { isSelectableMenu: true };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'isSelected' },
          _react2.default.createElement(
            'p',
            null,
            'The item is disabled. The selection state should not change with any user interaction.'
          )
        ),
        _react2.default.createElement(
          _terraList2.default,
          null,
          _react2.default.createElement(_Menu2.default.Item, {
            text: 'Disabled Menu Item',
            key: '1',
            className: 'TestDisabledItem',
            isSelectable: true,
            isDisabled: true
          }),
          _react2.default.createElement(_Menu2.default.Item, {
            isDisabled: true,
            isSelectable: true,
            text: 'Nested Menu',
            key: '2',
            className: 'TestNestedMenu',
            subMenuItems: [_react2.default.createElement(_Menu2.default.Item, { text: 'Default 2.1', key: '2.1', className: 'TestNestedMenuContent' })]
          })
        )
      );
    }
  }]);

  return MenuItemDisabled;
}(_react2.default.Component);

MenuItemDisabled.childContextTypes = childContextTypes;
exports.default = MenuItemDisabled;