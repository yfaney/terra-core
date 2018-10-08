'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('../../../Image');

var _Image2 = _interopRequireDefault(_Image);

var _x = require('../../assets/150x150.jpg');

var _x2 = _interopRequireDefault(_x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imagecontainerStyle1 = {
  backgroundColor: '#ffe4c4',
  width: 200,
  height: 200
};
var imagecontainerStyle2 = {
  backgroundColor: '#ffe4c4',
  width: 100,
  height: 200
};
var imagecontainerStyle3 = {
  backgroundColor: '#ffe4c4',
  width: 200,
  height: 100,
  marginBottom: 100
};

var ImageNonFluid = function ImageNonFluid() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Non Fluid Examples'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Image width and height are smaller than container.'
    ),
    _react2.default.createElement(
      'div',
      { id: 'smaller', style: imagecontainerStyle1 },
      _react2.default.createElement(_Image2.default, { src: _x2.default, alt: 'rounded', variant: 'rounded' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Image width is larger than the container. Image height is smaller than the container.'
    ),
    _react2.default.createElement(
      'div',
      { id: 'height-smaller', style: imagecontainerStyle2 },
      _react2.default.createElement(_Image2.default, { src: _x2.default, alt: 'rounded', variant: 'rounded' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Image width is smaller than the container. Image height is larger than the container.'
    ),
    _react2.default.createElement(
      'div',
      { id: 'width-smaller', style: imagecontainerStyle3 },
      _react2.default.createElement(_Image2.default, { src: _x2.default, alt: 'rounded', variant: 'rounded' })
    )
  );
};

exports.default = ImageNonFluid;