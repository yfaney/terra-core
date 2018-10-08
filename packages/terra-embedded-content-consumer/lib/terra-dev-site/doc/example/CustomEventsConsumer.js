'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EmbeddedContentConsumer = require('terra-embedded-content-consumer/lib/EmbeddedContentConsumer');

var _EmbeddedContentConsumer2 = _interopRequireDefault(_EmbeddedContentConsumer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventHandlers = [{
  key: 'EventA',
  handler: function handler() {
    document.getElementById('CustomEvents').style.border = 'thick dashed #0000FF';
  }
}, {
  key: 'EventB',
  handler: function handler() {
    document.getElementById('CustomEvents').style.border = 'thick dashed #00FF00';
  }
}];
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var CustomEventsConsumer = function CustomEventsConsumer() {
  return _react2.default.createElement(
    'div',
    { id: 'CustomEvents' },
    _react2.default.createElement(_EmbeddedContentConsumer2.default, {
      src: '#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider',
      eventHandlers: eventHandlers
    })
  );
};

exports.default = CustomEventsConsumer;