'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconCaretUp = require('terra-icon/lib/icon/IconCaretUp');

var _IconCaretUp2 = _interopRequireDefault(_IconCaretUp);

var _IconCaretDown = require('terra-icon/lib/icon/IconCaretDown');

var _IconCaretDown2 = _interopRequireDefault(_IconCaretDown);

var _ButtonGroup = require('terra-button-group/lib/ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconCaretUp = _react2.default.createElement(_IconCaretUp2.default, null);
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

var iconCaretDown = _react2.default.createElement(_IconCaretDown2.default, null);

var ButtonGroupWithIcons = function ButtonGroupWithIcons() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _ButtonGroup2.default,
        null,
        _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Up', key: 'upButton' }),
        _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Down', key: 'downButton' })
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _ButtonGroup2.default,
        null,
        _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Up', icon: iconCaretUp, key: 'upIcon' }),
        _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Down', icon: iconCaretDown, key: 'downIcon' })
      )
    )
  );
};

exports.default = ButtonGroupWithIcons;