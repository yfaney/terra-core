'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabPane = require('../../../../TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextOnlyTabPane = function TextOnlyTabPane() {
  return _react2.default.createElement(
    'div',
    { role: 'tablist', style: { display: 'flex' } },
    _react2.default.createElement(_TabPane2.default, {
      label: 'Text only tab pane',
      id: 'textOnly'
    })
  );
};

exports.default = TextOnlyTabPane;