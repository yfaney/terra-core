'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('../../../../package.json');

var _OverlayContainer = require('!raw-loader!../../../../src/OverlayContainer');

var _OverlayContainer2 = _interopRequireDefault(_OverlayContainer);

var _Overlay = require('!raw-loader!../../../../src/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _LoadingOverlay = require('!raw-loader!../../../../src/LoadingOverlay');

var _LoadingOverlay2 = _interopRequireDefault(_LoadingOverlay);

var _OverlayExample = require('../example/OverlayExample');

var _OverlayExample2 = _interopRequireDefault(_OverlayExample);

var _OverlayExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/OverlayExample');

var _OverlayExample4 = _interopRequireDefault(_OverlayExample3);

var _LoadingOverlayExample = require('../example/LoadingOverlayExample');

var _LoadingOverlayExample2 = _interopRequireDefault(_LoadingOverlayExample);

var _LoadingOverlayExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/LoadingOverlayExample');

var _LoadingOverlayExample4 = _interopRequireDefault(_LoadingOverlayExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Overlay',
      example: _react2.default.createElement(_OverlayExample2.default, null),
      source: _OverlayExample4.default
    }, {
      title: 'Loading Overlay',
      example: _react2.default.createElement(_LoadingOverlayExample2.default, null),
      source: _LoadingOverlayExample4.default
    }],
    propsTables: [{
      componentName: 'Overlay Container',
      componentSrc: _OverlayContainer2.default
    }, {
      componentName: 'Overlay',
      componentSrc: _Overlay2.default
    }, {
      componentName: 'Loading Overlay',
      componentSrc: _LoadingOverlay2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;