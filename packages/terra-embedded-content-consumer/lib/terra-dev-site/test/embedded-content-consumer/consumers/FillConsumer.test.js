'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xfc = require('xfc');

var _EmbeddedContentConsumer = require('../../../../EmbeddedContentConsumer');

var _EmbeddedContentConsumer2 = _interopRequireDefault(_EmbeddedContentConsumer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_xfc.Consumer.init(); /* eslint-disable import/no-extraneous-dependencies */


var options = { resizeConfig: { fixedHeight: '100%', fixedWidth: '100%' } };

var fillConsumer = function fillConsumer() {
  return _react2.default.createElement(_EmbeddedContentConsumer2.default, {
    src: '#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/providers/fill-provider',
    options: options,
    className: 'embedded-content-fill'
  });
};

exports.default = fillConsumer;