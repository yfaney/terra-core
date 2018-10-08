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

var _Card = require('!raw-loader!../../../../src/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardBody = require('!raw-loader!../../../../src/CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardDefault = require('../example/CardDefault');

var _CardDefault2 = _interopRequireDefault(_CardDefault);

var _CardDefault3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CardDefault');

var _CardDefault4 = _interopRequireDefault(_CardDefault3);

var _CardRaised = require('../example/CardRaised');

var _CardRaised2 = _interopRequireDefault(_CardRaised);

var _CardRaised3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CardRaised');

var _CardRaised4 = _interopRequireDefault(_CardRaised3);

var _CardPadding = require('../example/CardPadding');

var _CardPadding2 = _interopRequireDefault(_CardPadding);

var _CardPadding3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CardPadding');

var _CardPadding4 = _interopRequireDefault(_CardPadding3);

var _CardPaddingVertical = require('../example/CardPaddingVertical');

var _CardPaddingVertical2 = _interopRequireDefault(_CardPaddingVertical);

var _CardPaddingVertical3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CardPaddingVertical');

var _CardPaddingVertical4 = _interopRequireDefault(_CardPaddingVertical3);

var _CardPaddingHorizontal = require('../example/CardPaddingHorizontal');

var _CardPaddingHorizontal2 = _interopRequireDefault(_CardPaddingHorizontal);

var _CardPaddingHorizontal3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CardPaddingHorizontal');

var _CardPaddingHorizontal4 = _interopRequireDefault(_CardPaddingHorizontal3);

var _CardPaddingHR = require('../example/CardPaddingHR');

var _CardPaddingHR2 = _interopRequireDefault(_CardPaddingHR);

var _CardPaddingHR3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CardPaddingHR');

var _CardPaddingHR4 = _interopRequireDefault(_CardPaddingHR3);

var _CardContentCentered = require('../example/CardContentCentered');

var _CardContentCentered2 = _interopRequireDefault(_CardContentCentered);

var _CardContentCentered3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CardContentCentered');

var _CardContentCentered4 = _interopRequireDefault(_CardContentCentered3);

var _CardVisuallyHiddenText = require('../example/CardVisuallyHiddenText');

var _CardVisuallyHiddenText2 = _interopRequireDefault(_CardVisuallyHiddenText);

var _CardVisuallyHiddenText3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/CardVisuallyHiddenText');

var _CardVisuallyHiddenText4 = _interopRequireDefault(_CardVisuallyHiddenText3);

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
      title: 'Card basic example',
      example: _react2.default.createElement(_CardDefault2.default, null),
      source: _CardDefault4.default
    }, {
      title: 'Card basic raised example',
      example: _react2.default.createElement(_CardRaised2.default, null),
      source: _CardRaised4.default
    }, {
      title: 'Card plus Card Body with default padding',
      example: _react2.default.createElement(_CardPadding2.default, null),
      source: _CardPadding4.default
    }, {
      title: 'Card plus Card Body with only vertical padding',
      example: _react2.default.createElement(_CardPaddingVertical2.default, null),
      source: _CardPaddingVertical4.default
    }, {
      title: 'Card plus Card Body with only horizontal padding',
      example: _react2.default.createElement(_CardPaddingHorizontal2.default, null),
      source: _CardPaddingHorizontal4.default
    }, {
      title: 'Card plus padded and non-padded children',
      example: _react2.default.createElement(_CardPaddingHR2.default, null),
      source: _CardPaddingHR4.default
    }, {
      title: 'Centered content inside card',
      example: _react2.default.createElement(_CardContentCentered2.default, null),
      source: _CardContentCentered4.default
    }, {
      title: 'Card with Visually Hidden Text',
      example: _react2.default.createElement(_CardVisuallyHiddenText2.default, null),
      source: _CardVisuallyHiddenText4.default
    }],
    propsTables: [{
      componentName: 'Card',
      componentSrc: _Card2.default
    }, {
      componentName: 'Card Body',
      componentSrc: _CardBody2.default
    }]
  });
};

exports.default = DocPage;