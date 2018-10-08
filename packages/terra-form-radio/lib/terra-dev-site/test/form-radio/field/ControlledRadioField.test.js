'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('../../../../Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _RadioField = require('../../../../RadioField');

var _RadioField2 = _interopRequireDefault(_RadioField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {};
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
      return _react2.default.createElement(
        _RadioField2.default,
        {
          id: 'testing-radio-field',
          legend: 'Which Department do you work for?',
          help: 'Your work falls inline with one of these departments',
          isInvalid: this.state.selectedAnswer === undefined,
          error: 'One must be selected',
          isInline: true,
          required: true
        },
        _react2.default.createElement(_Radio2.default, { id: 'ux-dept', name: 'dept', labelText: 'UX/Interaction Design', onChange: this.handleOnChange, value: 'ux' }),
        _react2.default.createElement(_Radio2.default, { id: 'magazine-dept', name: 'dept', labelText: 'Magazine Advertisements', onChange: this.handleOnChange, value: 'magazine' }),
        _react2.default.createElement(_Radio2.default, { id: 'website-dept', name: 'dept', labelText: 'Website Advertisements', onChange: this.handleOnChange, value: 'website' }),
        _react2.default.createElement(_Radio2.default, { id: 'events-dept', name: 'dept', labelText: 'Event Promotions', onChange: this.handleOnChange, value: 'events' })
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;