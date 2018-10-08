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

var _DynamicGrid = require('!raw-loader!../../../../src/DynamicGrid');

var _DynamicGrid2 = _interopRequireDefault(_DynamicGrid);

var _Region = require('!raw-loader!../../../../src/Region');

var _Region2 = _interopRequireDefault(_Region);

var _OneColumn = require('../example/OneColumn');

var _OneColumn2 = _interopRequireDefault(_OneColumn);

var _OneColumn3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/OneColumn');

var _OneColumn4 = _interopRequireDefault(_OneColumn3);

var _TwoColumn = require('../example/TwoColumn');

var _TwoColumn2 = _interopRequireDefault(_TwoColumn);

var _TwoColumn3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TwoColumn');

var _TwoColumn4 = _interopRequireDefault(_TwoColumn3);

var _ULayout = require('../example/ULayout');

var _ULayout2 = _interopRequireDefault(_ULayout);

var _ULayout3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ULayout');

var _ULayout4 = _interopRequireDefault(_ULayout3);

var _Dashboard = require('../example/Dashboard');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Dashboard3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/Dashboard');

var _Dashboard4 = _interopRequireDefault(_Dashboard3);

var _ResponsiveGrid = require('../example/ResponsiveGrid');

var _ResponsiveGrid2 = _interopRequireDefault(_ResponsiveGrid);

var _ResponsiveGrid3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ResponsiveGrid');

var _ResponsiveGrid4 = _interopRequireDefault(_ResponsiveGrid3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files


/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'One Column',
      example: _react2.default.createElement(_OneColumn2.default, null),
      source: _OneColumn4.default
    }, {
      title: 'Two Column',
      example: _react2.default.createElement(_TwoColumn2.default, null),
      source: _TwoColumn4.default
    }, {
      title: 'U Layout',
      example: _react2.default.createElement(_ULayout2.default, null),
      source: _ULayout4.default
    }, {
      title: 'Dashboard',
      example: _react2.default.createElement(_Dashboard2.default, null),
      source: _Dashboard4.default
    }, {
      title: 'Responsive Grid',
      description: 'Resize the browser window to see the regions reorder themselves.',
      example: _react2.default.createElement(_ResponsiveGrid2.default, null),
      source: _ResponsiveGrid4.default
    }],
    propsTables: [{
      componentName: 'Dynamic Grid',
      componentSrc: _DynamicGrid2.default
    }, {
      componentName: 'Region',
      componentSrc: _Region2.default
    }]
  });
};

exports.default = DocPage;