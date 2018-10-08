'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoadingOverlay = require('terra-overlay/lib/LoadingOverlay');

var _LoadingOverlay2 = _interopRequireDefault(_LoadingOverlay);

var _OverlayContainer = require('terra-overlay/lib/OverlayContainer');

var _OverlayContainer2 = _interopRequireDefault(_OverlayContainer);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */


var OverlayExample = function (_React$Component) {
  _inherits(OverlayExample, _React$Component);

  function OverlayExample() {
    _classCallCheck(this, OverlayExample);

    var _this = _possibleConstructorReturn(this, (OverlayExample.__proto__ || Object.getPrototypeOf(OverlayExample)).call(this));

    _this.state = { show: false };
    _this.handleTriggerOverlay = _this.handleTriggerOverlay.bind(_this);
    _this.handleTriggerFullScreenOverlay = _this.handleTriggerFullScreenOverlay.bind(_this);
    return _this;
  }

  _createClass(OverlayExample, [{
    key: 'handleTriggerOverlay',
    value: function handleTriggerOverlay() {
      var _this2 = this;

      this.setState({ show: true, isRelativeToContainer: true });

      setTimeout(function () {
        _this2.setState({ show: false });
      }, 5000);
    }
  }, {
    key: 'handleTriggerFullScreenOverlay',
    value: function handleTriggerFullScreenOverlay() {
      var _this3 = this;

      this.setState({ show: true, isRelativeToContainer: false });

      setTimeout(function () {
        _this3.setState({ show: false });
      }, 5000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _OverlayContainer2.default,
        { style: { height: '100px', width: '100%' } },
        _react2.default.createElement(_LoadingOverlay2.default, { isOpen: this.state.show, isAnimated: true, isRelativeToContainer: this.state.isRelativeToContainer }),
        _react2.default.createElement(_terraButton2.default, { text: 'Trigger Container Overlay', onClick: this.handleTriggerOverlay }),
        _react2.default.createElement(_terraButton2.default, { text: 'Trigger FullScreen Overlay', onClick: this.handleTriggerFullScreenOverlay })
      );
    }
  }]);

  return OverlayExample;
}(_react2.default.Component);

exports.default = OverlayExample;