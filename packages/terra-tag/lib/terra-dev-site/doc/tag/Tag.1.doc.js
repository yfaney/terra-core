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

var _Tag = require('!raw-loader!../../../../src/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _TagDefault = require('../example/TagDefault');

var _TagDefault2 = _interopRequireDefault(_TagDefault);

var _TagDefault3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TagDefault');

var _TagDefault4 = _interopRequireDefault(_TagDefault3);

var _HrefTag = require('../example/HrefTag');

var _HrefTag2 = _interopRequireDefault(_HrefTag);

var _HrefTag3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/HrefTag');

var _HrefTag4 = _interopRequireDefault(_HrefTag3);

var _TagFallbacks = require('../example/TagFallbacks');

var _TagFallbacks2 = _interopRequireDefault(_TagFallbacks);

var _TagFallbacks3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TagFallbacks');

var _TagFallbacks4 = _interopRequireDefault(_TagFallbacks3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default Tag with onClick',
      example: _react2.default.createElement(_TagDefault2.default, null),
      source: _TagDefault4.default
    }, {
      title: 'Tag with href',
      example: _react2.default.createElement(_HrefTag2.default, null),
      source: _HrefTag4.default
    }, {
      title: 'Tag Fallbacks',
      example: _react2.default.createElement(_TagFallbacks2.default, null),
      source: _TagFallbacks4.default
    }],
    propsTables: [{
      componentName: 'Tag',
      componentSrc: _Tag2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;