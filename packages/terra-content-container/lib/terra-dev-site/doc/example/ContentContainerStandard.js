'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraHeading = require('terra-heading');

var _terraHeading2 = _interopRequireDefault(_terraHeading);

var _ContentContainer = require('terra-content-container/lib/ContentContainer');

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var display1 = _react2.default.createElement(
  'p',
  { key: '1' },
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.'
);
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

var display2 = _react2.default.createElement(
  'p',
  { key: '2' },
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.'
);
var display3 = _react2.default.createElement(
  'p',
  { key: '3' },
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.'
);

var contentheader = _react2.default.createElement(
  _terraHeading2.default,
  { level: 3 },
  'Display Header'
);
var contentfooter = _react2.default.createElement(
  _terraHeading2.default,
  { level: 3 },
  'Display Footer'
);

var container = function container() {
  return _react2.default.createElement(
    'div',
    { style: { border: '1px solid' } },
    _react2.default.createElement(
      _ContentContainer2.default,
      { header: contentheader, footer: contentfooter },
      _react2.default.createElement(
        'div',
        { key: '1' },
        display1
      ),
      _react2.default.createElement(
        'div',
        { key: '2' },
        display2
      ),
      _react2.default.createElement(
        'div',
        { key: '3' },
        display3
      )
    )
  );
};

exports.default = container;