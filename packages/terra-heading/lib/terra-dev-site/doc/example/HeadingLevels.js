'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraText = require('terra-text');

var _terraText2 = _interopRequireDefault(_terraText);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _Heading = require('terra-heading/lib/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingLevels = function HeadingLevels() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraArrange2.default, {
      align: 'center',
      fitStart: _react2.default.createElement(
        _terraText2.default,
        { color: '#333', fontSize: 20 },
        'h1'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Heading2.default,
          { level: 1 },
          'Level 1 Heading',
          _react2.default.createElement(
            _terraText2.default,
            { color: '#767676' },
            '32px (2.286rem)'
          )
        )
      )
    }),
    _react2.default.createElement(_terraArrange2.default, {
      align: 'center',
      fitStart: _react2.default.createElement(
        _terraText2.default,
        { color: '#333', fontSize: 20 },
        'h2'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Heading2.default,
          { level: 2 },
          'Level 2 Heading',
          _react2.default.createElement(
            _terraText2.default,
            { color: '#767676' },
            '24px (1.714rem)'
          )
        )
      )
    }),
    _react2.default.createElement(_terraArrange2.default, {
      align: 'center',
      fitStart: _react2.default.createElement(
        _terraText2.default,
        { color: '#333', fontSize: 20 },
        'h3'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Heading2.default,
          { level: 3 },
          'Level 3 Heading',
          _react2.default.createElement(
            _terraText2.default,
            { color: '#767676' },
            '20px (1.429rem)'
          )
        )
      )
    }),
    _react2.default.createElement(_terraArrange2.default, {
      align: 'center',
      fitStart: _react2.default.createElement(
        _terraText2.default,
        { color: '#333', fontSize: 20 },
        'h4'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Heading2.default,
          { level: 4 },
          'Level 4 Heading',
          _react2.default.createElement(
            _terraText2.default,
            { color: '#767676' },
            '18px (1.286rem)'
          )
        )
      )
    }),
    _react2.default.createElement(_terraArrange2.default, {
      align: 'center',
      fitStart: _react2.default.createElement(
        _terraText2.default,
        { color: '#333', fontSize: 20 },
        'h5'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Heading2.default,
          { level: 5 },
          'Level 5 Heading',
          _react2.default.createElement(
            _terraText2.default,
            { color: '#767676' },
            '16px (1.143rem)'
          )
        )
      )
    }),
    _react2.default.createElement(_terraArrange2.default, {
      align: 'center',
      fitStart: _react2.default.createElement(
        _terraText2.default,
        { color: '#333', fontSize: 20 },
        'h6'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Heading2.default,
          { level: 6 },
          'Level 6 Heading',
          _react2.default.createElement(
            _terraText2.default,
            { color: '#767676' },
            '14px (1rem)'
          )
        )
      )
    })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = HeadingLevels;