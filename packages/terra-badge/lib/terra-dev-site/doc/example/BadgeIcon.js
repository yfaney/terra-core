'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBookmark = require('terra-icon/lib/icon/IconBookmark');

var _IconBookmark2 = _interopRequireDefault(_IconBookmark);

var _Badge = require('terra-badge/lib/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = _react2.default.createElement(_IconBookmark2.default, null);
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var BadgeIcon = function BadgeIcon() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Badge2.default, { icon: Icon, text: 'icon' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { icon: Icon, text: 'icon', isReversed: true }),
    ' ',
    _react2.default.createElement(_Badge2.default, { icon: Icon })
  );
};

exports.default = BadgeIcon;