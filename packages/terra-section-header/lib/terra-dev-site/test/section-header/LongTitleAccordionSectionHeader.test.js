'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SectionHeader = require('../../../SectionHeader');

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LongTitleAccordionSectionHeader = function LongTitleAccordionSectionHeader() {
  return _react2.default.createElement(_SectionHeader2.default, {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu',
    onClick: function onClick() {},
    isOpen: true,
    className: 'accordionContent'
  });
};

exports.default = LongTitleAccordionSectionHeader;