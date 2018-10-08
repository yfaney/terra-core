'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Scroll = require('../../../Scroll');

var _Scroll2 = _interopRequireDefault(_Scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultScroll = function (_React$Component) {
  _inherits(DefaultScroll, _React$Component);

  function DefaultScroll(props) {
    _classCallCheck(this, DefaultScroll);

    var _this = _possibleConstructorReturn(this, (DefaultScroll.__proto__ || Object.getPrototypeOf(DefaultScroll)).call(this, props));

    _this.setNode = _this.setNode.bind(_this);
    _this.toggleScroll = _this.toggleScroll.bind(_this);
    return _this;
  }

  _createClass(DefaultScroll, [{
    key: 'setNode',
    value: function setNode(node) {
      this.scrollNode = node;
    }
  }, {
    key: 'toggleScroll',
    value: function toggleScroll() {
      if (this.scrollNode) {
        this.scrollNode.scrollTop = this.scrollNode.scrollTop > 0 ? 0 : 1000;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'scroll', onClick: this.toggleScroll },
          'Scroll'
        ),
        _react2.default.createElement(
          'div',
          { style: { height: '300px', width: '400px', border: '1px dashed black' } },
          _react2.default.createElement(
            _Scroll2.default,
            { id: 'scroll-test', refCallback: this.setNode },
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis dapibus erat, eget facilisis nunc ornare in. Vestibulum ut posuere neque. Maecenas nibh lacus, euismod sit amet magna sit amet, porttitor sollicitudin sapien. Vivamus nec lacus vel tortor ultrices efficitur vitae sit amet ipsum. Suspendisse risus eros, faucibus eget mattis in, tincidunt id urna. Integer eget urna quis nisi luctus posuere. Fusce molestie dignissim neque interdum ultrices. Donec porta condimentum quam, at molestie velit scelerisque vitae. Suspendisse eleifend lectus sit amet nunc posuere, sed placerat dolor laoreet. Etiam tempus lacinia purus, ac porttitor nisl posuere eget. Aenean nulla tellus, lacinia eget tortor vel, tempus fermentum ex. Nullam massa nisl, consequat at lorem non, dignissim vehicula mauris. Morbi ultrices mauris ipsum, eu tempor quam luctus id. Curabitur ultrices nunc ultrices, commodo lorem eget, vulputate urna. Quisque porttitor nisi vel diam vulputate vehicula eu quis lacus. Nunc eget aliquam elit. Vivamus dictum mi molestie, tristique est sit amet, pellentesque urna. Etiam arcu felis, pulvinar et lorem et, efficitur ultricies urna. Nunc lacinia pellentesque turpis sit amet egestas. Vivamus ut ex efficitur, egestas lectus sit amet, gravida magna. Vivamus suscipit, erat vitae commodo fermentum, massa dolor egestas arcu, a sollicitudin sem risus eu quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In maximus nunc tempus magna iaculis porttitor.'
          )
        )
      );
    }
  }]);

  return DefaultScroll;
}(_react2.default.Component);

exports.default = DefaultScroll;