'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProfileImage = require('terra-profile-image/lib/ProfileImage');

var _ProfileImage2 = _interopRequireDefault(_ProfileImage);

var _x = require('terra-profile-image/lib/terra-dev-site/doc/example/150x150.jpg');

var _x2 = _interopRequireDefault(_x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
var ProfileImageDefault = function ProfileImageDefault() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Successful Profile Image'
    ),
    _react2.default.createElement(_ProfileImage2.default, { src: _x2.default, width: '75', height: '75' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Failed Profile Image'
    ),
    _react2.default.createElement(_ProfileImage2.default, { src: 'invalid.jpg', width: '75', height: '75' })
  );
};

exports.default = ProfileImageDefault;