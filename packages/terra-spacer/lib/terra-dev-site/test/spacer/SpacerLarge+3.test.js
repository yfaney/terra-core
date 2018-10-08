'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./SpacerTest.module.scss');

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
      'Background color added for context. The light orange background shows margin, the green background shows padding.'
    ),
    _react2.default.createElement(
      'div',
      null,
      'Margin with value large+3 applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerMarginLarge3', className: 'spacer', marginTop: 'large+3', marginBottom: 'large+3', marginLeft: 'large+3', marginRight: 'large+3' },
        _react2.default.createElement(
          'div',
          { style: { background: 'rgb(141, 182, 193)' } },
          'Test component'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      'Padding with value large+3 applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerPaddingLarge3', className: 'spacer', paddingTop: 'large+3', paddingBottom: 'large+3', paddingLeft: 'large+3', paddingRight: 'large+3' },
        _react2.default.createElement(
          'div',
          { style: { background: 'rgb(141, 182, 193)' } },
          'Test component'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      'Margin and Padding with value large+3 applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerMarginPaddingLarge3', className: 'spacer', marginTop: 'large+3', marginBottom: 'large+3', marginLeft: 'large+3', marginRight: 'large+3', paddingTop: 'large+3', paddingBottom: 'large+3', paddingLeft: 'large+3', paddingRight: 'large+3' },
        _react2.default.createElement(
          'div',
          { style: { background: 'rgb(141, 182, 193)' } },
          'Test component'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      'Margin Padding with value large+3 and isInlineBlock prop applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerMarginPaddingLarge3InlineBlock', className: 'spacer', marginTop: 'large+3', marginBottom: 'large+3', marginLeft: 'large+3', marginRight: 'large+3', paddingTop: 'large+3', paddingBottom: 'large+3', paddingLeft: 'large+3', paddingRight: 'large+3', isInlineBlock: true },
        _react2.default.createElement(
          'div',
          { style: { background: 'rgb(141, 182, 193)' } },
          'Test component'
        )
      )
    )
  );
};