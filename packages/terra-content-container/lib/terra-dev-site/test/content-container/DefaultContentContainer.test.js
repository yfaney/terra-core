'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContentContainer = require('../../../ContentContainer');

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header = _react2.default.createElement(
  'header',
  { style: { height: '100%', backgroundColor: '#f64747' } },
  'header'
);
var footer = _react2.default.createElement(
  'div',
  { style: { height: '100%', backgroundColor: '#98fb98' } },
  'content'
);
var content = _react2.default.createElement(
  'footer',
  { style: { height: '100%', backgroundColor: '#00bfff' } },
  'footer'
);

var container = function container() {
  return _react2.default.createElement(
    'div',
    { style: { height: '200px' } },
    _react2.default.createElement(
      _ContentContainer2.default,
      { id: 'content-container', header: header, footer: footer },
      content
    )
  );
};

exports.default = container;