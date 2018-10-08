'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DependentViewport = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

require('terra-base/lib/baseStyles');

var _breakpointsModule = require('./breakpoints.module.scss');

var _breakpointsModule2 = _interopRequireDefault(_breakpointsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DependentViewport = {
  WINDOW: 'window',
  PARENT: 'parent'
};

/* Disabled for the defaultElement which is used implicitly */
/* eslint-disable react/no-unused-prop-types */
var propTypes = {
  /**
   * An element to be displayed at default breakpoints. ( Between 0 and tiny )
  */
  defaultElement: _propTypes2.default.element,
  /**
   * An element to be displayed at tiny breakpoints.
   */
  tiny: _propTypes2.default.element,
  /**
   * An element to be displayed at small breakpoints.
   */
  small: _propTypes2.default.element,
  /**
   * An element to be displayed at medium breakpoints.
   */
  medium: _propTypes2.default.element,
  /**
   * An element to be displayed at large breakpoints.
   */
  large: _propTypes2.default.element,
  /**
   * An element to be displayed at huge breakpoints.
   */
  huge: _propTypes2.default.element,
  /**
   * The viewport the element will be responsive to. One of `window` or `parent`.
   */
  responsiveTo: _propTypes2.default.oneOf(['window', 'parent'])
};

var defaultProps = {
  responsiveTo: 'parent'
};

var ResponsiveElement = function (_React$Component) {
  _inherits(ResponsiveElement, _React$Component);

  function ResponsiveElement() {
    _classCallCheck(this, ResponsiveElement);

    var _this = _possibleConstructorReturn(this, (ResponsiveElement.__proto__ || Object.getPrototypeOf(ResponsiveElement)).call(this));

    _this.state = { element: null };
    _this.setContainer = _this.setContainer.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    _this.animationFrameID = null;
    return _this;
  }

  _createClass(ResponsiveElement, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.container) {
        this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries) {
          _this2.animationFrameID = window.requestAnimationFrame(function () {
            _this2.animationFrameID = null;
            _this2.handleResize(entries[0].contentRect.width);
          });
        });
        this.resizeObserver.observe(this.container);
      } else {
        this.handleResize(window.innerWidth);
        window.addEventListener('resize', this.handleWindowResize);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.container) {
        window.cancelAnimationFrame(this.animationFrameID);
        this.resizeObserver.disconnect(this.container);
        this.container = null;
      } else {
        window.removeEventListener('resize', this.handleWindowResize);
      }
    }
  }, {
    key: 'setContainer',
    value: function setContainer(node) {
      if (node === null) {
        return;
      } // Ref callbacks happen on mount and unmount, element will be null on unmount
      this.container = this.props.responsiveTo === 'parent' ? node.parentNode : null;
    }
  }, {
    key: 'handleResize',
    value: function handleResize(width) {
      var element = void 0;
      var tiny = _breakpointsModule2.default.tiny,
          small = _breakpointsModule2.default.small,
          medium = _breakpointsModule2.default.medium,
          large = _breakpointsModule2.default.large,
          huge = _breakpointsModule2.default.huge;

      if (width >= huge && this.props.huge) {
        element = 'huge';
      } else if (width >= large && this.props.large) {
        element = 'large';
      } else if (width >= medium && this.props.medium) {
        element = 'medium';
      } else if (width >= small && this.props.small) {
        element = 'small';
      } else if (width >= tiny && this.props.tiny) {
        element = 'tiny';
      } else {
        element = 'defaultElement';
      }

      if (this.state.element !== element) {
        this.setState({ element: element });
      }
    }
  }, {
    key: 'handleWindowResize',
    value: function handleWindowResize() {
      this.handleResize(window.innerWidth);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.element) {
        return this.props[this.state.element] || null;
      }

      return _react2.default.createElement('div', { ref: this.setContainer });
    }
  }]);

  return ResponsiveElement;
}(_react2.default.Component);

ResponsiveElement.propTypes = propTypes;
ResponsiveElement.defaultProps = defaultProps;

exports.default = ResponsiveElement;
exports.DependentViewport = DependentViewport;