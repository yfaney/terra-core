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

_xfc.Consumer.init();

var createListItem = function createListItem(itemName) {
  var listItem = document.createElement('li');
  listItem.setAttribute('id', itemName);
  listItem.appendChild(document.createTextNode(itemName));

  return listItem;
};

var appendLifeCycleStatus = function appendLifeCycleStatus(itemName) {
  var frame = document.getElementsByTagName('iframe')[0];
  var statusList = frame.contentWindow.document.getElementById('DataStatus-LifeCycleStatuses');
  statusList.appendChild(createListItem(itemName));
};

var options = { secret: 'OAuth Secret' };
var lifeCycleStatuses = [];
var onMount = function onMount() {
  lifeCycleStatuses.push('Mounted');
};
var onLaunch = function onLaunch() {
  lifeCycleStatuses.push('Launched');
};
var onAuthorize = function onAuthorize() {
  lifeCycleStatuses.push('Authorized');
  lifeCycleStatuses.forEach(function (status) {
    appendLifeCycleStatus(status);
  });
};

var DataStatusConsumer = function DataStatusConsumer() {
  return _react2.default.createElement(_EmbeddedContentConsumer2.default, {
    src: '#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider',
    onMount: onMount,
    onLaunch: onLaunch,
    onAuthorize: onAuthorize,
    options: options
  });
};

exports.default = DataStatusConsumer;