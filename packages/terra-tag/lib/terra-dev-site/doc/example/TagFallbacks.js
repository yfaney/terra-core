'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconTag = require('terra-icon/lib/icon/IconTag');

var _IconTag2 = _interopRequireDefault(_IconTag);

var _terraAlert = require('terra-alert');

var _terraAlert2 = _interopRequireDefault(_terraAlert);

var _Tag = require('terra-tag/lib/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alertTitle = 'Not Reccomended Usage.';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

var alertText = 'These styles are provided for when this compoment is missing recomended elements for best practice use.';

var TagFallbacks = function TagFallbacks() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _terraAlert2.default,
      { type: _terraAlert2.default.Opts.Types.INFO, title: alertTitle },
      alertText
    ),
    _react2.default.createElement(
      'h3',
      { id: 'fallbacks' },
      'Tag with no onClick or href'
    ),
    _react2.default.createElement(_Tag2.default, { text: 'No OnClick/HREF Tag' }),
    _react2.default.createElement(_Tag2.default, { icon: _react2.default.createElement(_IconTag2.default, null), text: 'Icon & Text - No OnClick/HREF Tag' })
  );
};

exports.default = TagFallbacks;