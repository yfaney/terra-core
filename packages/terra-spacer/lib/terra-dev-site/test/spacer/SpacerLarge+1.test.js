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
      'Margin with value large+1 applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerMarginLarge1', className: 'spacer', marginTop: 'large+1', marginBottom: 'large+1', marginLeft: 'large+1', marginRight: 'large+1' },
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
      'Padding with value large+1 applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerPaddingLarge1', className: 'spacer', paddingTop: 'large+1', paddingBottom: 'large+1', paddingLeft: 'large+1', paddingRight: 'large+1' },
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
      'Margin and Padding with value large+1 applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerMarginPaddingLarge1', className: 'spacer', marginTop: 'large+1', marginBottom: 'large+1', marginLeft: 'large+1', marginRight: 'large+1', paddingTop: 'large+1', paddingBottom: 'large+1', paddingLeft: 'large+1', paddingRight: 'large+1' },
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
      'Margin Padding with value large+1 and isInlineBlock prop applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerMarginPaddingLarge1InlineBlock', className: 'spacer', marginTop: 'large+1', marginBottom: 'large+1', marginLeft: 'large+1', marginRight: 'large+1', paddingTop: 'large+1', paddingBottom: 'large+1', paddingLeft: 'large+1', paddingRight: 'large+1', isInlineBlock: true },
        _react2.default.createElement(
          'div',
          { style: { background: 'rgb(141, 182, 193)' } },
          'Test component'
        )
      )
    )
  );
};