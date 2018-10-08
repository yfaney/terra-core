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
      'Margin and Padding with value large+4 applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerMarginPaddingLarge4', className: 'spacer', marginTop: 'large+4', marginBottom: 'large+4', marginLeft: 'large+4', marginRight: 'large+4', paddingTop: 'large+4', paddingBottom: 'large+4', paddingLeft: 'large+4', paddingRight: 'large+4' },
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
      'Margin Padding with value large+4 and isInlineBlock prop applied'
    ),
    _react2.default.createElement(
      'div',
      { className: 'spacing-demo spacer-demo-margin' },
      _react2.default.createElement(
        _Spacer2.default,
        { id: 'spacerMarginPaddingLarge4InlineBlock', className: 'spacer', marginTop: 'large+4', marginBottom: 'large+4', marginLeft: 'large+4', marginRight: 'large+4', paddingTop: 'large+4', paddingBottom: 'large+4', paddingLeft: 'large+4', paddingRight: 'large+4', isInlineBlock: true },
        _react2.default.createElement(
          'div',
          { style: { background: 'rgb(141, 182, 193)' } },
          'Test component'
        )
      )
    )
  );
};