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

var _AbstractModal = require('!raw-loader!../../../../src/AbstractModal');

var _AbstractModal2 = _interopRequireDefault(_AbstractModal);

var _AbstractModalIsOpened = require('../example/AbstractModalIsOpened');

var _AbstractModalIsOpened2 = _interopRequireDefault(_AbstractModalIsOpened);

var _AbstractModalIsOpened3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AbstractModalIsOpened');

var _AbstractModalIsOpened4 = _interopRequireDefault(_AbstractModalIsOpened3);

var _AbstractModalCloseOnOutsideClick = require('../example/AbstractModalCloseOnOutsideClick');

var _AbstractModalCloseOnOutsideClick2 = _interopRequireDefault(_AbstractModalCloseOnOutsideClick);

var _AbstractModalCloseOnOutsideClick3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AbstractModalCloseOnOutsideClick');

var _AbstractModalCloseOnOutsideClick4 = _interopRequireDefault(_AbstractModalCloseOnOutsideClick3);

var _AbstractModalIsFullscreen = require('../example/AbstractModalIsFullscreen');

var _AbstractModalIsFullscreen2 = _interopRequireDefault(_AbstractModalIsFullscreen);

var _AbstractModalIsFullscreen3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AbstractModalIsFullscreen');

var _AbstractModalIsFullscreen4 = _interopRequireDefault(_AbstractModalIsFullscreen3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Default Modal',
      example: _react2.default.createElement(_AbstractModalIsOpened2.default, null),
      source: _AbstractModalIsOpened4.default
    }, {
      title: 'Disable closing the modal when clicking on the overlay',
      example: _react2.default.createElement(_AbstractModalCloseOnOutsideClick2.default, null),
      source: _AbstractModalCloseOnOutsideClick4.default
    }, {
      title: 'Fullscreen Modal',
      example: _react2.default.createElement(_AbstractModalIsFullscreen2.default, null),
      source: _AbstractModalIsFullscreen4.default
    }],
    propsTables: [{
      componentName: 'Modal',
      componentSrc: _AbstractModal2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;