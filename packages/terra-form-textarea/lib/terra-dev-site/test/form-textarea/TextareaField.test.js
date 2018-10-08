'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextareaField = require('../../../TextareaField');

var _TextareaField2 = _interopRequireDefault(_TextareaField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextareaFieldExample = function (_React$Component) {
  _inherits(TextareaFieldExample, _React$Component);

  function TextareaFieldExample() {
    _classCallCheck(this, TextareaFieldExample);

    var _this = _possibleConstructorReturn(this, (TextareaFieldExample.__proto__ || Object.getPrototypeOf(TextareaFieldExample)).call(this));

    _this.state = {
      isInvalid: false
    };

    _this.toggleInvalid = _this.toggleInvalid.bind(_this);
    return _this;
  }

  _createClass(TextareaFieldExample, [{
    key: 'toggleInvalid',
    value: function toggleInvalid() {
      this.setState(function (prevState) {
        return {
          isInvalid: !prevState.isInvalid
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'validity-toggle', onClick: this.toggleInvalid },
          'Toggle Validity'
        ),
        _react2.default.createElement(_TextareaField2.default, {
          inputId: 'test-input',
          defaultValue: 'Value',
          error: 'Text',
          help: 'Help',
          hideRequired: true,
          inputAttrs: {
            name: 'test',
            type: 'number'
          },
          isInvalid: this.state.isInvalid,
          label: 'Label Text',
          labelAttrs: {
            className: 'label'
          },
          onChange: function onChange() {},
          showOptional: true,
          value: 'Value'
        })
      );
    }
  }]);

  return TextareaFieldExample;
}(_react2.default.Component);

exports.default = TextareaFieldExample;