'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('terra-heading/lib/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingVariations = function HeadingVariations() {
      return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                  _Heading2.default,
                  { level: 3, color: '#304FFE', isItalic: true },
                  'H3 heading with color set to',
                  _react2.default.createElement(
                        'code',
                        null,
                        'rgb(46,125,50)'
                  ),
                  ' ',
                  'and',
                  _react2.default.createElement(
                        'code',
                        null,
                        'isItalic'
                  )
            ),
            _react2.default.createElement(
                  _Heading2.default,
                  { level: 3, size: 'huge', weight: 200 },
                  'H3 heading with size set to',
                  _react2.default.createElement(
                        'code',
                        null,
                        'huge'
                  ),
                  ' ',
                  'and weight set to',
                  _react2.default.createElement(
                        'code',
                        null,
                        '200'
                  )
            )
      );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = HeadingVariations;