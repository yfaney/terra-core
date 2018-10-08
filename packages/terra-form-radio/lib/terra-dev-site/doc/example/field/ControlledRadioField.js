'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('terra-form-radio/lib/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _RadioField = require('terra-form-radio/lib/RadioField');

var _RadioField2 = _interopRequireDefault(_RadioField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      selectedAnswer: undefined
    };

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: 'handleOnChange',
    value: function handleOnChange(e) {
      this.setState({ selectedAnswer: e.currentTarget.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var errorMessage = 'An answer must be chosen';
      var isInvalid = false;

      if (this.state.selectedAnswer === 'mcdonalds') {
        errorMessage = 'We only serve adult meals here.';
        isInvalid = true;
      } else if (this.state.selectedAnswer === undefined) {
        isInvalid = true;
      }

      return _react2.default.createElement(
        _RadioField2.default,
        {
          legend: 'Which Type of Meal are you looking for?',
          help: 'This cannot be changed when submitted',
          isInvalid: isInvalid,
          error: errorMessage,
          required: true
        },
        _react2.default.createElement(_Radio2.default, { id: 'chicken-meal', name: 'meal', labelText: 'Chicken', onChange: this.handleOnChange, value: 'chicken' }),
        _react2.default.createElement(_Radio2.default, { id: 'salmon-meal', name: 'meal', labelText: 'Salmon', onChange: this.handleOnChange, value: 'salmon' }),
        _react2.default.createElement(_Radio2.default, { id: 'mcdonalds-meal', name: 'meal', labelText: 'McDonalds (Not a valid choice)', onChange: this.handleOnChange, value: 'mcdonalds' })
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;