'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.longWordText = exports.IconWrapper = exports.ArrangeWrapper = exports.longText = exports.simpleText = exports.image = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Block style is required since images are inline by default. This could be resolved by someones normalize.css
var image = _react2.default.createElement('img', { style: { display: 'block' }, height: '75', width: '75', src: 'https://github.com/cerner/terra-core/raw/master/terra.png', alt: 'a happy panda' });
var ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
var longWord = 'Thisisareallyreallylongwordthathasnospacesthatwillneedtobebrokeninordertohavethetextwrapandnotoverlowintothenextelement';
var simpleText = _react2.default.createElement(
  'div',
  null,
  ipsum
);
var longText = _react2.default.createElement(
  'div',
  null,
  ipsum,
  ' ',
  ipsum,
  ' ',
  ipsum,
  ' ',
  ipsum
);
var longWordText = _react2.default.createElement(
  'div',
  null,
  longWord
);

var ArrangeWrapper = function ArrangeWrapper(props) {
  return _react2.default.createElement(
    'div',
    { style: {
        width: '100%', border: '1px solid black', marginBottom: '10px', backgroundColor: '#dedede'
      }
    },
    props.children
  );
};

ArrangeWrapper.propTypes = {
  children: _propTypes2.default.element
};

var IconWrapper = function IconWrapper() {
  return _react2.default.createElement(
    'div',
    { style: { backgroundColor: '#ff5722' } },
    _react2.default.createElement(
      'svg',
      { className: 'terra-Icon', height: '4em', width: '4em', viewBox: '0 0 48 48' },
      _react2.default.createElement('path', { d: 'M24 0h-.1C10.7 0 0 10.8 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24S37.3 0 24 0zm-4 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z', fill: '#FFF' })
    )
  );
};

exports.image = image;
exports.simpleText = simpleText;
exports.longText = longText;
exports.ArrangeWrapper = ArrangeWrapper;
exports.IconWrapper = IconWrapper;
exports.longWordText = longWordText;