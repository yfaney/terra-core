'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('terra-form-field/lib/Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var FieldExamples = function (_React$Component) {
  _inherits(FieldExamples, _React$Component);

  function FieldExamples(props) {
    _classCallCheck(this, FieldExamples);

    var _this = _possibleConstructorReturn(this, (FieldExamples.__proto__ || Object.getPrototypeOf(FieldExamples)).call(this, props));

    _this.state = { isInvalid: false };
    _this.toggleIsInvalid = _this.toggleIsInvalid.bind(_this);
    return _this;
  }

  _createClass(FieldExamples, [{
    key: 'toggleIsInvalid',
    value: function toggleIsInvalid() {
      this.setState(function (prevState) {
        return { isInvalid: !prevState.isInvalid };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          ' Field Examples '
        ),
        _react2.default.createElement(
          _Field2.default,
          {
            label: 'Field Label',
            help: 'This is a standard, non-required field.',
            error: 'Error Message',
            isInvalid: this.state.isInvalid
          },
          _react2.default.createElement(
            'div',
            { style: { border: 'dashed 1px lightGrey' } },
            'Control Placeholder'
          )
        ),
        _react2.default.createElement(
          _Field2.default,
          {
            label: 'Field Label',
            help: 'This is an optional field.',
            error: 'Error Message',
            isInvalid: this.state.isInvalid,
            isInline: true,
            showOptional: true
          },
          _react2.default.createElement(
            'div',
            { style: { border: 'dashed 1px lightGrey' } },
            'Control Placeholder'
          )
        ),
        _react2.default.createElement(
          _Field2.default,
          {
            label: 'Field Label',
            help: 'This is a required field.',
            error: 'Error Message',
            isInvalid: this.state.isInvalid,
            isInline: true,
            required: true
          },
          _react2.default.createElement(
            'div',
            { style: { border: 'dashed 1px lightGrey' } },
            'Control Placeholder'
          )
        ),
        _react2.default.createElement(
          _Field2.default,
          {
            label: 'Field Label',
            help: 'This is a required field, but the required indicator is hidden until the field is in error.',
            error: 'Now the required indicator is showing because the field is in error.',
            isInvalid: this.state.isInvalid,
            isInline: true,
            required: true,
            hideRequired: true
          },
          _react2.default.createElement(
            'div',
            { style: { border: 'dashed 1px lightGrey' } },
            'Control Placeholder'
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'p',
          null,
          'If a field is invalid, an error icon will be displayed.',
          _react2.default.createElement(
            'button',
            { type: 'button', onClick: this.toggleIsInvalid },
            'Toggle Invalid State'
          )
        )
      );
    }
  }]);

  return FieldExamples;
}(_react2.default.Component);

exports.default = FieldExamples;