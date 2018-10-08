'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconSearch = require('terra-icon/lib/icon/IconSearch');

var _IconSearch2 = _interopRequireDefault(_IconSearch);

var _TabPane = require('../../../../TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomDisplayTabPane = function CustomDisplayTabPane() {
  return _react2.default.createElement(
    'div',
    { role: 'tablist', style: { display: 'flex' } },
    _react2.default.createElement(_TabPane2.default, {
      label: 'Custom Display',
      id: 'customDisplay',
      customDisplay: _react2.default.createElement(
        'div',
        { id: 'customDisplayContent' },
        _react2.default.createElement(
          'span',
          { style: { marginRight: '15px' } },
          'Custom Display'
        ),
        _react2.default.createElement(_IconSearch2.default, null)
      )
    })
  );
};

exports.default = CustomDisplayTabPane;