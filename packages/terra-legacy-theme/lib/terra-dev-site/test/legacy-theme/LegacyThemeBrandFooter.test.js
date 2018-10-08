'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../../scss/scoped-theme.scss');

require('./LegacyThemeBrandFooter.module.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrandFooterThemeExamples = function BrandFooterThemeExamples() {
  return _react2.default.createElement(
    'div',
    { className: 'terra-legacy-theme legacy-theme-test' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-terra-brand-footer-nav-background-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-brand-footer-nav-background-color: #f4f4f4;'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-terra-brand-footer-nav-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-brand-footer-nav-color: #64696c;'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-terra-brand-footer-nav-header-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-brand-footer-nav-header-color: #64696c;'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-terra-brand-footer-link-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-brand-footer-link-color: #0059a8;'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-terra-brand-footer-link-hover-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-brand-footer-link-hover-color: #001f67;'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-terra-brand-footer-link-active-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-brand-footer-link-active-color: #001f67;'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-terra-brand-footer-link-focus-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-brand-footer-link-focus-color: #0059a8;'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-terra-brand-footer-footer-content-background-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-brand-footer-footer-content-background-color: #0079be;'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-terra-brand-footer-footer-content-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-brand-footer-footer-content-color: #fff;'
      )
    )
  );
};

exports.default = BrandFooterThemeExamples;