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

var _ResponsiveElement = require('!raw-loader!../../../../src/ResponsiveElement');

var _ResponsiveElement2 = _interopRequireDefault(_ResponsiveElement);

var _ResponsiveTable = require('../example/ResponsiveTable');

var _ResponsiveTable2 = _interopRequireDefault(_ResponsiveTable);

var _ResponsiveTable3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ResponsiveTable');

var _ResponsiveTable4 = _interopRequireDefault(_ResponsiveTable3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: 'terra-responsive-element',
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element',
    propsTables: [{
      componentName: 'Responsive Element',
      componentSrc: _ResponsiveElement2.default
    }],
    examples: [{
      title: 'Responsive Table',
      description: 'A table that will render as a list on small screen sizes.',
      example: _react2.default.createElement(_ResponsiveTable2.default, null),
      source: _ResponsiveTable4.default
    }]
  });
};
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
exports.default = DocPage;