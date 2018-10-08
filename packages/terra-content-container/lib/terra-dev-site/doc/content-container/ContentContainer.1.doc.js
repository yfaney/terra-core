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

var _ContentContainer = require('!raw-loader!../../../../src/ContentContainer.jsx');

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _ContentContainerStandard = require('../example/ContentContainerStandard');

var _ContentContainerStandard2 = _interopRequireDefault(_ContentContainerStandard);

var _ContentContainerStandard3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ContentContainerStandard');

var _ContentContainerStandard4 = _interopRequireDefault(_ContentContainerStandard3);

var _ContentContainerFill = require('../example/ContentContainerFill');

var _ContentContainerFill2 = _interopRequireDefault(_ContentContainerFill);

var _ContentContainerFill3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ContentContainerFill');

var _ContentContainerFill4 = _interopRequireDefault(_ContentContainerFill3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Standard Container',
      example: _react2.default.createElement(_ContentContainerStandard2.default, null),
      source: _ContentContainerStandard4.default
    }, {
      title: 'Fill Container',
      example: _react2.default.createElement(_ContentContainerFill2.default, null),
      source: _ContentContainerFill4.default
    }],
    propsTables: [{
      componentName: 'Content Container',
      componentSrc: _ContentContainer2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;