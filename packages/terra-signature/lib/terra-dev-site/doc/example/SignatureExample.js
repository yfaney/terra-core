'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraFormSelect = require('terra-form-select');

var _terraFormSelect2 = _interopRequireDefault(_terraFormSelect);

var _Signature = require('terra-signature/lib/Signature');

var _Signature2 = _interopRequireDefault(_Signature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var SignatureExample = function (_React$Component) {
  _inherits(SignatureExample, _React$Component);

  function SignatureExample() {
    _classCallCheck(this, SignatureExample);

    var _this = _possibleConstructorReturn(this, (SignatureExample.__proto__ || Object.getPrototypeOf(SignatureExample)).call(this));

    _this.state = { lineSegments: [], lineWidth: _Signature2.default.Opts.Width.FINE };

    _this.handleSingleLine = _this.handleSingleLine.bind(_this);
    _this.handleClear = _this.handleClear.bind(_this);
    _this.handleLineWidth = _this.handleLineWidth.bind(_this);
    return _this;
  }

  _createClass(SignatureExample, [{
    key: 'handleSingleLine',
    value: function handleSingleLine() {
      var singleLine = [{
        x1: 71, y1: 8, x2: 71, y2: 8
      }, {
        x1: 71, y1: 8, x2: 71, y2: 10
      }, {
        x1: 71, y1: 10, x2: 71, y2: 17
      }, {
        x1: 71, y1: 17, x2: 71, y2: 28
      }, {
        x1: 71, y1: 28, x2: 71, y2: 44
      }, {
        x1: 71, y1: 44, x2: 71, y2: 56
      }, {
        x1: 71, y1: 56, x2: 71, y2: 68
      }, {
        x1: 71, y1: 68, x2: 71, y2: 75
      }, {
        x1: 71, y1: 75, x2: 71, y2: 81
      }, {
        x1: 71, y1: 81, x2: 71, y2: 84
      }, {
        x1: 71, y1: 84, x2: 71, y2: 86
      }, {
        x1: 71, y1: 86, x2: 71, y2: 87
      }, {
        x1: 71, y1: 87, x2: 71, y2: 87
      }];
      var newState = _extends({}, this.state, { lineSegments: singleLine });
      this.setState(newState);
    }
  }, {
    key: 'handleClear',
    value: function handleClear() {
      var newState = _extends({}, this.state, { lineSegments: [] });
      this.setState(newState);
    }
  }, {
    key: 'handleLineWidth',
    value: function handleLineWidth(value) {
      var newState = _extends({}, this.state, { lineSegments: [], lineWidth: parseInt(value, 10) });
      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: {
              height: '100px', width: '100%', padding: '5px', border: '1px solid black'
            }
          },
          _react2.default.createElement(_Signature2.default, { id: 'foo', lineWidth: this.state.lineWidth, lineSegments: this.state.lineSegments })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { type: 'button', onClick: this.handleClear },
            'Clear '
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', onClick: this.handleSingleLine },
            'Sign w/Line '
          ),
          _react2.default.createElement(
            _terraFormSelect2.default,
            { placeholder: 'Select a line width', value: this.state.lineWidth, onChange: this.handleLineWidth },
            _react2.default.createElement(_terraFormSelect2.default.Option, { value: '1', display: 'EXTRAFINE', key: 'extrafine' }),
            _react2.default.createElement(_terraFormSelect2.default.Option, { value: '2', display: 'FINE', key: 'fine' }),
            _react2.default.createElement(_terraFormSelect2.default.Option, { value: '4', display: 'MEDIUM', key: 'medium' }),
            _react2.default.createElement(_terraFormSelect2.default.Option, { value: '6', display: 'HEAVY', key: 'heavy' })
          )
        )
      );
    }
  }]);

  return SignatureExample;
}(_react2.default.Component);

exports.default = SignatureExample;