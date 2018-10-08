'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _BlockActionFooter = require('../../../../docs/BlockActionFooter.md');

var _BlockActionFooter2 = _interopRequireDefault(_BlockActionFooter);

var _package = require('../../../../package.json');

var _BlockActionFooter3 = require('!raw-loader!../../../../src/BlockActionFooter');

var _BlockActionFooter4 = _interopRequireDefault(_BlockActionFooter3);

var _Empty = require('../example/block/Empty');

var _Empty2 = _interopRequireDefault(_Empty);

var _Empty3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/block/Empty');

var _Empty4 = _interopRequireDefault(_Empty3);

var _SingleAction = require('../example/block/SingleAction');

var _SingleAction2 = _interopRequireDefault(_SingleAction);

var _SingleAction3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/block/SingleAction');

var _SingleAction4 = _interopRequireDefault(_SingleAction3);

var _MultipleActions = require('../example/block/MultipleActions');

var _MultipleActions2 = _interopRequireDefault(_MultipleActions);

var _MultipleActions3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/block/MultipleActions');

var _MultipleActions4 = _interopRequireDefault(_MultipleActions3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _BlockActionFooter2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Empty',
      example: _react2.default.createElement(_Empty2.default, null),
      source: _Empty4.default
    }, {
      title: 'Single Action',
      example: _react2.default.createElement(_SingleAction2.default, null),
      source: _SingleAction4.default
    }, {
      title: 'Multiple Actions',
      example: _react2.default.createElement(_MultipleActions2.default, null),
      source: _MultipleActions4.default
    }],
    propsTables: [{
      componentName: 'Block Action Footer',
      componentSrc: _BlockActionFooter4.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;