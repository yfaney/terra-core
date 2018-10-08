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

var HeadingSizes = function HeadingSizes() {
  return _react2.default.createElement(
    'div',
    null,
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
          { level: 3, size: 'huge' },
          'Huge',
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
        'h3'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Heading2.default,
          { level: 3, size: 'large' },
          'Large',
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
          { level: 3, size: 'medium' },
          'Medium',
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
        'h3'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Heading2.default,
          { level: 3, size: 'small' },
          'Small',
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
        'h3'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Heading2.default,
          { level: 3, size: 'tiny' },
          'Tiny',
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
        'h3'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Heading2.default,
          { level: 3, size: 'mini' },
          'Mini',
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
exports.default = HeadingSizes;