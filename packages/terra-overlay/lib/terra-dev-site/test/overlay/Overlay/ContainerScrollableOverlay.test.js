'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OverlayContainer = require('../../../../OverlayContainer');

var _OverlayContainer2 = _interopRequireDefault(_OverlayContainer);

var _Overlay = require('../../../../Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverlayExample = function OverlayExample() {
  return _react2.default.createElement(
    _OverlayContainer2.default,
    { style: { height: '100px', width: '100%' }, id: 'overlay-container' },
    _react2.default.createElement(
      _Overlay2.default,
      { isOpen: true, isRelativeToContainer: true, isScrollable: true },
      _react2.default.createElement(
        'p',
        null,
        'I'
      ),
      _react2.default.createElement(
        'p',
        null,
        'am'
      ),
      _react2.default.createElement(
        'p',
        null,
        'some'
      ),
      _react2.default.createElement(
        'p',
        null,
        'very'
      ),
      _react2.default.createElement(
        'p',
        null,
        'tall'
      ),
      _react2.default.createElement(
        'p',
        null,
        'content'
      ),
      _react2.default.createElement(
        'p',
        null,
        'in'
      ),
      _react2.default.createElement(
        'p',
        null,
        'the'
      ),
      _react2.default.createElement(
        'p',
        null,
        'overlay'
      ),
      _react2.default.createElement(
        'p',
        null,
        'to'
      ),
      _react2.default.createElement(
        'p',
        null,
        'prove'
      ),
      _react2.default.createElement(
        'p',
        null,
        'that'
      ),
      _react2.default.createElement(
        'p',
        null,
        'isScrollable'
      ),
      _react2.default.createElement(
        'p',
        null,
        'works.'
      )
    )
  );
};

exports.default = OverlayExample;