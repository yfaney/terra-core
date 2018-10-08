'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _ControlledProgressiveREADME = require('../../../../docs/ControlledProgressiveREADME.md');

var _ControlledProgressiveREADME2 = _interopRequireDefault(_ControlledProgressiveREADME);

var _package = require('../../../../package.json');

var _ControlledProgressivePaginator = require('!raw-loader!../../../../src/ControlledProgressivePaginator');

var _ControlledProgressivePaginator2 = _interopRequireDefault(_ControlledProgressivePaginator);

var _ControlledProgressivePaginatorExample = require('./example/ControlledProgressivePaginatorExample');

var _ControlledProgressivePaginatorExample2 = _interopRequireDefault(_ControlledProgressivePaginatorExample);

var _ControlledProgressivePaginatorExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/paginator/example/ControlledProgressivePaginatorExample');

var _ControlledProgressivePaginatorExample4 = _interopRequireDefault(_ControlledProgressivePaginatorExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _ControlledProgressiveREADME2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Controlled Progressive Paginator Example',
      example: _react2.default.createElement(_ControlledProgressivePaginatorExample2.default, null),
      source: _ControlledProgressivePaginatorExample4.default
    }],
    propsTables: [{
      componentName: 'Controlled Progressive Paginator',
      componentSrc: _ControlledProgressivePaginator2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;