'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _MultiSelect = require('../../../../docs/MultiSelect.md');

var _MultiSelect2 = _interopRequireDefault(_MultiSelect);

var _package = require('../../../../package.json');

var _MultiSelectList = require('!raw-loader!../../../../src/MultiSelectList');

var _MultiSelectList2 = _interopRequireDefault(_MultiSelectList);

var _MultiSelect3 = require('../example/MultiSelect');

var _MultiSelect4 = _interopRequireDefault(_MultiSelect3);

var _MultiSelect5 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelect');

var _MultiSelect6 = _interopRequireDefault(_MultiSelect5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _MultiSelect2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      example: _react2.default.createElement(_MultiSelect4.default, null),
      source: _MultiSelect6.default
    }],
    propsTables: [{
      componentName: 'Multi-Select',
      componentSrc: _MultiSelectList2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;