'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _Alert = require('../../../Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlertResponsiveToParent = function (_React$Component) {
  _inherits(AlertResponsiveToParent, _React$Component);

  function AlertResponsiveToParent(props) {
    _classCallCheck(this, AlertResponsiveToParent);

    var _this = _possibleConstructorReturn(this, (AlertResponsiveToParent.__proto__ || Object.getPrototypeOf(AlertResponsiveToParent)).call(this, props));

    _this.state = {
      actionButtonClickCount: 0,
      isDismissed: false
    };
    _this.actionFunc = _this.actionFunc.bind(_this);
    _this.handleDismiss = _this.handleDismiss.bind(_this);
    return _this;
  }

  _createClass(AlertResponsiveToParent, [{
    key: 'actionFunc',
    value: function actionFunc() {
      var newState = this.state;
      newState.actionButtonClickCount += 1;
      this.setState(newState);
    }
  }, {
    key: 'handleDismiss',
    value: function handleDismiss() {
      var newState = this.state;
      newState.isDismissed = true;
      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      var alertText = 'This is a success alert. It is configured to be dismissible. Click on the Dismiss button to dismiss the alert.';
      var alertElem = '';
      if (!this.state.isDismissed) {
        alertElem = _react2.default.createElement(
          _Alert2.default,
          { id: 'dismissibleAlert', type: 'success', onDismiss: this.handleDismiss },
          alertText
        );
      }
      return _react2.default.createElement(
        'div',
        { style: { width: '500px', border: '1px solid black', padding: '5px' } },
        _react2.default.createElement(
          'h3',
          null,
          'Alerts with actions in a small container (500px wide) that will cause the action section of the alert to render below the message instead of beside it.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Alert2.default,
          { id: 'actionAlert', type: 'warning', action: _react2.default.createElement(_terraButton2.default, { text: 'Action', variant: _terraButton2.default.Opts.Variants.EMPHASIS, onClick: this.actionFunc }) },
          'This is a warning. It is configured with a custom Action button.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'Action button has been clicked',
          this.state.actionButtonClickCount,
          ' ',
          'times.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        alertElem,
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Alert2.default,
          { id: 'noActionsAlert', type: 'info' },
          'This is an info alert'
        )
      );
    }
  }]);

  return AlertResponsiveToParent;
}(_react2.default.Component);

exports.default = AlertResponsiveToParent;