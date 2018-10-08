'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _xfc = require('xfc');

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('../../../../package.json');

var _EmbeddedContentConsumer = require('!raw-loader!../../../../src/EmbeddedContentConsumer.jsx');

var _EmbeddedContentConsumer2 = _interopRequireDefault(_EmbeddedContentConsumer);

var _BasicConsumer = require('../example/BasicConsumer');

var _BasicConsumer2 = _interopRequireDefault(_BasicConsumer);

var _BasicConsumer3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/BasicConsumer');

var _BasicConsumer4 = _interopRequireDefault(_BasicConsumer3);

var _CustomEventConsumer = require('../example/CustomEventConsumer');

var _CustomEventConsumer2 = _interopRequireDefault(_CustomEventConsumer);

var _CustomEventConsumer3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CustomEventConsumer');

var _CustomEventConsumer4 = _interopRequireDefault(_CustomEventConsumer3);

var _CustomEventsConsumer = require('../example/CustomEventsConsumer');

var _CustomEventsConsumer2 = _interopRequireDefault(_CustomEventsConsumer);

var _CustomEventsConsumer3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CustomEventsConsumer');

var _CustomEventsConsumer4 = _interopRequireDefault(_CustomEventsConsumer3);

var _DataStatusConsumer = require('../example/DataStatusConsumer');

var _DataStatusConsumer2 = _interopRequireDefault(_DataStatusConsumer);

var _DataStatusConsumer3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DataStatusConsumer');

var _DataStatusConsumer4 = _interopRequireDefault(_DataStatusConsumer3);

var _FillConsumer = require('../example/FillConsumer');

var _FillConsumer2 = _interopRequireDefault(_FillConsumer);

var _FillConsumer3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/FillConsumer');

var _FillConsumer4 = _interopRequireDefault(_FillConsumer3);

var _OnReadyConsumer = require('../example/OnReadyConsumer');

var _OnReadyConsumer2 = _interopRequireDefault(_OnReadyConsumer);

var _OnReadyConsumer3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/OnReadyConsumer');

var _OnReadyConsumer4 = _interopRequireDefault(_OnReadyConsumer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example files
_xfc.Consumer.init();

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source


var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Basic Embedded Content',
      example: _react2.default.createElement(_BasicConsumer2.default, null),
      source: _BasicConsumer4.default
    }, {
      title: 'Filled Embedded Content',
      example: _react2.default.createElement(_FillConsumer2.default, null),
      source: _FillConsumer4.default
    }, {
      title: 'Custom Event Embedded Content',
      example: _react2.default.createElement(_CustomEventConsumer2.default, null),
      source: _CustomEventConsumer4.default
    }, {
      title: 'Custom Events Embedded Content',
      example: _react2.default.createElement(_CustomEventsConsumer2.default, null),
      source: _CustomEventsConsumer4.default
    }, {
      title: 'Data Status Embedded Content',
      example: _react2.default.createElement(_DataStatusConsumer2.default, null),
      source: _DataStatusConsumer4.default
    }, {
      title: 'On Ready Embedded Content',
      example: _react2.default.createElement(_OnReadyConsumer2.default, null),
      source: _OnReadyConsumer4.default
    }],
    propsTables: [{
      componentName: 'Embedded Content Consumer',
      componentSrc: _EmbeddedContentConsumer2.default
    }]
  });
};

exports.default = DocPage;