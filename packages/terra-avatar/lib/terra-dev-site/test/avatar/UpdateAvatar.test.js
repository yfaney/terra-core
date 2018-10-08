'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('../../../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _x = require('../../assets/150x150.jpg');

var _x2 = _interopRequireDefault(_x);

var _x3 = require('../../assets/163x40.png');

var _x4 = _interopRequireDefault(_x3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initials = 'JD';
var image = _x4.default;
var alt = 'placeholder';
var variant = 'user';
var ariaLabel = 'user';
var id = 'image-avatar';

var UpdateAvatar = function (_React$Component) {
  _inherits(UpdateAvatar, _React$Component);

  function UpdateAvatar(props) {
    _classCallCheck(this, UpdateAvatar);

    var _this = _possibleConstructorReturn(this, (UpdateAvatar.__proto__ || Object.getPrototypeOf(UpdateAvatar)).call(this, props));

    _this.altButtonHandle = _this.altButtonHandle.bind(_this);
    _this.imageButtonHandle = _this.imageButtonHandle.bind(_this);
    _this.variantButtonHandle = _this.variantButtonHandle.bind(_this);
    _this.ariaLabelButtonHandle = _this.ariaLabelButtonHandle.bind(_this);
    _this.initialsButtonHandle = _this.initialsButtonHandle.bind(_this);
    _this.idButtonHandle = _this.idButtonHandle.bind(_this);
    _this.imageToggleButtonHandle = _this.imageToggleButtonHandle.bind(_this);
    return _this;
  }

  _createClass(UpdateAvatar, [{
    key: 'altButtonHandle',
    value: function altButtonHandle() {
      if (alt === 'placeholder') {
        alt = 'standin';
      } else {
        alt = 'placeholder';
      }

      this.forceUpdate();
    }
  }, {
    key: 'imageButtonHandle',
    value: function imageButtonHandle() {
      if (image === _x4.default) {
        image = _x2.default;
      } else {
        image = _x4.default;
      }

      this.forceUpdate();
    }
  }, {
    key: 'variantButtonHandle',
    value: function variantButtonHandle() {
      if (variant === 'user') {
        variant = 'facility';
      } else {
        variant = 'user';
      }

      this.forceUpdate();
    }
  }, {
    key: 'ariaLabelButtonHandle',
    value: function ariaLabelButtonHandle() {
      if (ariaLabel === 'user') {
        ariaLabel = 'facility';
      } else {
        ariaLabel = 'user';
      }

      this.forceUpdate();
    }
  }, {
    key: 'initialsButtonHandle',
    value: function initialsButtonHandle() {
      if (initials === 'JD') {
        initials = 'LI';
      } else {
        initials = 'JD';
      }

      this.forceUpdate();
    }
  }, {
    key: 'idButtonHandle',
    value: function idButtonHandle() {
      if (id === 'image-avatar') {
        id = 'avatar-image';
      } else {
        id = 'image-avatar';
      }

      this.forceUpdate();
    }
  }, {
    key: 'imageToggleButtonHandle',
    value: function imageToggleButtonHandle() {
      if (image === null) {
        image = _x2.default;
      } else {
        image = null;
      }

      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Avatar2.default, { id: id, image: image, alt: alt, variant: variant, ariaLabel: ariaLabel, initials: initials }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: this.altButtonHandle, id: 'alt' },
          'Alt Text'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: this.imageButtonHandle, id: 'image' },
          'Image'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: this.variantButtonHandle, id: 'variant' },
          'Variant'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: this.ariaLabelButtonHandle, id: 'aria-label' },
          'AriaLabel'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: this.initialsButtonHandle, id: 'initials' },
          'Initials'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: this.idButtonHandle, id: 'id' },
          'Custom Prop (id)'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'The buttons update one of the Avatar\'s props then force it to reload'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: this.imageToggleButtonHandle, id: 'image-toggle' },
          'Toggle Image'
        )
      );
    }
  }]);

  return UpdateAvatar;
}(_react2.default.Component);

exports.default = UpdateAvatar;