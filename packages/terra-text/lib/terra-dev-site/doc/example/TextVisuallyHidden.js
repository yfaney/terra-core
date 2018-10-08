'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('terra-text/lib/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextVisuallyHidden = function TextVisuallyHidden() {
      return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                  'p',
                  null,
                  'The example below includes a',
                  _react2.default.createElement(
                        'code',
                        null,
                        '<Text />'
                  ),
                  ' ',
                  'component using the',
                  _react2.default.createElement(
                        'code',
                        null,
                        'isVisuallyHidden'
                  ),
                  ' ',
                  'prop.'
            ),
            _react2.default.createElement(
                  _Text2.default,
                  { isVisuallyHidden: true },
                  'This text is not visible, however it is accessible to screen readers.'
            )
      );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = TextVisuallyHidden;