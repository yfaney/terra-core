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

var _ActionHeader = require('!raw-loader!../../../../src/ActionHeader');

var _ActionHeader2 = _interopRequireDefault(_ActionHeader);

var _DefaultActionHeader = require('../example/DefaultActionHeader');

var _DefaultActionHeader2 = _interopRequireDefault(_DefaultActionHeader);

var _DefaultActionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultActionHeader');

var _DefaultActionHeader4 = _interopRequireDefault(_DefaultActionHeader3);

var _BackActionHeader = require('../example/BackActionHeader');

var _BackActionHeader2 = _interopRequireDefault(_BackActionHeader);

var _BackActionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/BackActionHeader');

var _BackActionHeader4 = _interopRequireDefault(_BackActionHeader3);

var _BackCloseActionHeader = require('../example/BackCloseActionHeader');

var _BackCloseActionHeader2 = _interopRequireDefault(_BackCloseActionHeader);

var _BackCloseActionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/BackCloseActionHeader');

var _BackCloseActionHeader4 = _interopRequireDefault(_BackCloseActionHeader3);

var _CloseActionHeader = require('../example/CloseActionHeader');

var _CloseActionHeader2 = _interopRequireDefault(_CloseActionHeader);

var _CloseActionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CloseActionHeader');

var _CloseActionHeader4 = _interopRequireDefault(_CloseActionHeader3);

var _MaximizeCloseActionHeader = require('../example/MaximizeCloseActionHeader');

var _MaximizeCloseActionHeader2 = _interopRequireDefault(_MaximizeCloseActionHeader);

var _MaximizeCloseActionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/MaximizeCloseActionHeader');

var _MaximizeCloseActionHeader4 = _interopRequireDefault(_MaximizeCloseActionHeader3);

var _MinimizeCustomButtonActionHeader = require('../example/MinimizeCustomButtonActionHeader');

var _MinimizeCustomButtonActionHeader2 = _interopRequireDefault(_MinimizeCustomButtonActionHeader);

var _MinimizeCustomButtonActionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/MinimizeCustomButtonActionHeader');

var _MinimizeCustomButtonActionHeader4 = _interopRequireDefault(_MinimizeCustomButtonActionHeader3);

var _BackPreviousNextCloseActionHeader = require('../example/BackPreviousNextCloseActionHeader');

var _BackPreviousNextCloseActionHeader2 = _interopRequireDefault(_BackPreviousNextCloseActionHeader);

var _BackPreviousNextCloseActionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/BackPreviousNextCloseActionHeader');

var _BackPreviousNextCloseActionHeader4 = _interopRequireDefault(_BackPreviousNextCloseActionHeader3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      example: _react2.default.createElement(_DefaultActionHeader2.default, null),
      source: _DefaultActionHeader4.default
    }, {
      example: _react2.default.createElement(_BackActionHeader2.default, null),
      source: _BackActionHeader4.default
    }, {
      example: _react2.default.createElement(_CloseActionHeader2.default, null),
      source: _CloseActionHeader4.default
    }, {
      example: _react2.default.createElement(_BackCloseActionHeader2.default, null),
      source: _BackCloseActionHeader4.default
    }, {
      example: _react2.default.createElement(_BackPreviousNextCloseActionHeader2.default, null),
      source: _BackPreviousNextCloseActionHeader4.default
    }, {
      example: _react2.default.createElement(_MaximizeCloseActionHeader2.default, null),
      source: _MaximizeCloseActionHeader4.default
    }, {
      example: _react2.default.createElement(_MinimizeCustomButtonActionHeader2.default, null),
      source: _MinimizeCustomButtonActionHeader4.default
    }],
    propsTables: [{
      componentName: 'Action Header',
      componentSrc: _ActionHeader2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;