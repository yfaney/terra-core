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

var _Status = require('!raw-loader!../../../../src/Status');

var _Status2 = _interopRequireDefault(_Status);

var _StatusDefault = require('../example/StatusDefault');

var _StatusDefault2 = _interopRequireDefault(_StatusDefault);

var _StatusDefault3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/StatusDefault');

var _StatusDefault4 = _interopRequireDefault(_StatusDefault3);

var _StatusImage = require('../example/StatusImage');

var _StatusImage2 = _interopRequireDefault(_StatusImage);

var _StatusImage3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/StatusImage');

var _StatusImage4 = _interopRequireDefault(_StatusImage3);

var _StatusIcon = require('../example/StatusIcon');

var _StatusIcon2 = _interopRequireDefault(_StatusIcon);

var _StatusIcon3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/StatusIcon');

var _StatusIcon4 = _interopRequireDefault(_StatusIcon3);

var _StatusArrange = require('../example/StatusArrange');

var _StatusArrange2 = _interopRequireDefault(_StatusArrange);

var _StatusArrange3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/StatusArrange');

var _StatusArrange4 = _interopRequireDefault(_StatusArrange3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Status with text',
      example: _react2.default.createElement(_StatusDefault2.default, null),
      source: _StatusDefault4.default
    }, {
      title: 'Status with Image',
      example: _react2.default.createElement(_StatusImage2.default, null),
      source: _StatusImage4.default
    }, {
      title: 'Status with Icon',
      example: _react2.default.createElement(_StatusIcon2.default, null),
      source: _StatusIcon4.default
    }, {
      title: 'Status with Arrange',
      example: _react2.default.createElement(_StatusArrange2.default, null),
      source: _StatusArrange4.default
    }],
    propsTables: [{
      componentName: 'Status',
      componentSrc: _Status2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;