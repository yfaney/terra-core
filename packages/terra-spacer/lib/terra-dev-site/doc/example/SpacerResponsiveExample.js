'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _Spacer = require('terra-spacer/lib/Spacer');

var _Spacer2 = _interopRequireDefault(_Spacer);

var _x = require('terra-spacer/lib/terra-dev-site/doc/example/assets/150x150.jpg');

var _x2 = _interopRequireDefault(_x);

var _x3 = require('terra-spacer/lib/terra-dev-site/doc/example/assets/1000x200.png');

var _x4 = _interopRequireDefault(_x3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

var SpacerResponsiveExample = function SpacerResponsiveExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraImage2.default, { src: _x2.default, alt: _x4.default }),
    _react2.default.createElement(
      _Spacer2.default,
      { marginTop: 'small-1', bps: { 768: { marginTop: 'large+4' } } },
      _react2.default.createElement(_terraImage2.default, { src: _x2.default, alt: _x4.default })
    )
  );
};
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
exports.default = SpacerResponsiveExample;