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

var _Badge = require('!raw-loader!../../../../src/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _BadgeIntent = require('../example/BadgeIntent');

var _BadgeIntent2 = _interopRequireDefault(_BadgeIntent);

var _BadgeIntent3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/BadgeIntent');

var _BadgeIntent4 = _interopRequireDefault(_BadgeIntent3);

var _BadgeSize = require('../example/BadgeSize');

var _BadgeSize2 = _interopRequireDefault(_BadgeSize);

var _BadgeSize3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/BadgeSize');

var _BadgeSize4 = _interopRequireDefault(_BadgeSize3);

var _BadgeIcon = require('../example/BadgeIcon');

var _BadgeIcon2 = _interopRequireDefault(_BadgeIcon);

var _BadgeIcon3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/BadgeIcon');

var _BadgeIcon4 = _interopRequireDefault(_BadgeIcon3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Intent',
      example: _react2.default.createElement(_BadgeIntent2.default, null),
      source: _BadgeIntent4.default
    }, {
      title: 'Size',
      example: _react2.default.createElement(_BadgeSize2.default, null),
      source: _BadgeSize4.default
    }, {
      title: 'Icon',
      example: _react2.default.createElement(_BadgeIcon2.default, null),
      source: _BadgeIcon4.default
    }],
    propsTables: [{
      componentName: 'Badge',
      componentSrc: _Badge2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;