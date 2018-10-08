'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Spacer = require('../../../Spacer');

var _Spacer2 = _interopRequireDefault(_Spacer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Background color added for context.'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacer' },
        _react2.default.createElement(
          'div',
          { style: { background: 'rgb(141, 182, 193)' } },
          'Test Component'
        )
      )
    )
  );
};