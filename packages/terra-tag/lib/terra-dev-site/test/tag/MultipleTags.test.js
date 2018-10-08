'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconTile = require('terra-icon/lib/icon/IconTile');

var _IconTile2 = _interopRequireDefault(_IconTile);

var _Tag = require('../../../Tag');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icon = _react2.default.createElement(_IconTile2.default, null); /* eslint-disable no-alert */

var text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ';

var IconTag = function IconTag() {
  return _react2.default.createElement(_Tag2.default, { icon: icon, text: 'Icon Tag', id: 'iconTag' });
};
var LongTextIconTag = function LongTextIconTag() {
  return _react2.default.createElement(_Tag2.default, { icon: icon, text: text, id: 'longTextIcon', onClick: function onClick() {
      return window.alert('Tag has been clicked!');
    } });
};
var DefaultTag = function DefaultTag() {
  return _react2.default.createElement(_Tag2.default, { id: 'default', text: 'Default Tag' });
};
var OnClickTag = function OnClickTag() {
  return _react2.default.createElement(_Tag2.default, { id: 'on-click', text: 'Clickable Tag', onClick: function onClick() {
      return window.alert('Tag has been clicked!');
    } });
};

var MultipleTags = function MultipleTags() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(IconTag, null),
    _react2.default.createElement(DefaultTag, null),
    _react2.default.createElement(OnClickTag, null),
    _react2.default.createElement(LongTextIconTag, null)
  );
};

exports.default = MultipleTags;