'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../../scss/scoped-theme.scss');

require('./LegacyThemeNavigationSideMenu.module.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationSideMenuThemeExamples = function NavigationSideMenuThemeExamples() {
  return _react2.default.createElement(
    'div',
    { className: 'terra-legacy-theme legacy-theme-test' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'legacy-nav-menu-list-padding-top', style: { border: '1px dashed black' } },
        _react2.default.createElement('div', { style: { border: '1px dashed black', height: '100%' } })
      ),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-list-padding-top: 0'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-list-background-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-list-background-color: #434a4d'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-item-border-bottom' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-list-item-border-bottom: 1px solid #000'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-item-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-item-color: #dedfe0'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-item-chevron-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-item-chevron-color: #dedfe0'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-item-hover-background-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-item-hover-background-color: #434a4d'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-item-hover-color', style: { border: '1px dashed black' } }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-item-hover-color: #fff'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-item-selected-border-left' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-item-selected-border-left: 0.5rem solid #78c346'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'legacy-nav-menu-item-selected-font-weight', style: { padding: '5px', border: '1px dashed black' } },
        'Example'
      ),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-item-selected-font-weight: 400 '
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-item-selected-background-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-item-selected-background-color: #1c1f21'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-item-selected-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-item-selected-color: #78c346'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-item-selected-hover-color', style: { border: '1px dashed black' } }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-item-selected-hover-color: #fff'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-action-header-background-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-action-header-background-color: #434a4d'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-action-header-border-bottom-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-action-header-border-bottom-color: #000'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'legacy-nav-menu-action-header-color' }),
      _react2.default.createElement(
        'p',
        null,
        '--terra-navigation-side-menu-action-header-color: #dedfe0'
      )
    )
  );
};

exports.default = NavigationSideMenuThemeExamples;