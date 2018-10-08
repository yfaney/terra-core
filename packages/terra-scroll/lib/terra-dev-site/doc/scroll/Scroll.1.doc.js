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

var _Scroll = require('!raw-loader!terra-scroll/src/Scroll');

var _Scroll2 = _interopRequireDefault(_Scroll);

var _ScrollVertical = require('../example/ScrollVertical');

var _ScrollVertical2 = _interopRequireDefault(_ScrollVertical);

var _ScrollVertical3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ScrollVertical');

var _ScrollVertical4 = _interopRequireDefault(_ScrollVertical3);

var _ScrollHorizontal = require('../example/ScrollHorizontal');

var _ScrollHorizontal2 = _interopRequireDefault(_ScrollHorizontal);

var _ScrollHorizontal3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ScrollHorizontal');

var _ScrollHorizontal4 = _interopRequireDefault(_ScrollHorizontal3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      example: _react2.default.createElement(_ScrollVertical2.default, null),
      source: _ScrollVertical4.default
    }, {
      example: _react2.default.createElement(_ScrollHorizontal2.default, null),
      source: _ScrollHorizontal4.default
    }],
    propsTables: [{
      componentName: 'Scroll',
      componentSrc: _Scroll2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;