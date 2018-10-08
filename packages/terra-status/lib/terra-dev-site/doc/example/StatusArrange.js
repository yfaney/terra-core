'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _Status = require('terra-status/lib/Status');

var _Status2 = _interopRequireDefault(_Status);

var _x = require('terra-status/lib/terra-dev-site/doc/example/150x150.jpg');

var _x2 = _interopRequireDefault(_x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
var image = _react2.default.createElement('img', { style: { display: 'block' }, height: '150', width: '150', src: _x2.default, alt: 'placeholder' });
var simpleText = _react2.default.createElement(
  'div',
  { style: { padding: '5px' } },
  'Sample text'
);

var StatusArrange = function StatusArrange() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Status2.default,
      { color: '#ff0000' },
      _react2.default.createElement(_terraArrange2.default, { fitStart: image, fill: simpleText, alignFill: 'center' })
    )
  );
};

exports.default = StatusArrange;