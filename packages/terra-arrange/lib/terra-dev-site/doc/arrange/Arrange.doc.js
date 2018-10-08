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

var _Arrange = require('../../../Arrange');

var _Arrange2 = _interopRequireDefault(_Arrange);

var _Arrange3 = require('!raw-loader!../../../../src/Arrange');

var _Arrange4 = _interopRequireDefault(_Arrange3);

var _examplesetup = require('../common/examplesetup');

var _ArrangeAlignment = require('../example/ArrangeAlignment');

var _ArrangeAlignment2 = _interopRequireDefault(_ArrangeAlignment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files


/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Align All Containers',
      example: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ArrangeAlignment2.default, { alignment: 'all', fitStart: _examplesetup.image, fill: _examplesetup.simpleText }),
        _react2.default.createElement(_ArrangeAlignment2.default, { alignment: 'all', fill: _examplesetup.simpleText, fitEnd: _examplesetup.icon }),
        _react2.default.createElement(_ArrangeAlignment2.default, { alignment: 'all', fitStart: _examplesetup.image, fill: _examplesetup.simpleText, fitEnd: _examplesetup.icon })
      )
    }, {
      title: 'Align Individual Containers',
      example: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ArrangeAlignment2.default, { alignment: 'individual', fitStart: _examplesetup.image, fill: _examplesetup.simpleText }),
        _react2.default.createElement(_ArrangeAlignment2.default, { alignment: 'individual', fill: _examplesetup.simpleText, fitEnd: _examplesetup.icon }),
        _react2.default.createElement(_ArrangeAlignment2.default, { alignment: 'individual', fitStart: _examplesetup.image, fill: _examplesetup.simpleText, fitEnd: _examplesetup.icon })
      )
    }, {
      title: 'Align Using Attribute Props',
      description: 'Align stretch with 20% max-widths on containers using attribute props',
      example: _react2.default.createElement(_Arrange2.default, {
        fitStart: _examplesetup.image,
        fill: _examplesetup.simpleText,
        fitEnd: _examplesetup.icon,
        alignFitStart: 'stretch',
        alignFill: 'stretch',
        alignFitEnd: 'stretch',
        fitStartAttributes: { style: { maxWidth: '20%', wordWrap: 'break-word', overflow: 'hidden' } },
        fillAttributes: { style: { wordWrap: 'break-word', maxWidth: '20%' } },
        fitEndAttributes: {
          style: {
            maxWidth: '20%', wordWrap: 'break-word', overflow: 'hidden', backgroundColor: 'yellow'
          }
        }
      })
    }],
    propsTables: [{
      componentName: 'Arrange',
      componentSrc: _Arrange4.default
    }]
  });
};

// Component Source
exports.default = DocPage;