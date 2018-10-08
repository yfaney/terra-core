'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _Alert = require('terra-alert/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var ActionAndDismissibleExample = function (_React$Component) {
  _inherits(ActionAndDismissibleExample, _React$Component);

  function ActionAndDismissibleExample(props) {
    _classCallCheck(this, ActionAndDismissibleExample);

    var _this = _possibleConstructorReturn(this, (ActionAndDismissibleExample.__proto__ || Object.getPrototypeOf(ActionAndDismissibleExample)).call(this, props));

    _this.state = {
      isDismissed: false,
      actionButtonClickCount: 0
    };
    _this.handleDismiss = _this.handleDismiss.bind(_this);
    _this.actionFunc = _this.actionFunc.bind(_this);
    return _this;
  }

  _createClass(ActionAndDismissibleExample, [{
    key: 'handleDismiss',
    value: function handleDismiss() {
      var newState = this.state;
      newState.isDismissed = true;
      this.setState(newState);
    }
  }, {
    key: 'actionFunc',
    value: function actionFunc() {
      var newState = this.state;
      newState.actionButtonClickCount += 1;
      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      var alertStartTagStr = '<Alert type="custom" onDismiss={this.handleDismiss} customStatusColor="orange" action={<Button text="Action" variant="primary" onClick={this.actionFunc} />} >';
      var alertEndTagStr = '</Alert>';
      var alertText = 'This is a a custom alert with no icon or title. It is configured to be dismissible and with a custom action button. Click on the Dismiss button to dismiss the alert.';
      var alertElem = '';
      if (!this.state.isDismissed) {
        alertElem = _react2.default.createElement(
          _Alert2.default,
          { type: 'custom', onDismiss: this.handleDismiss, customStatusColor: 'orange', action: _react2.default.createElement(_terraButton2.default, { text: 'Action', variant: 'emphasis', onClick: this.actionFunc }) },
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
            'Alert of type custom with no icon or title that is dismissible and has an action button'
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
        alertElem,
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'Action button has been clicked',
          this.state.actionButtonClickCount,
          ' ',
          'times.'
        )
      );
    }
  }]);

  return ActionAndDismissibleExample;
}(_react2.default.Component);

exports.default = ActionAndDismissibleExample;