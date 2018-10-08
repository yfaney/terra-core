'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarVariants = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _AvatarModule = require('./Avatar.module.scss');

var _AvatarModule2 = _interopRequireDefault(_AvatarModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var cx = _bind2.default.bind(_AvatarModule2.default);

// Changes the placeholder image for while the image prop, if provided, is loading
var AvatarVariants = {
  FACILITY: 'facility',
  USER: 'user'
};

var propTypes = {
  /**
   * The text content that specifies the alternative text for the image.
   */
  alt: _propTypes2.default.string,
  /**
   * The text content of the aria-label for accessibility.
   */
  ariaLabel: _propTypes2.default.string,
  /**
   * The image to display.
   */
  image: _propTypes2.default.string,
  /**
   * Two or three letters to display.
   */
  initials: _propTypes2.default.string,
  /**
   * The avatar variant. One of `AvatarVariants.FACILITY`, `AvatarVariants.USER`.
   */
  variant: _propTypes2.default.oneOf([].concat(_toConsumableArray(Object.values(AvatarVariants))))
};

var defaultProps = {
  alt: undefined,
  ariaLabel: undefined,
  image: undefined,
  initials: undefined,
  variant: AvatarVariants.USER
};

var Avatar = function (_React$Component) {
  _inherits(Avatar, _React$Component);

  _createClass(Avatar, null, [{
    key: 'generateImagePlaceholder',
    value: function generateImagePlaceholder(variant) {
      var avatarIconClassNames = cx(['avatar-icon', variant]);

      return _react2.default.createElement('span', { className: avatarIconClassNames });
    }
  }, {
    key: 'generateImage',
    value: function generateImage(image, variant, alt) {
      var icon = Avatar.generateImagePlaceholder(variant);

      return _react2.default.createElement(_terraImage2.default, { className: cx('avatar-image'), src: image, placeholder: icon, alt: alt });
    }
  }]);

  function Avatar(props) {
    _classCallCheck(this, Avatar);

    // If image has been provided we need to generate the image to display and store it in the state
    var _this = _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, props));

    if (props.image) {
      var alt = props.alt,
          image = props.image,
          variant = props.variant;


      var imageComponent = Avatar.generateImage(image, variant, alt);
      _this.state = { imageComponent: imageComponent };
    }

    // Checks to run when not in production
    if (process.env.NODE_ENV !== 'production') {
      if (props.image && props.initials) {
        // eslint-disable-next-line
        console.warn('Only one of the props: [image, initials] should be supplied.');
      }
    }
    return _this;
  }

  _createClass(Avatar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      // If we have an image to display (they take precedence) and one of its attributes have changed
      if (newProps.image && (newProps.image !== this.props.image || newProps.alt !== this.props.alt || newProps.variant !== this.props.variant)) {
        var alt = newProps.alt,
            image = newProps.image,
            variant = newProps.variant;


        var imageComponent = Avatar.generateImage(image, variant, alt);
        this.setState({ imageComponent: imageComponent });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          alt = _props.alt,
          ariaLabel = _props.ariaLabel,
          initials = _props.initials,
          variant = _props.variant,
          image = _props.image,
          customProps = _objectWithoutProperties(_props, ['alt', 'ariaLabel', 'initials', 'variant', 'image']);

      var attributes = _extends({}, customProps);

      var avatarClassNames = cx(['avatar', attributes.className]);

      var avatarContent = void 0;
      if (image) {
        avatarContent = this.state.imageComponent;
      } else if (initials && (initials.length === 2 || initials.length === 3)) {
        var avatarTextClassNames = cx([{ 'avatar-text-small': initials && initials.length === 3 }, { 'avatar-text-large': initials && initials.length === 2 }]);

        avatarContent = _react2.default.createElement(
          'span',
          { className: avatarTextClassNames },
          initials.toUpperCase()
        );
      } else {
        avatarContent = Avatar.generateImagePlaceholder(variant);
      }

      return _react2.default.createElement(
        'div',
        _extends({}, attributes, { 'aria-label': ariaLabel, className: avatarClassNames }),
        avatarContent
      );
    }
  }]);

  return Avatar;
}(_react2.default.Component);

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

exports.default = Avatar;
exports.AvatarVariants = AvatarVariants;