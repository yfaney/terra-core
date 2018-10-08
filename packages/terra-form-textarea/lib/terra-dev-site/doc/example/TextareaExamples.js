'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Textarea = require('terra-form-textarea/lib/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var TextareaExamples = function (_React$Component) {
  _inherits(TextareaExamples, _React$Component);

  function TextareaExamples(props) {
    _classCallCheck(this, TextareaExamples);

    var _this = _possibleConstructorReturn(this, (TextareaExamples.__proto__ || Object.getPrototypeOf(TextareaExamples)).call(this, props));

    _this.state = {
      area1: 'I automatically resize as you type in more information (Except in Mobile)',
      area2: 'Hello! I am a Software Engineer in Kansas City! Leaving this as blank makes this input invalid.',
      area3: 'I am full container width and height, making me non resizable.'
    };
    _this.handleArea1Change = _this.handleArea1Change.bind(_this);
    _this.handleArea2Change = _this.handleArea2Change.bind(_this);
    _this.handleArea3Change = _this.handleArea3Change.bind(_this);
    return _this;
  }

  _createClass(TextareaExamples, [{
    key: 'handleArea1Change',
    value: function handleArea1Change(event) {
      this.setState({ area1: event.currentTarget.value });
    }
  }, {
    key: 'handleArea2Change',
    value: function handleArea2Change(event) {
      this.setState({ area2: event.currentTarget.value });
    }
  }, {
    key: 'handleArea3Change',
    value: function handleArea3Change(event) {
      this.setState({ area3: event.currentTarget.value });
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
          _react2.default.createElement(_Textarea2.default, { defaultValue: 'I\'m Disabled', disabled: true, size: 'small' }),
          _react2.default.createElement(_Textarea2.default, { defaultValue: 'I\'m Disabled with error', isInvalid: true, disabled: true, size: 'small' }),
          _react2.default.createElement(_Textarea2.default, { name: 'name', value: this.state.area1, required: true, onChange: this.handleArea1Change, size: 'medium', isAutoResizable: true }),
          _react2.default.createElement(_Textarea2.default, {
            name: 'profile_description',
            value: this.state.area2,
            cols: 10,
            isInvalid: this.state.area2 === '',
            onChange: this.handleArea2Change,
            size: 'large'
          }),
          _react2.default.createElement(_Textarea2.default, { name: 'details', size: 'full', value: this.state.area3, required: true, onChange: this.handleArea3Change })
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'ul',
          null,
          'Input Provided:',
          _react2.default.createElement(
            'li',
            { style: { margin: '10px' } },
            'Text Area 1 -',
            this.state.area1
          ),
          _react2.default.createElement(
            'li',
            { style: { margin: '10px' } },
            'Text Area 2 -',
            this.state.area2
          ),
          _react2.default.createElement(
            'li',
            { style: { margin: '10px' } },
            'Text Area 3 -',
            this.state.area3
          )
        ),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return TextareaExamples;
}(_react2.default.Component);

exports.default = TextareaExamples;