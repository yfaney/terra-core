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

var _Input = require('!raw-loader!../../../../src/Input');

var _Input2 = _interopRequireDefault(_Input);

var _BlankExample = require('../common/BlankExample');

var _BlankExample2 = _interopRequireDefault(_BlankExample);

var _BlankExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/common/BlankExample');

var _BlankExample4 = _interopRequireDefault(_BlankExample3);

var _PlaceholderExample = require('../common/PlaceholderExample');

var _PlaceholderExample2 = _interopRequireDefault(_PlaceholderExample);

var _PlaceholderExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/common/PlaceholderExample');

var _PlaceholderExample4 = _interopRequireDefault(_PlaceholderExample3);

var _DefaultExample = require('../example/controlled/DefaultExample');

var _DefaultExample2 = _interopRequireDefault(_DefaultExample);

var _DefaultExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/controlled/DefaultExample');

var _DefaultExample4 = _interopRequireDefault(_DefaultExample3);

var _DisabledExample = require('../example/controlled/DisabledExample');

var _DisabledExample2 = _interopRequireDefault(_DisabledExample);

var _DisabledExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/controlled/DisabledExample');

var _DisabledExample4 = _interopRequireDefault(_DisabledExample3);

var _DefaultInvalidExample = require('../example/controlled/DefaultInvalidExample');

var _DefaultInvalidExample2 = _interopRequireDefault(_DefaultInvalidExample);

var _DefaultInvalidExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/controlled/DefaultInvalidExample');

var _DefaultInvalidExample4 = _interopRequireDefault(_DefaultInvalidExample3);

var _DisabledInvalidExample = require('../example/controlled/DisabledInvalidExample');

var _DisabledInvalidExample2 = _interopRequireDefault(_DisabledInvalidExample);

var _DisabledInvalidExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/controlled/DisabledInvalidExample');

var _DisabledInvalidExample4 = _interopRequireDefault(_DisabledInvalidExample3);

var _DefaultExample5 = require('../example/uncontrolled/DefaultExample');

var _DefaultExample6 = _interopRequireDefault(_DefaultExample5);

var _DefaultExample7 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/uncontrolled/DefaultExample');

var _DefaultExample8 = _interopRequireDefault(_DefaultExample7);

var _DisabledExample5 = require('../example/uncontrolled/DisabledExample');

var _DisabledExample6 = _interopRequireDefault(_DisabledExample5);

var _DisabledExample7 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/uncontrolled/DisabledExample');

var _DisabledExample8 = _interopRequireDefault(_DisabledExample7);

var _DefaultInvalidExample5 = require('../example/uncontrolled/DefaultInvalidExample');

var _DefaultInvalidExample6 = _interopRequireDefault(_DefaultInvalidExample5);

var _DefaultInvalidExample7 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/uncontrolled/DefaultInvalidExample');

var _DefaultInvalidExample8 = _interopRequireDefault(_DefaultInvalidExample7);

var _DisabledInvalidExample5 = require('../example/uncontrolled/DisabledInvalidExample');

var _DisabledInvalidExample6 = _interopRequireDefault(_DisabledInvalidExample5);

var _DisabledInvalidExample7 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/uncontrolled/DisabledInvalidExample');

var _DisabledInvalidExample8 = _interopRequireDefault(_DisabledInvalidExample7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default Input',
      example: _react2.default.createElement(_BlankExample2.default, null),
      source: _BlankExample4.default
    }, {
      title: 'Placeholder Input',
      example: _react2.default.createElement(_PlaceholderExample2.default, null),
      source: _PlaceholderExample4.default
    }, {
      title: 'Controlled Example - Valid',
      example: _react2.default.createElement(_DefaultExample2.default, null),
      source: _DefaultExample4.default
    }, {
      title: 'Controlled Example - Valid Disabled',
      example: _react2.default.createElement(_DisabledExample2.default, null),
      source: _DisabledExample4.default
    }, {
      title: 'Controlled Example - Invalid',
      example: _react2.default.createElement(_DefaultInvalidExample2.default, null),
      source: _DefaultInvalidExample4.default
    }, {
      title: 'Controlled Example - Invalid Disabled',
      example: _react2.default.createElement(_DisabledInvalidExample2.default, null),
      source: _DisabledInvalidExample4.default
    }, {
      title: 'Uncontrolled Example - Valid',
      example: _react2.default.createElement(_DefaultExample6.default, null),
      source: _DefaultExample8.default
    }, {
      title: 'Uncontrolled Example - Valid Disabled',
      example: _react2.default.createElement(_DisabledExample6.default, null),
      source: _DisabledExample8.default
    }, {
      title: 'Uncontrolled Example - Invalid',
      example: _react2.default.createElement(_DefaultInvalidExample6.default, null),
      source: _DefaultInvalidExample8.default
    }, {
      title: 'Uncontrolled Example - Invalid Disabled',
      example: _react2.default.createElement(_DisabledInvalidExample6.default, null),
      source: _DisabledInvalidExample8.default
    }],
    propsTables: [{
      componentName: 'Form Input',
      componentSrc: _Input2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;