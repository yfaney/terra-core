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
      'Margin with value medium applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerMarginMedium', className: 'spacer', marginTop: 'medium', marginBottom: 'medium', marginLeft: 'medium', marginRight: 'medium' },
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
      'Padding with value medium applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerPaddingMedium', className: 'spacer', paddingTop: 'medium', paddingBottom: 'medium', paddingLeft: 'medium', paddingRight: 'medium' },
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
      'Margin and Padding with value medium applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerMarginPaddingMedium', className: 'spacer', marginTop: 'medium', marginBottom: 'medium', marginLeft: 'medium', marginRight: 'medium', paddingTop: 'medium', paddingBottom: 'medium', paddingLeft: 'medium', paddingRight: 'medium' },
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
      'Margin Padding with value medium and isInlineBlock prop applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerMarginPaddingMediumInlineBlock', className: 'spacer', marginTop: 'medium', marginBottom: 'medium', marginLeft: 'medium', marginRight: 'medium', paddingTop: 'medium', paddingBottom: 'medium', paddingLeft: 'medium', paddingRight: 'medium', isInlineBlock: true },
        _react2.default.createElement(
          'div',
          { style: { background: 'rgb(141, 182, 193)' } },
          'Test component'
        )
      )
    )
  );
};