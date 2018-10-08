'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Alert = require('terra-alert/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var DismissibleExample = function (_React$Component) {
  _inherits(DismissibleExample, _React$Component);

  function DismissibleExample(props) {
    _classCallCheck(this, DismissibleExample);

    var _this = _possibleConstructorReturn(this, (DismissibleExample.__proto__ || Object.getPrototypeOf(DismissibleExample)).call(this, props));

    _this.state = {
      isDismissed: false
    };
    _this.handleDismiss = _this.handleDismiss.bind(_this);
    return _this;
  }

  _createClass(DismissibleExample, [{
    key: 'handleDismiss',
    value: function handleDismiss() {
      var newState = this.state;
      newState.isDismissed = true;
      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      var alertStartTagStr = '<Alert type="success" onDismiss={this.handleDismiss} >';
      var alertEndTagStr = '</Alert>';
      var alertText = 'This is a success alert. It is configured to be dismissible. Click on the Dismiss button to dismiss the alert.';
      var alertElem = '';
      if (!this.state.isDismissed) {
        alertElem = _react2.default.createElement(
          _Alert2.default,
          { type: 'success', onDismiss: this.handleDismiss },
          alertText
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { dir: 'ltr' },
          _react2.default.createElement(
            'h3',
            null,
            'Alert of type success that is dismissible'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'code',
            null,
            alertStartTagStr,
            _react2.default.createElement('br', null),
            '\xA0\xA0',
            alertText,
            _react2.default.createElement('br', null),
            alertEndTagStr
          )
        ),
        _react2.default.createElement('br', null),
        alertElem
      );
    }
  }]);

  return DismissibleExample;
}(_react2.default.Component);

exports.default = DismissibleExample;