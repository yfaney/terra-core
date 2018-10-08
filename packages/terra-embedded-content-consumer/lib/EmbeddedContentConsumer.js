'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _xfc = require('xfc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The source URL of the content to load.
   */
  src: _propTypes2.default.string.isRequired,
  /**
   * Notifies the component that the container has been mounted. Provides a reference
   * to this component to allow triggering messages on the embedded application.
   */
  onMount: _propTypes2.default.func,
  /**
   * Notifies the component that the container has been launched.
   */
  onLaunch: _propTypes2.default.func,
  /**
   * Notifies the component that the container has been authorized.
   */
  onAuthorize: _propTypes2.default.func,
  /**
   * The component can be configured with consumer frame options.
   * See xfc consumer configuration for details: https://github.com/cerner/xfc
   */
  // eslint-disable-next-line react/forbid-prop-types
  options: _propTypes2.default.object,
  /**
  * A set of event handlers keyed by the event name.
  * Note: Binding the event handler is necessary to make `this` work in the callback.
  */
  eventHandlers: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    key: _propTypes2.default.string,
    handler: _propTypes2.default.func
  }))
};

var EmbeddedContentConsumer = function (_React$Component) {
  _inherits(EmbeddedContentConsumer, _React$Component);

  function EmbeddedContentConsumer() {
    _classCallCheck(this, EmbeddedContentConsumer);

    return _possibleConstructorReturn(this, (EmbeddedContentConsumer.__proto__ || Object.getPrototypeOf(EmbeddedContentConsumer)).apply(this, arguments));
  }

  _createClass(EmbeddedContentConsumer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Mount the provided source as the application into the content wrapper.
      this.xfcFrame = _xfc.Consumer.mount(this.embeddedContentWrapper, this.props.src, this.props.options);

      // Notify that the consumer frame has mounted.
      if (this.props.onMount) {
        this.props.onMount(this.xfcFrame);
      }

      // Attach the event handlers to the xfc frame.
      this.addEventListener('xfc.launched', this.props.onLaunch);
      this.addEventListener('xfc.authorized', this.props.onAuthorize);

      // Attach custom event handlers to the xfc frame.
      this.addEventListeners(this.props.eventHandlers);
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener(eventName, eventHandler) {
      if (eventName && eventHandler) {
        this.xfcFrame.on(eventName, eventHandler);
      }
    }
  }, {
    key: 'addEventListeners',
    value: function addEventListeners(customEvents) {
      var _this2 = this;

      (customEvents || []).forEach(function (e) {
        return _this2.addEventListener(e.key, e.handler);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          src = _props.src,
          onMount = _props.onMount,
          onLaunch = _props.onLaunch,
          onAuthorize = _props.onAuthorize,
          options = _props.options,
          eventHandlers = _props.eventHandlers,
          customProps = _objectWithoutProperties(_props, ['src', 'onMount', 'onLaunch', 'onAuthorize', 'options', 'eventHandlers']);

      return _react2.default.createElement('div', _extends({}, customProps, {
        ref: function ref(element) {
          _this3.embeddedContentWrapper = element;
        }
      }));
    }
  }]);

  return EmbeddedContentConsumer;
}(_react2.default.Component);

EmbeddedContentConsumer.propTypes = propTypes;

exports.default = EmbeddedContentConsumer;