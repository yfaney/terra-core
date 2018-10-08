'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SectionHeader = require('../../../SectionHeader');

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OnClickSectionHeader = function OnClickSectionHeader() {
  return _react2.default.createElement(_SectionHeader2.default, {
    title: 'OnClick Section Header'
    // eslint-disable-next-line no-alert
    , onClick: function onClick() {
      window.alert('The accordion has been clicked!');
    },
    className: 'onClickHeader'
  });
};

exports.default = OnClickSectionHeader;