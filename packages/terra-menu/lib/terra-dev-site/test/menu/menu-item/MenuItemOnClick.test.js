'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('../../../../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItemOnClick = function (_React$Component) {
  _inherits(MenuItemOnClick, _React$Component);

  function MenuItemOnClick(props) {
    _classCallCheck(this, MenuItemOnClick);

    var _this = _possibleConstructorReturn(this, (MenuItemOnClick.__proto__ || Object.getPrototypeOf(MenuItemOnClick)).call(this, props));

    _this.state = { clickNumber: 0 };
    _this.handleSelection = _this.handleSelection.bind(_this);
    return _this;
  }

  _createClass(MenuItemOnClick, [{
    key: 'handleSelection',
    value: function handleSelection() {
      this.setState(function (prevState) {
        return { clickNumber: prevState.clickNumber + 1 };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'clickNumber' },
          _react2.default.createElement(
            'h3',
            null,
            'Item has been clicked',
            this.state.clickNumber,
            ' ',
            'times'
          )
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(_Menu2.default.Item, { text: 'OnClick Menu Item', key: '1', className: 'TestOnClickItem', onClick: this.handleSelection })
        )
      );
    }
  }]);

  return MenuItemOnClick;
}(_react2.default.Component);

exports.default = MenuItemOnClick;