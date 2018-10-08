'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _ProfileImageModule = require('./ProfileImage.module.scss');

var _ProfileImageModule2 = _interopRequireDefault(_ProfileImageModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_ProfileImageModule2.default);

/* eslint react/no-unused-prop-types: [0] */
var propTypes = {
  /**
   * The source for the image which will be displayed.
   */
  src: _propTypes2.default.string.isRequired,
  /**
   * The text content that specifies an alternative text for an image.
   */
  alt: _propTypes2.default.string,
  /**
   * Sets the height of the image.
   */
  height: _propTypes2.default.string,
  /**
   * Sets the width of the image.
   */
  width: _propTypes2.default.string,
  /**
   * Function to be executed when the profile image load is successful.
   */
  onLoad: _propTypes2.default.func,
  /**
   * Function to be executed when the profile image load errors.
   */
  onError: _propTypes2.default.func
};

var isOnlyNumbers = function isOnlyNumbers(toTest) {
  return !/\D/.test(toTest);
};

var ProfileImage = function ProfileImage(props) {
  // img tags assume a height attribute of only numbers is in px but CSS does not
  var fixedHeight = isOnlyNumbers(props.height) ? props.height + 'px' : props.height;
  var fixedWidth = isOnlyNumbers(props.width) ? props.width + 'px' : props.width;

  var placeholderImage = _react2.default.createElement('span', {
    className: cx('placeholder-images'),
    title: props.alt,
    style: { height: fixedHeight, width: fixedWidth }
  });
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraImage2.default, _extends({ placeholder: placeholderImage }, props))
  );
};

ProfileImage.propTypes = propTypes;

exports.default = ProfileImage;