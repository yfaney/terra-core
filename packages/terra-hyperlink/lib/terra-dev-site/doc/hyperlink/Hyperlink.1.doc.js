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

var _Hyperlink = require('!raw-loader!../../../../src/Hyperlink');

var _Hyperlink2 = _interopRequireDefault(_Hyperlink);

var _DefaultHyperlink = require('../example/DefaultHyperlink');

var _DefaultHyperlink2 = _interopRequireDefault(_DefaultHyperlink);

var _DefaultHyperlink3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultHyperlink.jsx');

var _DefaultHyperlink4 = _interopRequireDefault(_DefaultHyperlink3);

var _AudioHyperlink = require('../example/AudioHyperlink');

var _AudioHyperlink2 = _interopRequireDefault(_AudioHyperlink);

var _AudioHyperlink3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AudioHyperlink');

var _AudioHyperlink4 = _interopRequireDefault(_AudioHyperlink3);

var _DisabledHyperlink = require('../example/DisabledHyperlink');

var _DisabledHyperlink2 = _interopRequireDefault(_DisabledHyperlink);

var _DisabledHyperlink3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DisabledHyperlink');

var _DisabledHyperlink4 = _interopRequireDefault(_DisabledHyperlink3);

var _DocumentHyperlink = require('../example/DocumentHyperlink');

var _DocumentHyperlink2 = _interopRequireDefault(_DocumentHyperlink);

var _DocumentHyperlink3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DocumentHyperlink');

var _DocumentHyperlink4 = _interopRequireDefault(_DocumentHyperlink3);

var _ExternalHyperlink = require('../example/ExternalHyperlink');

var _ExternalHyperlink2 = _interopRequireDefault(_ExternalHyperlink);

var _ExternalHyperlink3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ExternalHyperlink');

var _ExternalHyperlink4 = _interopRequireDefault(_ExternalHyperlink3);

var _ImageHyperlink = require('../example/ImageHyperlink');

var _ImageHyperlink2 = _interopRequireDefault(_ImageHyperlink);

var _ImageHyperlink3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ImageHyperlink');

var _ImageHyperlink4 = _interopRequireDefault(_ImageHyperlink3);

var _UnderlineHiddenHyperlink = require('../example/UnderlineHiddenHyperlink');

var _UnderlineHiddenHyperlink2 = _interopRequireDefault(_UnderlineHiddenHyperlink);

var _UnderlineHiddenHyperlink3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/UnderlineHiddenHyperlink');

var _UnderlineHiddenHyperlink4 = _interopRequireDefault(_UnderlineHiddenHyperlink3);

var _VideoHyperlink = require('../example/VideoHyperlink');

var _VideoHyperlink2 = _interopRequireDefault(_VideoHyperlink);

var _VideoHyperlink3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/VideoHyperlink');

var _VideoHyperlink4 = _interopRequireDefault(_VideoHyperlink3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default Hyperlink',
      example: _react2.default.createElement(_DefaultHyperlink2.default, null),
      source: _DefaultHyperlink4.default
    }, {
      title: 'Disabled Hyperlink',
      example: _react2.default.createElement(_DisabledHyperlink2.default, null),
      source: _DisabledHyperlink4.default
    }, {
      title: 'External Hyperlink',
      description: 'An external variant adds a custom icon to indicate the destination is external to the source.',
      example: _react2.default.createElement(_ExternalHyperlink2.default, null),
      source: _ExternalHyperlink4.default
    }, {
      title: 'Audio Hyperlink',
      description: 'An audio variant adds a custom icon to indicate the content linked is audio.',
      example: _react2.default.createElement(_AudioHyperlink2.default, null),
      source: _AudioHyperlink4.default
    }, {
      title: 'Video Hyperlink',
      description: 'A video variant adds a custom icon to indicate the content linked is a video.',
      example: _react2.default.createElement(_VideoHyperlink2.default, null),
      source: _VideoHyperlink4.default
    }, {
      title: 'Image Hyperlink',
      description: 'An image variant adds a custom icon to indicate the content linked is an image.',
      example: _react2.default.createElement(_ImageHyperlink2.default, null),
      source: _ImageHyperlink4.default
    }, {
      title: 'Document Hyperlink',
      description: 'A document variant adds a custom icon to indicate the content linked is document (.pdf, .doc, .xls, etc.).',
      example: _react2.default.createElement(_DocumentHyperlink2.default, null),
      source: _DocumentHyperlink4.default
    }, {
      title: 'Underline Hidden Hyperlink',
      description: 'Option to hide the default underline when applied with theme-specific styling. Reserve for use when terra-hyperlink is applied in special situations within lists, other controls, or other components.',
      example: _react2.default.createElement(_UnderlineHiddenHyperlink2.default, null),
      source: _UnderlineHiddenHyperlink4.default
    }],
    propsTables: [{
      componentName: 'Hyperlink',
      componentSrc: _Hyperlink2.default
    }]
  });
};

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
exports.default = DocPage;