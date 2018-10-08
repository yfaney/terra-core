'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('terra-text/lib/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextVariations = function TextVariations() {
      return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                  _Text2.default,
                  { fontSize: 18, color: '#304FFE', isItalic: true },
                  'Text with color set to',
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
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                  _Text2.default,
                  { fontSize: 24, weight: 200 },
                  'Text with font-size set to',
                  _react2.default.createElement(
                        'code',
                        null,
                        '24'
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
exports.default = TextVariations;