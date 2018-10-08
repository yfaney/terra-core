'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('terra-heading/lib/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingVisuallyHidden = function HeadingVisuallyHidden() {
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
                        '<Heading />'
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
                  _Heading2.default,
                  { level: 3, isVisuallyHidden: true },
                  'This text is not visible, however it is accessible to screen readers.'
            )
      );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = HeadingVisuallyHidden;