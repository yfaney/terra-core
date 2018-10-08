'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BasicMenu = require('./BasicMenu');

var _BasicMenu2 = _interopRequireDefault(_BasicMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuWidths = function (_React$Component) {
  _inherits(MenuWidths, _React$Component);

  function MenuWidths(props) {
    _classCallCheck(this, MenuWidths);

    var _this = _possibleConstructorReturn(this, (MenuWidths.__proto__ || Object.getPrototypeOf(MenuWidths)).call(this, props));

    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    _this.state = { menuWidth: undefined };
    return _this;
  }

  _createClass(MenuWidths, [{
    key: 'handleSelectChange',
    value: function handleSelectChange(event) {
      this.setState({ menuWidth: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'menuWidth' },
            'Select menu width '
          ),
          _react2.default.createElement(
            'select',
            { id: 'menuWidth', name: 'menuWidth', value: this.state.menuWidth, onChange: this.handleSelectChange },
            _react2.default.createElement(
              'option',
              { value: undefined },
              'Default'
            ),
            _react2.default.createElement(
              'option',
              { key: '160', value: '160' },
              '160'
            ),
            _react2.default.createElement(
              'option',
              { key: '240', value: '240' },
              '240'
            ),
            _react2.default.createElement(
              'option',
              { key: '320', value: '320' },
              '320'
            ),
            _react2.default.createElement(
              'option',
              { key: '640', value: '640' },
              '640'
            ),
            _react2.default.createElement(
              'option',
              { key: '960', value: '960' },
              '960'
            ),
            _react2.default.createElement(
              'option',
              { key: '1280', value: '1280' },
              '1280'
            ),
            _react2.default.createElement(
              'option',
              { key: '1760', value: '1760' },
              '1760'
            ),
            _react2.default.createElement(
              'option',
              { key: 'auto', value: 'auto' },
              'Auto'
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(_BasicMenu2.default, { contentWidth: this.state.menuWidth })
      );
    }
  }]);

  return MenuWidths;
}(_react2.default.Component);

exports.default = MenuWidths;