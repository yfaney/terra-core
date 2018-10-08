'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('../../../Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldExamples = function (_React$Component) {
  _inherits(FieldExamples, _React$Component);

  function FieldExamples(props) {
    _classCallCheck(this, FieldExamples);

    var _this = _possibleConstructorReturn(this, (FieldExamples.__proto__ || Object.getPrototypeOf(FieldExamples)).call(this, props));

    _this.state = { isInvalid: false };
    _this.handleIsInvalidChange = _this.handleIsInvalidChange.bind(_this);
    return _this;
  }

  _createClass(FieldExamples, [{
    key: 'handleIsInvalidChange',
    value: function handleIsInvalidChange() {
      this.setState(function (prevState) {
        return { isInvalid: !prevState.isInvalid };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var field = _react2.default.createElement(
        _Field2.default,
        {
          id: 'default',
          style: { border: 'dashed 1px lightGrey', padding: '10px' },
          label: 'Field Label',
          help: 'Help Message',
          error: 'Error Message',
          isInvalid: this.state.isInvalid
        },
        _react2.default.createElement(
          'div',
          { style: { border: 'dashed 1px lightGrey' } },
          'Control Placeholder'
        )
      );

      var optional = _react2.default.createElement(
        _Field2.default,
        {
          id: 'optional',
          style: { border: 'dashed 1px lightGrey', padding: '10px' },
          label: 'Field Label',
          help: 'Help Message',
          error: 'Error Message',
          isInvalid: this.state.isInvalid,
          showOptional: true
        },
        _react2.default.createElement(
          'div',
          { style: { border: 'dashed 1px lightGrey' } },
          'Control Placeholder'
        )
      );

      var required = _react2.default.createElement(
        _Field2.default,
        {
          id: 'required',
          style: { border: 'dashed 1px lightGrey', padding: '10px' },
          label: 'Field Label',
          help: 'Help Message',
          error: 'Error Message',
          isInvalid: this.state.isInvalid,
          required: true
        },
        _react2.default.createElement(
          'div',
          { style: { border: 'dashed 1px lightGrey' } },
          'Control Placeholder'
        )
      );

      var requiredHidden = _react2.default.createElement(
        _Field2.default,
        {
          id: 'required-hidden',
          style: { border: 'dashed 1px lightGrey', padding: '10px' },
          label: 'Field Label',
          help: 'Help Message',
          error: 'Error Message',
          isInvalid: this.state.isInvalid,
          required: true,
          hideRequired: true
        },
        _react2.default.createElement(
          'div',
          { style: { border: 'dashed 1px lightGrey' } },
          'Control Placeholder'
        )
      );

      var hiddenLabel = _react2.default.createElement(
        _Field2.default,
        {
          id: 'label-hidden',
          style: { border: 'dashed 1px lightGrey', padding: '10px' },
          label: 'Field Label',
          help: 'Help Message',
          error: 'Error Message',
          isInvalid: this.state.isInvalid,
          isLabelHidden: true
        },
        _react2.default.createElement(
          'div',
          { style: { border: 'dashed 1px lightGrey' } },
          'Control Placeholder'
        )
      );

      var inline = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Field2.default,
          {
            id: 'inline-1',
            style: { border: 'dashed 1px lightGrey', padding: '10px' },
            label: 'Field Label - Spacing POC',
            error: 'Error Message',
            isInline: true,
            isInvalid: this.state.isInvalid,
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
            id: 'inline-2',
            style: { border: 'dashed 1px lightGrey', padding: '10px' },
            label: 'Field Label - Spacing POC',
            error: 'Error Message',
            isInline: true,
            isInvalid: this.state.isInvalid,
            required: true,
            hideRequired: true
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
            id: 'inline-3',
            style: { border: 'dashed 1px lightGrey', padding: '10px' },
            label: 'Field Label - Spacing POC',
            error: 'Error Message',
            isInline: true,
            isInvalid: this.state.isInvalid,
            showOptional: true
          },
          _react2.default.createElement(
            'div',
            { style: { border: 'dashed 1px lightGrey' } },
            'Control Placeholder'
          )
        )
      );

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'toggle-is-invalid', onClick: this.handleIsInvalidChange },
          'Toggle In Error '
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Field'
        ),
        field,
        _react2.default.createElement(
          'h3',
          null,
          'Field - Optional'
        ),
        optional,
        _react2.default.createElement(
          'h3',
          null,
          'Field - Required'
        ),
        required,
        _react2.default.createElement(
          'h3',
          null,
          'Field - Required but Indicator Hidden'
        ),
        requiredHidden,
        _react2.default.createElement(
          'h3',
          null,
          'Field - Hidden Label'
        ),
        hiddenLabel,
        _react2.default.createElement(
          'h3',
          null,
          'Field - Inline'
        ),
        inline
      );
    }
  }]);

  return FieldExamples;
}(_react2.default.Component);

exports.default = FieldExamples;