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

var _Grid = require('!raw-loader!../../../../src/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _GridRow = require('!raw-loader!../../../../src/GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

var _GridColumn = require('!raw-loader!../../../../src/GridColumn');

var _GridColumn2 = _interopRequireDefault(_GridColumn);

var _GridDefault = require('../example/GridDefault');

var _GridDefault2 = _interopRequireDefault(_GridDefault);

var _GridDefault3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/GridDefault');

var _GridDefault4 = _interopRequireDefault(_GridDefault3);

var _GridResponsive = require('../example/GridResponsive');

var _GridResponsive2 = _interopRequireDefault(_GridResponsive);

var _GridResponsive3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/GridResponsive');

var _GridResponsive4 = _interopRequireDefault(_GridResponsive3);

var _GridNested = require('../example/GridNested');

var _GridNested2 = _interopRequireDefault(_GridNested);

var _GridNested3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/GridNested');

var _GridNested4 = _interopRequireDefault(_GridNested3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default Grid',
      example: _react2.default.createElement(_GridDefault2.default, null),
      source: _GridDefault4.default
    }, {
      title: 'Responsive Grid',
      example: _react2.default.createElement(_GridResponsive2.default, null),
      source: _GridResponsive4.default
    }, {
      title: 'Nested Grid',
      example: _react2.default.createElement(_GridNested2.default, null),
      source: _GridNested4.default
    }],
    propsTables: [{
      componentName: 'Grid',
      componentSrc: _Grid2.default
    }, {
      componentName: 'Grid Row',
      componentSrc: _GridRow2.default
    }, {
      componentName: 'Grid Column',
      componentSrc: _GridColumn2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;