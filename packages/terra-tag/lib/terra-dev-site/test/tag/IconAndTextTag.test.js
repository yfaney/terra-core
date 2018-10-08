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

var icon = _react2.default.createElement(_IconTile2.default, null);

var IconTag = function IconTag() {
  return _react2.default.createElement(_Tag2.default, { icon: icon, text: 'Icon Tag', id: 'iconTag' });
};

exports.default = IconTag;