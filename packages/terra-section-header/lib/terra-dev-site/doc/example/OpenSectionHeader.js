'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SectionHeaderExampleTemplate = require('terra-section-header/lib/terra-dev-site/doc/example/SectionHeaderExampleTemplate');

var _SectionHeaderExampleTemplate2 = _interopRequireDefault(_SectionHeaderExampleTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sectionHeaderProps = {
  title: 'Open',
  isOpen: true,
  onClick: function onClick() {}
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var OpenSectionheader = function OpenSectionheader() {
  return _react2.default.createElement(_SectionHeaderExampleTemplate2.default, { title: 'Open Section Header', exampleProps: sectionHeaderProps });
};

exports.default = OpenSectionheader;