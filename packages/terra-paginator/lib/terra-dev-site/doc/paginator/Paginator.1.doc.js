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

var _Paginator = require('!raw-loader!../../../../src/Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

var _PaginatorExample = require('../example/PaginatorExample');

var _PaginatorExample2 = _interopRequireDefault(_PaginatorExample);

var _PaginatorExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/PaginatorExample');

var _PaginatorExample4 = _interopRequireDefault(_PaginatorExample3);

var _PaginatorNoPagesExample = require('../example/PaginatorNoPagesExample');

var _PaginatorNoPagesExample2 = _interopRequireDefault(_PaginatorNoPagesExample);

var _PaginatorNoPagesExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/PaginatorNoPagesExample');

var _PaginatorNoPagesExample4 = _interopRequireDefault(_PaginatorNoPagesExample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Paginator Example',
      example: _react2.default.createElement(_PaginatorExample2.default, null),
      source: _PaginatorExample4.default
    }, {
      title: 'Paginator Example Without Pages',
      example: _react2.default.createElement(_PaginatorNoPagesExample2.default, null),
      source: _PaginatorNoPagesExample4.default
    }],
    propsTables: [{
      componentName: 'Paginator',
      componentSrc: _Paginator2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;