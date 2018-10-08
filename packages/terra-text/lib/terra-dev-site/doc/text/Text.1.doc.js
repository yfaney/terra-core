'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraMarkdown = require('terra-markdown');

var _terraMarkdown2 = _interopRequireDefault(_terraMarkdown);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _textFontSizes = require('../../../../docs/text-font-sizes.md');

var _textFontSizes2 = _interopRequireDefault(_textFontSizes);

var _textColors = require('../../../../docs/text-colors.md');

var _textColors2 = _interopRequireDefault(_textColors);

var _textWeights = require('../../../../docs/text-weights.md');

var _textWeights2 = _interopRequireDefault(_textWeights);

var _textVariations = require('../../../../docs/text-variations.md');

var _textVariations2 = _interopRequireDefault(_textVariations);

var _textVisuallyHidden = require('../../../../docs/text-visually-hidden.md');

var _textVisuallyHidden2 = _interopRequireDefault(_textVisuallyHidden);

var _package = require('../../../../package.json');

var _Text = require('!raw-loader!../../../../src/Text');

var _Text2 = _interopRequireDefault(_Text);

var _TextColors = require('../example/TextColors');

var _TextColors2 = _interopRequireDefault(_TextColors);

var _TextColors3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TextColors');

var _TextColors4 = _interopRequireDefault(_TextColors3);

var _TextDisplays = require('../example/TextDisplays');

var _TextDisplays2 = _interopRequireDefault(_TextDisplays);

var _TextDisplays3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TextDisplays');

var _TextDisplays4 = _interopRequireDefault(_TextDisplays3);

var _TextFontSizes = require('../example/TextFontSizes');

var _TextFontSizes2 = _interopRequireDefault(_TextFontSizes);

var _TextFontSizes3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TextFontSizes');

var _TextFontSizes4 = _interopRequireDefault(_TextFontSizes3);

var _TextVariations = require('../example/TextVariations');

var _TextVariations2 = _interopRequireDefault(_TextVariations);

var _TextVariations3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TextVariations');

var _TextVariations4 = _interopRequireDefault(_TextVariations3);

var _TextVisuallyHidden = require('../example/TextVisuallyHidden');

var _TextVisuallyHidden2 = _interopRequireDefault(_TextVisuallyHidden);

var _TextVisuallyHidden3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TextVisuallyHidden');

var _TextVisuallyHidden4 = _interopRequireDefault(_TextVisuallyHidden3);

var _TextWeights = require('../example/TextWeights');

var _TextWeights2 = _interopRequireDefault(_TextWeights);

var _TextWeights3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TextWeights');

var _TextWeights4 = _interopRequireDefault(_TextWeights3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Displays',
      example: _react2.default.createElement(_TextDisplays2.default, null),
      source: _TextDisplays4.default
    }, {
      title: 'Font Sizes',
      description: _react2.default.createElement(_terraMarkdown2.default, { id: 'text-font-size-docs', src: _textFontSizes2.default }),
      example: _react2.default.createElement(_TextFontSizes2.default, null),
      source: _TextFontSizes4.default
    }, {
      title: 'Colors',
      description: _react2.default.createElement(_terraMarkdown2.default, { id: 'text-color-docs', src: _textColors2.default }),
      example: _react2.default.createElement(_TextColors2.default, null),
      source: _TextColors4.default
    }, {
      title: 'Weight',
      description: _react2.default.createElement(_terraMarkdown2.default, { id: 'text-weight-docs', src: _textWeights2.default }),
      example: _react2.default.createElement(_TextWeights2.default, null),
      source: _TextWeights4.default
    }, {
      title: 'Visually Hidden',
      description: _react2.default.createElement(_terraMarkdown2.default, { id: 'text-visually-hidden-docs', src: _textVisuallyHidden2.default }),
      example: _react2.default.createElement(_TextVisuallyHidden2.default, null),
      source: _TextVisuallyHidden4.default
    }, {
      title: 'Variations',
      description: _react2.default.createElement(_terraMarkdown2.default, { id: 'text-variations-docs', src: _textVariations2.default }),
      example: _react2.default.createElement(_TextVariations2.default, null),
      source: _TextVariations4.default
    }],
    propsTables: [{
      componentName: 'Text',
      componentSrc: _Text2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;