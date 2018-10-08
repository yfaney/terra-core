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
  title: 'I\'m clickable, click me',
  onClick: function onClick() {
    // eslint-disable-next-line no-alert
    window.alert('The accordion has been clicked!');
  }
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var OnClickSectionHeader = function OnClickSectionHeader() {
  return _react2.default.createElement(_SectionHeaderExampleTemplate2.default, { title: 'OnClick Section Header', exampleProps: sectionHeaderProps });
};

exports.default = OnClickSectionHeader;