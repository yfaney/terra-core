'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('terra-card/lib/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardPaddingHR = function CardPaddingHR() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Card2.default,
      null,
      _react2.default.createElement(
        _Card2.default.Body,
        null,
        'Hello World Above The Line!!'
      ),
      _react2.default.createElement('hr', { style: {
          border: '0 none', borderTop: '1px solid #c8cacb', boxSizing: 'border-box', height: '1px', margin: '0'
        }
      }),
      _react2.default.createElement(
        _Card2.default.Body,
        null,
        'Hello World Below The Line!!'
      )
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = CardPaddingHR;