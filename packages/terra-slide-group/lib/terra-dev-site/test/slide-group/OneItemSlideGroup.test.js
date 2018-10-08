'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SlideGroup = require('../../../SlideGroup');

var _SlideGroup2 = _interopRequireDefault(_SlideGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_SlideGroup2.default, {
    style: { height: '200px' },
    items: [_react2.default.createElement(
      'div',
      { className: 'slide1', key: '1' },
      'Slide 1'
    )],
    id: 'SlideGroup'
  });
};