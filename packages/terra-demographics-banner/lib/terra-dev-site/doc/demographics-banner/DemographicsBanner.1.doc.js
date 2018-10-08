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

var _DemographicsBanner = require('../../../DemographicsBanner');

var _DemographicsBanner2 = _interopRequireDefault(_DemographicsBanner);

var _DemographicsBanner3 = require('!raw-loader!../../../../src/DemographicsBanner.jsx');

var _DemographicsBanner4 = _interopRequireDefault(_DemographicsBanner3);

var _DemographicsBannerAdditionalAges = require('../example/DemographicsBannerAdditionalAges');

var _DemographicsBannerAdditionalAges2 = _interopRequireDefault(_DemographicsBannerAdditionalAges);

var _DemographicsBannerAdditionalAges3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DemographicsBannerAdditionalAges');

var _DemographicsBannerAdditionalAges4 = _interopRequireDefault(_DemographicsBannerAdditionalAges3);

var _DemographicsBannerAdditionalDetails = require('../example/DemographicsBannerAdditionalDetails');

var _DemographicsBannerAdditionalDetails2 = _interopRequireDefault(_DemographicsBannerAdditionalDetails);

var _DemographicsBannerAdditionalDetails3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DemographicsBannerAdditionalDetails');

var _DemographicsBannerAdditionalDetails4 = _interopRequireDefault(_DemographicsBannerAdditionalDetails3);

var _DemographicsBannerBasic = require('../example/DemographicsBannerBasic');

var _DemographicsBannerBasic2 = _interopRequireDefault(_DemographicsBannerBasic);

var _DemographicsBannerBasic3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DemographicsBannerBasic');

var _DemographicsBannerBasic4 = _interopRequireDefault(_DemographicsBannerBasic3);

var _DemographicsBannerDeceased = require('../example/DemographicsBannerDeceased');

var _DemographicsBannerDeceased2 = _interopRequireDefault(_DemographicsBannerDeceased);

var _DemographicsBannerDeceased3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DemographicsBannerDeceased');

var _DemographicsBannerDeceased4 = _interopRequireDefault(_DemographicsBannerDeceased3);

var _DemographicsBannerSmallContainer = require('../example/DemographicsBannerSmallContainer');

var _DemographicsBannerSmallContainer2 = _interopRequireDefault(_DemographicsBannerSmallContainer);

var _DemographicsBannerSmallContainer3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/DemographicsBannerSmallContainer');

var _DemographicsBannerSmallContainer4 = _interopRequireDefault(_DemographicsBannerSmallContainer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Source


/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Basic Demographics Banner',
      example: _react2.default.createElement(_DemographicsBannerBasic2.default, null),
      source: _DemographicsBannerBasic4.default
    }, {
      title: 'Demographics Banner with Missing Data',
      example: _react2.default.createElement(_DemographicsBanner2.default, null),
      source: _DemographicsBanner4.default
    }, {
      title: 'Deceased Demographics Banners',
      example: _react2.default.createElement(_DemographicsBannerDeceased2.default, null),
      source: _DemographicsBannerDeceased4.default
    }, {
      title: 'Demographics Banner with Gestational and Post Menstrural Ages',
      example: _react2.default.createElement(_DemographicsBannerAdditionalAges2.default, null),
      source: _DemographicsBannerAdditionalAges4.default
    }, {
      title: 'Demographics Banner with Additional Details',
      example: _react2.default.createElement(_DemographicsBannerAdditionalDetails2.default, null),
      source: _DemographicsBannerAdditionalDetails4.default
    }, {
      title: 'Demographics Banner in a Small Container',
      example: _react2.default.createElement(_DemographicsBannerSmallContainer2.default, null),
      source: _DemographicsBannerSmallContainer4.default
    }],
    propsTables: [{
      componentName: 'Demographics Banner',
      componentSrc: _DemographicsBanner4.default
    }]
  });
};
// Component Source
exports.default = DocPage;