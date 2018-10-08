'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = { onChange: _propTypes2.default.func };
var defaultProps = { onChange: undefined };

var MobileButton = function (_React$Component) {
  _inherits(MobileButton, _React$Component);

  function MobileButton(props) {
    _classCallCheck(this, MobileButton);

    var _this = _possibleConstructorReturn(this, (MobileButton.__proto__ || Object.getPrototypeOf(MobileButton)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(MobileButton, [{
    key: 'onChange',
    value: function onChange() {
      this.props.onChange();
    }
  }, {
    key: 'render',
    value: function render() {
      var onChange = this.props.onChange;


      return _react2.default.createElement(_terraButton2.default, { id: 'mobileButton', text: 'Toggle', onClick: onChange });
    }
  }]);

  return MobileButton;
}(_react2.default.Component);

MobileButton.propTypes = propTypes;
MobileButton.defaultProps = defaultProps;

exports.default = MobileButton;