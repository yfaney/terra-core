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

var _Dialog = require('!raw-loader!../../../../src/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogDefault = require('../example/DialogDefault');

var _DialogDefault2 = _interopRequireDefault(_DialogDefault);

var _DialogDefault3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DialogDefault');

var _DialogDefault4 = _interopRequireDefault(_DialogDefault3);

var _DialogLongContent = require('../example/DialogLongContent');

var _DialogLongContent2 = _interopRequireDefault(_DialogLongContent);

var _DialogLongContent3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DialogLongContent');

var _DialogLongContent4 = _interopRequireDefault(_DialogLongContent3);

var _DialogNoClose = require('../example/DialogNoClose');

var _DialogNoClose2 = _interopRequireDefault(_DialogNoClose);

var _DialogNoClose3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DialogNoClose');

var _DialogNoClose4 = _interopRequireDefault(_DialogNoClose3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Dialog - Default',
      example: _react2.default.createElement(_DialogDefault2.default, null),
      source: _DialogDefault4.default
    }, {
      title: 'Dialog - Long Content',
      example: _react2.default.createElement(_DialogLongContent2.default, null),
      source: _DialogLongContent4.default
    }, {
      title: 'Dialog - No Close Button',
      example: _react2.default.createElement(_DialogNoClose2.default, null),
      source: _DialogNoClose4.default
    }],
    propsTables: [{
      componentName: 'Dialog',
      componentSrc: _Dialog2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;