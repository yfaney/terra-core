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

var _ListItem = require('!raw-loader!../../../../src/ListItem.jsx');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = require('!raw-loader!../../../../src/List.jsx');

var _List2 = _interopRequireDefault(_List);

var _List3 = require('../example/List');

var _List4 = _interopRequireDefault(_List3);

var _List5 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/List');

var _List6 = _interopRequireDefault(_List5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example File


/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default List',
      example: _react2.default.createElement(_List4.default, null),
      source: _List6.default
    }],
    propsTables: [{
      componentName: 'List',
      componentSrc: _List2.default
    }, {
      componentName: 'List Item',
      componentSrc: _ListItem2.default
    }]
  });
};

exports.default = DocPage;