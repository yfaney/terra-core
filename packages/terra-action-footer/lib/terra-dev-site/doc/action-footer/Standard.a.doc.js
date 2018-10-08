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

var _ActionFooter = require('!raw-loader!../../../../src/ActionFooter');

var _ActionFooter2 = _interopRequireDefault(_ActionFooter);

var _Empty = require('../example/standard/Empty');

var _Empty2 = _interopRequireDefault(_Empty);

var _Empty3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/standard/Empty');

var _Empty4 = _interopRequireDefault(_Empty3);

var _SingleStartAction = require('../example/standard/SingleStartAction');

var _SingleStartAction2 = _interopRequireDefault(_SingleStartAction);

var _SingleStartAction3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/standard/SingleStartAction');

var _SingleStartAction4 = _interopRequireDefault(_SingleStartAction3);

var _SingleEndAction = require('../example/standard/SingleEndAction');

var _SingleEndAction2 = _interopRequireDefault(_SingleEndAction);

var _SingleEndAction3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/standard/SingleEndAction');

var _SingleEndAction4 = _interopRequireDefault(_SingleEndAction3);

var _MultipleStartEndActions = require('../example/standard/MultipleStartEndActions');

var _MultipleStartEndActions2 = _interopRequireDefault(_MultipleStartEndActions);

var _MultipleStartEndActions3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/standard/MultipleStartEndActions');

var _MultipleStartEndActions4 = _interopRequireDefault(_MultipleStartEndActions3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Empty',
      example: _react2.default.createElement(_Empty2.default, null),
      source: _Empty4.default
    }, {
      title: 'Single Start Action',
      example: _react2.default.createElement(_SingleStartAction2.default, null),
      source: _SingleStartAction4.default
    }, {
      title: 'Single End Action',
      example: _react2.default.createElement(_SingleEndAction2.default, null),
      source: _SingleEndAction4.default
    }, {
      title: 'Multiple Start and End Actions',
      example: _react2.default.createElement(_MultipleStartEndActions2.default, null),
      source: _MultipleStartEndActions4.default
    }],
    propsTables: [{
      componentName: 'Action Footer',
      componentSrc: _ActionFooter2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;