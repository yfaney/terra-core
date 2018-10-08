'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResponsiveElement = require('terra-responsive-element/lib/ResponsiveElement');

var _ResponsiveElement2 = _interopRequireDefault(_ResponsiveElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
var ResponsiveTableExample = function ResponsiveTableExample() {
  var mobileView = _react2.default.createElement(
    'ul',
    null,
    _react2.default.createElement(
      'li',
      null,
      'John Smith, 22'
    ),
    _react2.default.createElement(
      'li',
      null,
      'David Johnson, 25'
    ),
    _react2.default.createElement(
      'li',
      null,
      'Leeroy Jenkins, 31'
    )
  );

  var desktopView = _react2.default.createElement(
    'table',
    { style: { width: '100%', textAlign: 'left' } },
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'First name'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Last name'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Age'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'John'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Smith'
        ),
        _react2.default.createElement(
          'td',
          null,
          '22'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'David'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Johnson'
        ),
        _react2.default.createElement(
          'td',
          null,
          '25'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Leeroy'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Jenkins'
        ),
        _react2.default.createElement(
          'td',
          null,
          '31'
        )
      )
    )
  );

  return _react2.default.createElement(_ResponsiveElement2.default, { defaultElement: mobileView, small: desktopView });
};

exports.default = ResponsiveTableExample;