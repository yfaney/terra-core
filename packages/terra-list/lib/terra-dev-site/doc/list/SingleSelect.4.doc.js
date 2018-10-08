'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _SingleSelect = require('../../../../docs/SingleSelect.md');

var _SingleSelect2 = _interopRequireDefault(_SingleSelect);

var _package = require('../../../../package.json');

var _SingleSelectList = require('!raw-loader!terra-list/src/SingleSelectList');

var _SingleSelectList2 = _interopRequireDefault(_SingleSelectList);

var _SingleSelect3 = require('../example/SingleSelect');

var _SingleSelect4 = _interopRequireDefault(_SingleSelect3);

var _SingleSelect5 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/SingleSelect');

var _SingleSelect6 = _interopRequireDefault(_SingleSelect5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example File
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _SingleSelect2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Single Selectable List',
      example: _react2.default.createElement(_SingleSelect4.default, null),
      source: _SingleSelect6.default
    }],
    propsTables: [{
      componentName: 'Single Selectable List',
      componentSrc: _SingleSelectList2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;