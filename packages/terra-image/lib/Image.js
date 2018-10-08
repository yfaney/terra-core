'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageVariant = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _ImageModule = require('./Image.module.scss');

var _ImageModule2 = _interopRequireDefault(_ImageModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_ImageModule2.default);

var ImageVariant = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
  CIRCLE: 'circle',
  THUMBNAIL: 'thumbnail'
};

var propTypes = {
  /**
   * The source string for the image which will be loaded and displayed.
   */
  src: _propTypes2.default.string.isRequired,
  /**
   * Sets the style of the image from the following values; `default`, `rounded`, `circle`, `thumbnail`.
   */
  variant: _propTypes2.default.oneOf(['default', 'rounded', 'circle', 'thumbnail']),
  /**
   * Sets the fluid behavior of the image, which is `nonfluid` by default.
   */
  isFluid: _propTypes2.default.bool,
  /**
   * The text content that specifies an alternative text for an image.
   */
  alt: _propTypes2.default.string.isRequired,
  /**
   * A React element which will be displayed during loading and in case of src load failure.
   */
  placeholder: _propTypes2.default.element,
  /**
   * Sets the height of the image.
   */
  height: _propTypes2.default.string,
  /**
   * Sets the width of the image.
   */
  width: _propTypes2.default.string,
  /**
   * Function to be executed when the image load is successful.
   */
  onLoad: _propTypes2.default.func,
  /**
   * Function to be executed when the image load errors.
   */
  onError: _propTypes2.default.func
};

/* eslint-disable react/default-props-match-prop-types */
var defaultProps = {
  variant: 'default',
  isFluid: false,
  alt: ' '
};
/* eslint-enable react/default-props-match-prop-types */

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image(props) {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

    _this.state = { isLoading: true, isError: false };

    _this.handleOnLoad = _this.handleOnLoad.bind(_this);
    _this.handleOnError = _this.handleOnError.bind(_this);
    return _this;
  }

  _createClass(Image, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      // If a new image is being loaded, reset the state to loading
      if (newProps.src !== this.props.src || newProps.placeholder !== this.props.placeholder) {
        this.setState({ isLoading: true, isError: false });
      }
    }
  }, {
    key: 'handleOnLoad',
    value: function handleOnLoad() {
      this.setState({ isLoading: false });
      var onLoad = this.props.onLoad;


      if (onLoad !== undefined) {
        onLoad();
      }
    }
  }, {
    key: 'handleOnError',
    value: function handleOnError() {
      this.setState({ isLoading: false, isError: true });
      var onError = this.props.onError;


      if (onError !== undefined) {
        onError();
      }
    }
  }, {
    key: 'createImage',
    value: function createImage(customProps, imageClasses) {
      var _props = this.props,
          src = _props.src,
          alt = _props.alt,
          height = _props.height,
          width = _props.width;

      return _react2.default.createElement('img', _extends({}, customProps, {
        src: src,
        alt: alt,
        height: height,
        width: width,
        onLoad: this.handleOnLoad,
        onError: this.handleOnError,
        className: imageClasses
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          src = _props2.src,
          variant = _props2.variant,
          isFluid = _props2.isFluid,
          alt = _props2.alt,
          placeholder = _props2.placeholder,
          height = _props2.height,
          width = _props2.width,
          onLoad = _props2.onLoad,
          onError = _props2.onError,
          customProps = _objectWithoutProperties(_props2, ['src', 'variant', 'isFluid', 'alt', 'placeholder', 'height', 'width', 'onLoad', 'onError']);

      var imageClasses = cx(['image', variant, customProps.className, { fluid: isFluid }]);
      delete customProps.className;

      if (placeholder) {
        if (this.state.isLoading) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: cx('hidden') },
              this.createImage(customProps, imageClasses)
            ),
            _react2.default.createElement(
              'div',
              null,
              placeholder
            )
          );
        }

        return this.state.isError ? placeholder : this.createImage(customProps, imageClasses);
      }

      return this.createImage(customProps, imageClasses);
    }
  }]);

  return Image;
}(_react2.default.Component);

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

exports.default = Image;
exports.ImageVariant = ImageVariant;