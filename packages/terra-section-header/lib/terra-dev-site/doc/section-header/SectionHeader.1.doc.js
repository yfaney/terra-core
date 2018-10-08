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

var _SectionHeader = require('!raw-loader!../../../../src/SectionHeader');

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _DefaultSectionHeader = require('../example/DefaultSectionHeader');

var _DefaultSectionHeader2 = _interopRequireDefault(_DefaultSectionHeader);

var _DefaultSectionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultSectionHeader');

var _DefaultSectionHeader4 = _interopRequireDefault(_DefaultSectionHeader3);

var _LongTitleSectionHeader = require('../example/LongTitleSectionHeader');

var _LongTitleSectionHeader2 = _interopRequireDefault(_LongTitleSectionHeader);

var _LongTitleSectionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/LongTitleSectionHeader');

var _LongTitleSectionHeader4 = _interopRequireDefault(_LongTitleSectionHeader3);

var _LongTitleAccordionSectionHeader = require('../example/LongTitleAccordionSectionHeader');

var _LongTitleAccordionSectionHeader2 = _interopRequireDefault(_LongTitleAccordionSectionHeader);

var _LongTitleAccordionSectionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/LongTitleAccordionSectionHeader');

var _LongTitleAccordionSectionHeader4 = _interopRequireDefault(_LongTitleAccordionSectionHeader3);

var _ClosedSectionHeader = require('../example/ClosedSectionHeader');

var _ClosedSectionHeader2 = _interopRequireDefault(_ClosedSectionHeader);

var _ClosedSectionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ClosedSectionHeader');

var _ClosedSectionHeader4 = _interopRequireDefault(_ClosedSectionHeader3);

var _OpenSectionHeader = require('../example/OpenSectionHeader');

var _OpenSectionHeader2 = _interopRequireDefault(_OpenSectionHeader);

var _OpenSectionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/OpenSectionHeader');

var _OpenSectionHeader4 = _interopRequireDefault(_OpenSectionHeader3);

var _OnClickSectionHeader = require('../example/OnClickSectionHeader');

var _OnClickSectionHeader2 = _interopRequireDefault(_OnClickSectionHeader);

var _OnClickSectionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/OnClickSectionHeader');

var _OnClickSectionHeader4 = _interopRequireDefault(_OnClickSectionHeader3);

var _AccordionSectionHeader = require('../example/AccordionSectionHeader');

var _AccordionSectionHeader2 = _interopRequireDefault(_AccordionSectionHeader);

var _AccordionSectionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AccordionSectionHeader');

var _AccordionSectionHeader4 = _interopRequireDefault(_AccordionSectionHeader3);

var _TransparentSectionHeader = require('../example/TransparentSectionHeader');

var _TransparentSectionHeader2 = _interopRequireDefault(_TransparentSectionHeader);

var _TransparentSectionHeader3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/TransparentSectionHeader');

var _TransparentSectionHeader4 = _interopRequireDefault(_TransparentSectionHeader3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      example: _react2.default.createElement(_DefaultSectionHeader2.default, null),
      source: _DefaultSectionHeader4.default
    }, {
      example: _react2.default.createElement(_LongTitleSectionHeader2.default, null),
      source: _LongTitleSectionHeader4.default
    }, {
      example: _react2.default.createElement(_LongTitleAccordionSectionHeader2.default, null),
      source: _LongTitleAccordionSectionHeader4.default
    }, {
      example: _react2.default.createElement(_ClosedSectionHeader2.default, null),
      source: _ClosedSectionHeader4.default
    }, {
      example: _react2.default.createElement(_OpenSectionHeader2.default, null),
      source: _OpenSectionHeader4.default
    }, {
      example: _react2.default.createElement(_OnClickSectionHeader2.default, null),
      source: _OnClickSectionHeader4.default
    }, {
      example: _react2.default.createElement(_AccordionSectionHeader2.default, null),
      source: _AccordionSectionHeader4.default
    }, {
      example: _react2.default.createElement(_TransparentSectionHeader2.default, null),
      source: _TransparentSectionHeader4.default
    }],
    propsTables: [{
      componentName: 'Section Header',
      componentSrc: _SectionHeader2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;