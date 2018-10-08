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
    document.getElementById('CustomEvent').style.border = 'thick dashed #0000FF';
  }
}];
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var CustomEventConsumer = function CustomEventConsumer() {
  return _react2.default.createElement(
    'div',
    { id: 'CustomEvent' },
    _react2.default.createElement(_EmbeddedContentConsumer2.default, {
      src: '#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-event-provider',
      eventHandlers: eventHandlers
    })
  );
};

exports.default = CustomEventConsumer;