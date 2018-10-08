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


var ActionExample = function (_React$Component) {
  _inherits(ActionExample, _React$Component);

  function ActionExample(props) {
    _classCallCheck(this, ActionExample);

    var _this = _possibleConstructorReturn(this, (ActionExample.__proto__ || Object.getPrototypeOf(ActionExample)).call(this, props));

    _this.state = {
      actionButtonClickCount: 0
    };
    _this.actionFunc = _this.actionFunc.bind(_this);
    return _this;
  }

  _createClass(ActionExample, [{
    key: 'actionFunc',
    value: function actionFunc() {
      var newState = this.state;
      newState.actionButtonClickCount += 1;
      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      var alertStartTagStr = '<Alert type="warning" action={<Button text="Action" variant="emphasis" onClick={this.actionFunc} />} >';
      var alertEndTagStr = '</Alert>';
      var alertText = 'This is a warning. It is configured with a custom Action button.';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { dir: 'ltr' },
          _react2.default.createElement(
            'h3',
            null,
            'Basic Alert of type warning with action button'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'code',
            null,
            alertStartTagStr,
            _react2.default.createElement('br', null),
            '\xA0\xA0',
            alertText,
            '.',
            _react2.default.createElement('br', null),
            alertEndTagStr
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Alert2.default,
          { type: 'warning', action: _react2.default.createElement(_terraButton2.default, { text: 'Action', variant: 'emphasis', onClick: this.actionFunc }) },
          alertText
        ),
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

  return ActionExample;
}(_react2.default.Component);

exports.default = ActionExample;