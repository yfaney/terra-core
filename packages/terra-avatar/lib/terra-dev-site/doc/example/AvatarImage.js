'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('terra-avatar/lib/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _x = require('../../assets/150x150.jpg');

var _x2 = _interopRequireDefault(_x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
var AvatarImage = function AvatarImage() {
  return _react2.default.createElement(_Avatar2.default, { ariaLabel: 'John Doe', image: _x2.default, alt: 'placeholder' });
};

exports.default = AvatarImage;