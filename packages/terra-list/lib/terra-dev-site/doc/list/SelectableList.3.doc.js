'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _Selectable = require('../../../../docs/Selectable.md');

var _Selectable2 = _interopRequireDefault(_Selectable);

var _package = require('../../../../package.json');

var _SelectableList = require('!raw-loader!terra-list/src/SelectableList');

var _SelectableList2 = _interopRequireDefault(_SelectableList);

var _Selectable3 = require('../example/Selectable');

var _Selectable4 = _interopRequireDefault(_Selectable3);

var _Selectable5 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/Selectable');

var _Selectable6 = _interopRequireDefault(_Selectable5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example File
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _Selectable2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Selectable List',
      example: _react2.default.createElement(_Selectable4.default, null),
      source: _Selectable6.default
    }],
    propsTables: [{
      componentName: 'Selectable List',
      componentSrc: _SelectableList2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;