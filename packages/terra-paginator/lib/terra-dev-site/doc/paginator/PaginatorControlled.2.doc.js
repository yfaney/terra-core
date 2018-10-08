'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _ControlledREADME = require('../../../../docs/ControlledREADME.md');

var _ControlledREADME2 = _interopRequireDefault(_ControlledREADME);

var _package = require('../../../../package.json');

var _ControlledPaginator = require('!raw-loader!../../../../src/ControlledPaginator');

var _ControlledPaginator2 = _interopRequireDefault(_ControlledPaginator);

var _ControlledPaginatorExample = require('./example/ControlledPaginatorExample');

var _ControlledPaginatorExample2 = _interopRequireDefault(_ControlledPaginatorExample);

var _ControlledPaginatorExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/paginator/example/ControlledPaginatorExample');

var _ControlledPaginatorExample4 = _interopRequireDefault(_ControlledPaginatorExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _ControlledREADME2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Controlled Paginator Example',
      example: _react2.default.createElement(_ControlledPaginatorExample2.default, null),
      source: _ControlledPaginatorExample4.default
    }],
    propsTables: [{
      componentName: 'Controlled Paginator',
      componentSrc: _ControlledPaginator2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;