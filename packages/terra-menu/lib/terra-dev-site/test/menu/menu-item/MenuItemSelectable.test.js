'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Menu = require('../../../../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var childContextTypes = {
  isSelectableMenu: _propTypes2.default.bool
};

var MenuItemSelectable = function (_React$Component) {
  _inherits(MenuItemSelectable, _React$Component);

  function MenuItemSelectable(props) {
    _classCallCheck(this, MenuItemSelectable);

    var _this = _possibleConstructorReturn(this, (MenuItemSelectable.__proto__ || Object.getPrototypeOf(MenuItemSelectable)).call(this, props));

    _this.state = { isSelected: false };
    _this.handleSelection = _this.handleSelection.bind(_this);
    return _this;
  }

  _createClass(MenuItemSelectable, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { isSelectableMenu: true };
    }
  }, {
    key: 'handleSelection',
    value: function handleSelection(event, isSelected) {
      this.setState({ isSelected: isSelected });
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
            'h3',
            null,
            'Item is selected:',
            this.state.isSelected ? 'yes' : 'no'
          )
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(_Menu2.default.Item, { text: 'Selectable Menu Item', key: '1', className: 'TestSelectableItem', isSelectable: true, onChange: this.handleSelection })
        )
      );
    }
  }]);

  return MenuItemSelectable;
}(_react2.default.Component);

MenuItemSelectable.childContextTypes = childContextTypes;
exports.default = MenuItemSelectable;