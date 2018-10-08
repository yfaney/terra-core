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

var _Avatar = require('!raw-loader!../../../../src/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _AvatarUser = require('../example/AvatarUser');

var _AvatarUser2 = _interopRequireDefault(_AvatarUser);

var _AvatarUser3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AvatarUser');

var _AvatarUser4 = _interopRequireDefault(_AvatarUser3);

var _AvatarFacility = require('../example/AvatarFacility');

var _AvatarFacility2 = _interopRequireDefault(_AvatarFacility);

var _AvatarFacility3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AvatarFacility');

var _AvatarFacility4 = _interopRequireDefault(_AvatarFacility3);

var _AvatarTwoInitials = require('../example/AvatarTwoInitials');

var _AvatarTwoInitials2 = _interopRequireDefault(_AvatarTwoInitials);

var _AvatarTwoInitials3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AvatarTwoInitials');

var _AvatarTwoInitials4 = _interopRequireDefault(_AvatarTwoInitials3);

var _AvatarThreeInitials = require('../example/AvatarThreeInitials');

var _AvatarThreeInitials2 = _interopRequireDefault(_AvatarThreeInitials);

var _AvatarThreeInitials3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AvatarThreeInitials');

var _AvatarThreeInitials4 = _interopRequireDefault(_AvatarThreeInitials3);

var _AvatarImage = require('../example/AvatarImage');

var _AvatarImage2 = _interopRequireDefault(_AvatarImage);

var _AvatarImage3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/AvatarImage');

var _AvatarImage4 = _interopRequireDefault(_AvatarImage3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'User',
      example: _react2.default.createElement(_AvatarUser2.default, null),
      source: _AvatarUser4.default
    }, {
      title: 'Facility',
      example: _react2.default.createElement(_AvatarFacility2.default, null),
      source: _AvatarFacility4.default
    }, {
      title: 'Initials (2)',
      example: _react2.default.createElement(_AvatarTwoInitials2.default, null),
      source: _AvatarTwoInitials4.default
    }, {
      title: 'Initials (3)',
      example: _react2.default.createElement(_AvatarThreeInitials2.default, null),
      source: _AvatarThreeInitials4.default
    }, {
      title: 'Image',
      example: _react2.default.createElement(_AvatarImage2.default, null),
      source: _AvatarImage4.default
    }],
    propsTables: [{
      componentName: 'Avatar',
      componentSrc: _Avatar2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;