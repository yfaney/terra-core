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

var TagDefault = function TagDefault() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Tag2.default, { text: 'Default OnClick Tag', onClick: function onClick() {
        return window.alert('Tag has been clicked!');
      } }),
    _react2.default.createElement(_Tag2.default, { icon: _react2.default.createElement(_IconTag2.default, null), onClick: function onClick() {
        return window.alert('Tag has been clicked!');
      }, text: 'Icon & Text OnClick Tag' })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = TagDefault;