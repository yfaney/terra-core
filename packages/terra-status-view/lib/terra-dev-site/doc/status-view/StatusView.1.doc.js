'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _IconDiamond = require('terra-icon/lib/icon/IconDiamond');

var _IconDiamond2 = _interopRequireDefault(_IconDiamond);

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('../../../../package.json');

var _StatusView = require('!raw-loader!../../../../src/StatusView');

var _StatusView2 = _interopRequireDefault(_StatusView);

var _StatusViewTemplate = require('../example/StatusViewTemplate');

var _StatusViewTemplate2 = _interopRequireDefault(_StatusViewTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Status View:  No props given',
      example: _react2.default.createElement(_StatusViewTemplate2.default, { style: { width: '500px' } })
    }, {
      title: 'Status View:  All props given',
      example: _react2.default.createElement(
        _StatusViewTemplate2.default,
        {
          style: { width: '500px' },
          variant: 'no-data',
          title: '500',
          message: 'An exception was thrown',
          customGlyph: _react2.default.createElement(_IconDiamond2.default, null)
        },
        _react2.default.createElement(_terraButton2.default, { text: 'OK', key: '1', size: 'medium' }),
        _react2.default.createElement(_terraButton2.default, { text: 'Cancel', key: '2', size: 'medium' })
      )
    }, {
      title: 'Status View:  Text Wrapping',
      example: _react2.default.createElement(
        _StatusViewTemplate2.default,
        {
          style: { width: '500px' },
          variant: 'error',
          title: 'A 500 error was thrown from the service.  Retry again later when new service is deployed at a later date in the future.',
          message: 'A null pointer exception was thrown from the input parameters.  The params of min and max-value were not present.  They need to be present for verification purposes for keeping the database clean and consistent',
          customGlyph: _react2.default.createElement(_IconDiamond2.default, null)
        },
        _react2.default.createElement(_terraButton2.default, { text: 'OK, here is some really really long text to make the button take up a bunch of space.', key: '1', size: 'medium' }),
        _react2.default.createElement(_terraButton2.default, { text: 'Cancel, here is some really really long text to make the button take up a bunch of space.', key: '2', size: 'medium' })
      )
    }, {
      title: 'Status View:  Glyph Hidden',
      example: _react2.default.createElement(
        _StatusViewTemplate2.default,
        {
          style: { width: '500px' },
          variant: 'error',
          message: 'An exception was thrown',
          isGlyphHidden: true,
          title: '500'
        },
        _react2.default.createElement(_terraButton2.default, { text: 'OK', key: '1', size: 'medium' }),
        _react2.default.createElement(_terraButton2.default, { text: 'Cancel', key: '2', size: 'medium' })
      )
    }, {
      title: 'Status View:  Large Container',
      example: _react2.default.createElement(
        _StatusViewTemplate2.default,
        {
          style: { height: '500px', width: '500px' },
          variant: 'error',
          message: 'An exception was thrown',
          customGlyph: _react2.default.createElement(_IconDiamond2.default, null),
          title: '500'
        },
        _react2.default.createElement(_terraButton2.default, { text: 'OK', key: '1', size: 'medium' }),
        _react2.default.createElement(_terraButton2.default, { text: 'Cancel', key: '2', size: 'medium' })
      )
    }, {
      title: 'Status View:  Align Top',
      example: _react2.default.createElement(
        _StatusViewTemplate2.default,
        {
          style: { height: '500px', width: '500px' },
          isAlignedTop: true,
          variant: 'error',
          message: 'An exception was thrown',
          customGlyph: _react2.default.createElement(_IconDiamond2.default, null),
          title: '500'
        },
        _react2.default.createElement(_terraButton2.default, { text: 'OK', key: '1', size: 'medium' }),
        _react2.default.createElement(_terraButton2.default, { text: 'Cancel', key: '2', size: 'medium' })
      )
    }, {
      title: 'Status View:  Glyph cannot fit',
      example: _react2.default.createElement(
        _StatusViewTemplate2.default,
        {
          style: { height: '220px', width: '500px', overflow: 'auto' },
          variant: 'error',
          message: 'An exception was thrown',
          customGlyph: _react2.default.createElement(_IconDiamond2.default, null),
          title: '500'
        },
        _react2.default.createElement(_terraButton2.default, { text: 'OK', key: '1', size: 'medium' }),
        _react2.default.createElement(_terraButton2.default, { text: 'Cancel', key: '2', size: 'medium' })
      )
    }],
    propsTables: [{
      componentName: 'Status View',
      componentSrc: _StatusView2.default
    }]
  });
};

// Example Files
exports.default = DocPage;