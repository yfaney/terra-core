'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Overlay = require('../../../../Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _OverlayContainer = require('../../../../OverlayContainer');

var _OverlayContainer2 = _interopRequireDefault(_OverlayContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OverlayExample = function (_React$Component) {
  _inherits(OverlayExample, _React$Component);

  function OverlayExample() {
    _classCallCheck(this, OverlayExample);

    var _this = _possibleConstructorReturn(this, (OverlayExample.__proto__ || Object.getPrototypeOf(OverlayExample)).call(this));

    _this.state = { show: false, toggle: 'true' };
    _this.handleTriggerOverlay = _this.handleTriggerOverlay.bind(_this);
    _this.handleTriggerFullScreenOverlay = _this.handleTriggerFullScreenOverlay.bind(_this);
    _this.handleRandomClick = _this.handleRandomClick.bind(_this);
    return _this;
  }

  _createClass(OverlayExample, [{
    key: 'handleTriggerOverlay',
    value: function handleTriggerOverlay() {
      var _this2 = this;

      this.setState({ show: true, relative: true, id: 'terra-Overlay--container' });

      setTimeout(function () {
        _this2.setState({ show: false });
      }, 5000);
    }
  }, {
    key: 'handleTriggerFullScreenOverlay',
    value: function handleTriggerFullScreenOverlay() {
      var _this3 = this;

      this.setState({ show: true, relative: false, id: 'terra-Overlay--fullscreen' });

      setTimeout(function () {
        _this3.setState({ show: false });
      }, 5000);
    }
  }, {
    key: 'handleRandomClick',
    value: function handleRandomClick() {
      if (this.state.toggle === 'false') {
        this.setState({ toggle: 'true' });
      } else {
        this.setState({ toggle: 'false' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _OverlayContainer2.default,
          { style: { height: '100px', width: '100%' } },
          _react2.default.createElement(
            _Overlay2.default,
            { isOpen: this.state.show, isRelativeToContainer: this.state.relative, id: this.state.id },
            _react2.default.createElement(
              'h3',
              null,
              'Overlay will timeout in 5 seconds.'
            )
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', id: 'trigger_fullscreen', onClick: this.handleTriggerFullScreenOverlay },
            'Trigger Fullscreen Overlay'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', id: 'trigger_container', onClick: this.handleTriggerOverlay },
            'Trigger Container Overlay'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          ' Outside of overlay container to prove functionality. Click the random button below after clicking the Trigger Container Overlay button to confirm an Overlay relative to container does not block outside interactions. '
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'random_button', onClick: this.handleRandomClick },
          'A Random Button To Change Toggle State '
        ),
        _react2.default.createElement(
          'p',
          null,
          'Random Button toggle State is',
          ' ',
          _react2.default.createElement(
            'span',
            { id: 'random_state' },
            this.state.toggle
          )
        )
      );
    }
  }]);

  return OverlayExample;
}(_react2.default.Component);

exports.default = OverlayExample;