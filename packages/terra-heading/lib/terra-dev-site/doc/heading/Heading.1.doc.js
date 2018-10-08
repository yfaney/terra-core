'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _terraMarkdown = require('terra-markdown');

var _terraMarkdown2 = _interopRequireDefault(_terraMarkdown);

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _headingLevels = require('../../../../docs/heading-levels.md');

var _headingLevels2 = _interopRequireDefault(_headingLevels);

var _headingSizes = require('../../../../docs/heading-sizes.md');

var _headingSizes2 = _interopRequireDefault(_headingSizes);

var _headingColors = require('../../../../docs/heading-colors.md');

var _headingColors2 = _interopRequireDefault(_headingColors);

var _headingWeights = require('../../../../docs/heading-weights.md');

var _headingWeights2 = _interopRequireDefault(_headingWeights);

var _headingVisuallyHidden = require('../../../../docs/heading-visually-hidden.md');

var _headingVisuallyHidden2 = _interopRequireDefault(_headingVisuallyHidden);

var _headingVariations = require('../../../../docs/heading-variations.md');

var _headingVariations2 = _interopRequireDefault(_headingVariations);

var _package = require('../../../../package.json');

var _Heading = require('!raw-loader!../../../../src/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _HeadingColors = require('../example/HeadingColors');

var _HeadingColors2 = _interopRequireDefault(_HeadingColors);

var _HeadingColors3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/HeadingColors');

var _HeadingColors4 = _interopRequireDefault(_HeadingColors3);

var _HeadingLevels = require('../example/HeadingLevels');

var _HeadingLevels2 = _interopRequireDefault(_HeadingLevels);

var _HeadingLevels3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/HeadingLevels');

var _HeadingLevels4 = _interopRequireDefault(_HeadingLevels3);

var _HeadingSizes = require('../example/HeadingSizes');

var _HeadingSizes2 = _interopRequireDefault(_HeadingSizes);

var _HeadingSizes3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/HeadingSizes');

var _HeadingSizes4 = _interopRequireDefault(_HeadingSizes3);

var _HeadingVisuallyHidden = require('../example/HeadingVisuallyHidden');

var _HeadingVisuallyHidden2 = _interopRequireDefault(_HeadingVisuallyHidden);

var _HeadingVisuallyHidden3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/HeadingVisuallyHidden');

var _HeadingVisuallyHidden4 = _interopRequireDefault(_HeadingVisuallyHidden3);

var _HeadingWeights = require('../example/HeadingWeights');

var _HeadingWeights2 = _interopRequireDefault(_HeadingWeights);

var _HeadingWeights3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/HeadingWeights');

var _HeadingWeights4 = _interopRequireDefault(_HeadingWeights3);

var _HeadingVariations = require('../example/HeadingVariations');

var _HeadingVariations2 = _interopRequireDefault(_HeadingVariations);

var _HeadingVariations3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/HeadingVariations');

var _HeadingVariations4 = _interopRequireDefault(_HeadingVariations3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      description: _react2.default.createElement(_terraMarkdown2.default, { id: 'heading-level-docs', src: _headingLevels2.default }),
      example: _react2.default.createElement(_HeadingLevels2.default, null),
      source: _HeadingLevels4.default
    }, {
      description: _react2.default.createElement(_terraMarkdown2.default, { id: 'heading-size-docs', src: _headingSizes2.default }),
      example: _react2.default.createElement(_HeadingSizes2.default, null),
      source: _HeadingSizes4.default
    }, {
      description: _react2.default.createElement(_terraMarkdown2.default, { id: 'heading-color-docs', src: _headingColors2.default }),
      example: _react2.default.createElement(_HeadingColors2.default, null),
      source: _HeadingColors4.default
    }, {
      description: _react2.default.createElement(_terraMarkdown2.default, { id: 'heading-weights-docs', src: _headingWeights2.default }),
      example: _react2.default.createElement(_HeadingWeights2.default, null),
      source: _HeadingWeights4.default
    }, {
      description: _react2.default.createElement(_terraMarkdown2.default, { id: 'heading-visually-hidden-docs', src: _headingVisuallyHidden2.default }),
      example: _react2.default.createElement(_HeadingVisuallyHidden2.default, null),
      source: _HeadingVisuallyHidden4.default
    }, {
      description: _react2.default.createElement(_terraMarkdown2.default, { id: 'heading-variation-docs', src: _headingVariations2.default }),
      example: _react2.default.createElement(_HeadingVariations2.default, null),
      source: _HeadingVariations4.default
    }],
    propsTables: [{
      componentName: 'Heading',
      componentSrc: _Heading2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;