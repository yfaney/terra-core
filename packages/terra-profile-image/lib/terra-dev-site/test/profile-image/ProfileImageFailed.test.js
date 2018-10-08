'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProfileImage = require('../../../ProfileImage');

var _ProfileImage2 = _interopRequireDefault(_ProfileImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileImageFailed = function ProfileImageFailed() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Failed Profile Image'
    ),
    _react2.default.createElement(_ProfileImage2.default, { src: 'invalid.jpg', alt: 'could not load profile image', width: '75', height: '75' })
  );
};

exports.default = ProfileImageFailed;