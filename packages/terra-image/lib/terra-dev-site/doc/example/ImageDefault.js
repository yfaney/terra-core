'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('terra-image/lib/Image');

var _Image2 = _interopRequireDefault(_Image);

var _x = require('../../assets/150x150.jpg');

var _x2 = _interopRequireDefault(_x);

var _x3 = require('../../assets/1000x200.png');

var _x4 = _interopRequireDefault(_x3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageDefault = function ImageDefault() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Default'
    ),
    _react2.default.createElement(_Image2.default, { src: _x2.default, alt: 'default image' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Circle'
    ),
    _react2.default.createElement(_Image2.default, { src: _x2.default, alt: 'circle image', variant: 'circle' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Rounded'
    ),
    _react2.default.createElement(_Image2.default, { src: _x2.default, alt: 'rounded image', variant: 'rounded' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Thumbnail'
    ),
    _react2.default.createElement(_Image2.default, { src: _x2.default, alt: 'thumbnail image', variant: 'thumbnail' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Fluid'
    ),
    _react2.default.createElement(_Image2.default, { src: _x4.default, alt: 'fluid image', isFluid: true }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Placeholder'
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Invalid src prop (placeholder will show)'
    ),
    _react2.default.createElement(_Image2.default, { src: '/mock/failure/route', placeholder: _react2.default.createElement(_Image2.default, { src: _x4.default }), alt: 'placeholder image' }),
    _react2.default.createElement(
      'h3',
      null,
      'Valid src prop (src will show)'
    ),
    _react2.default.createElement(_Image2.default, { src: _x2.default, placeholder: _react2.default.createElement(_Image2.default, { src: _x4.default }), alt: 'src image' })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = ImageDefault;