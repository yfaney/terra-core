'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconTag = require('terra-icon/lib/icon/IconTag');

var _IconTag2 = _interopRequireDefault(_IconTag);

var _Tag = require('terra-tag/lib/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HrefTag = function HrefTag() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Tag2.default, { href: 'http://google.com', text: 'HREF Tag' }),
    _react2.default.createElement(_Tag2.default, { icon: _react2.default.createElement(_IconTag2.default, null), href: 'http://google.com', text: 'Icon & Text HREF Tag' })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = HrefTag;