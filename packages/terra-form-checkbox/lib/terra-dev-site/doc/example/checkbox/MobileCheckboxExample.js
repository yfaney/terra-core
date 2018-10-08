'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = require('terra-form-checkbox/lib/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var propTypes = { onChange: _propTypes2.default.func };
var defaultProps = { onChange: undefined };

var MobileCheckbox = function (_React$Component) {
  _inherits(MobileCheckbox, _React$Component);

  function MobileCheckbox(props) {
    _classCallCheck(this, MobileCheckbox);

    var _this = _possibleConstructorReturn(this, (MobileCheckbox.__proto__ || Object.getPrototypeOf(MobileCheckbox)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(MobileCheckbox, [{
    key: 'onChange',
    value: function onChange() {
      this.props.onChange();
    }
  }, {
    key: 'render',
    value: function render() {
      var onChange = this.props.onChange;


      return _react2.default.createElement(_Checkbox2.default, { id: 'mobileCheckbox', labelText: 'Toggle to trigger resize. Window size needs to be less than or equal to 1024px.', onChange: onChange });
    }
  }]);

  return MobileCheckbox;
}(_react2.default.Component);

MobileCheckbox.propTypes = propTypes;
MobileCheckbox.defaultProps = defaultProps;

exports.default = MobileCheckbox;