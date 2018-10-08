'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('../../../Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardBody = require('../../../CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _Card2.default,
    null,
    _react2.default.createElement(
      _CardBody2.default,
      { isContentCentered: true },
      'Centered content'
    )
  );
};