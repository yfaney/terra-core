'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _ProgressiveREADME = require('../../../../docs/ProgressiveREADME.md');

var _ProgressiveREADME2 = _interopRequireDefault(_ProgressiveREADME);

var _package = require('../../../../package.json');

var _ProgressivePaginator = require('!raw-loader!../../../../src/ProgressivePaginator');

var _ProgressivePaginator2 = _interopRequireDefault(_ProgressivePaginator);

var _ProgressivePaginatorExample = require('../example/ProgressivePaginatorExample');

var _ProgressivePaginatorExample2 = _interopRequireDefault(_ProgressivePaginatorExample);

var _ProgressivePaginatorExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ProgressivePaginatorExample');

var _ProgressivePaginatorExample4 = _interopRequireDefault(_ProgressivePaginatorExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _ProgressiveREADME2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Progressive Paginator Example',
      example: _react2.default.createElement(_ProgressivePaginatorExample2.default, null),
      source: _ProgressivePaginatorExample4.default
    }],
    propsTables: [{
      componentName: 'Progressive Paginator',
      componentSrc: _ProgressivePaginator2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;