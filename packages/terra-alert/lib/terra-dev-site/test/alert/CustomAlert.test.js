'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconHelp = require('terra-icon/lib/icon/IconHelp');

var _IconHelp2 = _interopRequireDefault(_IconHelp);

var _Alert = require('../../../Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Alert2.default,
      { id: 'custom1', type: _Alert2.default.Opts.Types.CUSTOM },
      'Custom Alert with no icon, title or custom color'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'custom2', type: _Alert2.default.Opts.Types.CUSTOM, title: 'Custom_Alert:' },
      'Custom Alert with title but no icon or custom color'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'custom3', type: _Alert2.default.Opts.Types.CUSTOM, customIcon: _react2.default.createElement(_IconHelp2.default, null) },
      'Custom Alert with icon but no title or custom color'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'custom4', type: _Alert2.default.Opts.Types.CUSTOM, customStatusColor: 'orange' },
      'Custom Alert with custom color but no title or icon'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'custom5', type: _Alert2.default.Opts.Types.CUSTOM, title: 'Custom_Alert:', customStatusColor: 'orange' },
      'Custom Alert with custom color and title but no icon'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'custom6', type: _Alert2.default.Opts.Types.CUSTOM, title: 'Custom_Alert:', customIcon: _react2.default.createElement(_IconHelp2.default, null) },
      'Custom Alert with title and icon but no custom color'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'custom7', type: _Alert2.default.Opts.Types.CUSTOM, customStatusColor: 'orange', customIcon: _react2.default.createElement(_IconHelp2.default, null) },
      'Custom Alert with custom color and icon but no title'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Alert2.default,
      { id: 'custom8', type: _Alert2.default.Opts.Types.CUSTOM, title: 'Custom_Alert:', customStatusColor: 'orange', customIcon: _react2.default.createElement(_IconHelp2.default, null) },
      'Custom Alert with title, custom color and icon'
    )
  );
};