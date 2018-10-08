'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Textarea = require('../../../Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var textarea = function (_React$Component) {
  _inherits(textarea, _React$Component);

  function textarea() {
    _classCallCheck(this, textarea);

    return _possibleConstructorReturn(this, (textarea.__proto__ || Object.getPrototypeOf(textarea)).apply(this, arguments));
  }

  _createClass(textarea, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!window.ontouchstart) {
        this.resetontouchstart = true;
        window.ontouchstart = 'true';
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.resetontouchstart) {
        delete window.ontouchstart;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Textarea2.default, { id: 'auto-resizable', cols: '2', isAutoResizable: true, defaultValue: 'Default Value' });
    }
  }]);

  return textarea;
}(_react2.default.Component);

exports.default = textarea;