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

var _ToggleButton = require('!raw-loader!../../../../src/ToggleButton');

var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

var _DefaultToggleButton = require('../example/DefaultToggleButton');

var _DefaultToggleButton2 = _interopRequireDefault(_DefaultToggleButton);

var _DefaultToggleButton3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultToggleButton');

var _DefaultToggleButton4 = _interopRequireDefault(_DefaultToggleButton3);

var _AnimatedToggleButton = require('../example/AnimatedToggleButton');

var _AnimatedToggleButton2 = _interopRequireDefault(_AnimatedToggleButton);

var _AnimatedToggleButton3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AnimatedToggleButton');

var _AnimatedToggleButton4 = _interopRequireDefault(_AnimatedToggleButton3);

var _ButtonAttrsToggleButton = require('../example/ButtonAttrsToggleButton');

var _ButtonAttrsToggleButton2 = _interopRequireDefault(_ButtonAttrsToggleButton);

var _ButtonAttrsToggleButton3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonAttrsToggleButton');

var _ButtonAttrsToggleButton4 = _interopRequireDefault(_ButtonAttrsToggleButton3);

var _IsInitiallyOpenToggleButton = require('../example/IsInitiallyOpenToggleButton');

var _IsInitiallyOpenToggleButton2 = _interopRequireDefault(_IsInitiallyOpenToggleButton);

var _IsInitiallyOpenToggleButton3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/IsInitiallyOpenToggleButton');

var _IsInitiallyOpenToggleButton4 = _interopRequireDefault(_IsInitiallyOpenToggleButton3);

var _IsIconOnlyToggleButton = require('../example/IsIconOnlyToggleButton');

var _IsIconOnlyToggleButton2 = _interopRequireDefault(_IsIconOnlyToggleButton);

var _IsIconOnlyToggleButton3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/IsIconOnlyToggleButton');

var _IsIconOnlyToggleButton4 = _interopRequireDefault(_IsIconOnlyToggleButton3);

var _OpenCloseEventToggleButton = require('../example/OpenCloseEventToggleButton');

var _OpenCloseEventToggleButton2 = _interopRequireDefault(_OpenCloseEventToggleButton);

var _OpenCloseEventToggleButton3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/OpenCloseEventToggleButton');

var _OpenCloseEventToggleButton4 = _interopRequireDefault(_OpenCloseEventToggleButton3);

var _OpenCloseTextToggleButton = require('../example/OpenCloseTextToggleButton');

var _OpenCloseTextToggleButton2 = _interopRequireDefault(_OpenCloseTextToggleButton);

var _OpenCloseTextToggleButton3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/OpenCloseTextToggleButton');

var _OpenCloseTextToggleButton4 = _interopRequireDefault(_OpenCloseTextToggleButton3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default ToggleButton',
      example: _react2.default.createElement(_DefaultToggleButton2.default, null),
      source: _DefaultToggleButton4.default
    }, {
      title: 'isAnimated ToggleButton',
      example: _react2.default.createElement(_AnimatedToggleButton2.default, null),
      source: _AnimatedToggleButton4.default
    }, {
      title: 'Open / Close Button Text ToggleButton',
      example: _react2.default.createElement(_OpenCloseTextToggleButton2.default, null),
      source: _OpenCloseTextToggleButton4.default
    }, {
      title: 'isIconOnly ToggleButton',
      example: _react2.default.createElement(_IsIconOnlyToggleButton2.default, null),
      source: _IsIconOnlyToggleButton4.default
    }, {
      title: 'isInitiallyOpen ToggleButton',
      example: _react2.default.createElement(_IsInitiallyOpenToggleButton2.default, null),
      source: _IsInitiallyOpenToggleButton4.default
    }, {
      title: 'Custom ToggleButton Button',
      example: _react2.default.createElement(_ButtonAttrsToggleButton2.default, null),
      source: _ButtonAttrsToggleButton4.default
    }, {
      title: 'OnOpen / OnClose Callback ToggleButton',
      example: _react2.default.createElement(_OpenCloseEventToggleButton2.default, null),
      source: _OpenCloseEventToggleButton4.default
    }],
    propsTables: [{
      componentName: 'Toggle Button',
      componentSrc: _ToggleButton2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;