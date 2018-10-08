'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraFormField = require('terra-form-field');

var _terraFormField2 = _interopRequireDefault(_terraFormField);

var _terraFormInput = require('terra-form-input');

var _terraFormInput2 = _interopRequireDefault(_terraFormInput);

var _Fieldset = require('terra-form-fieldset/lib/Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var FieldsetExamples = function (_React$Component) {
  _inherits(FieldsetExamples, _React$Component);

  function FieldsetExamples(props) {
    _classCallCheck(this, FieldsetExamples);

    var _this = _possibleConstructorReturn(this, (FieldsetExamples.__proto__ || Object.getPrototypeOf(FieldsetExamples)).call(this, props));

    _this.state = {
      first: '',
      middle: '',
      last: ''
    };
    _this.handleFirstChange = _this.handleFirstChange.bind(_this);
    _this.handleMiddleChange = _this.handleMiddleChange.bind(_this);
    _this.handleLastChange = _this.handleLastChange.bind(_this);
    return _this;
  }

  _createClass(FieldsetExamples, [{
    key: 'handleFirstChange',
    value: function handleFirstChange(event) {
      this.setState({ first: event.target.value });
    }
  }, {
    key: 'handleMiddleChange',
    value: function handleMiddleChange(event) {
      this.setState({ middle: event.target.value });
    }
  }, {
    key: 'handleLastChange',
    value: function handleLastChange(event) {
      this.setState({ last: event.target.value });
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
          _react2.default.createElement(
            _Fieldset2.default,
            {
              type: 'checkbox',
              legend: 'Give your full name here',
              name: 'children_present',
              value: 'children_present',
              error: 'All fields must be filled out',
              help: 'Families are eligible for family package plans',
              required: true
            },
            _react2.default.createElement(
              _terraFormField2.default,
              { label: 'First', isInline: true, required: true, htmlFor: 'test' },
              _react2.default.createElement(_terraFormInput2.default, { id: 'test', type: 'text', name: 'first', defaultValue: '', onChange: this.handleFirstChange })
            ),
            _react2.default.createElement(
              _terraFormField2.default,
              { label: 'Middle', isInline: true, required: true },
              _react2.default.createElement(_terraFormInput2.default, { type: 'text', name: 'middle', defaultValue: '', onChange: this.handleMiddleChange })
            ),
            _react2.default.createElement(
              _terraFormField2.default,
              { label: 'Last', isInline: true, required: true },
              _react2.default.createElement(_terraFormInput2.default, { type: 'text', name: 'last', defaultValue: '', onChange: this.handleLastChange })
            )
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'p',
          null,
          'Full Name Provided:',
          _react2.default.createElement(
            'span',
            { style: { display: 'inline-block' } },
            this.state.first,
            ' ',
            this.state.middle,
            ' ',
            this.state.last
          )
        ),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return FieldsetExamples;
}(_react2.default.Component);

exports.default = FieldsetExamples;