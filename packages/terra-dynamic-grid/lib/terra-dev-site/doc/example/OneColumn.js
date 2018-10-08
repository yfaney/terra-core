'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DynamicGrid = require('terra-dynamic-grid/lib/DynamicGrid');

var _DynamicGrid2 = _interopRequireDefault(_DynamicGrid);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
var template = {
  'grid-template-columns': '1fr',
  'grid-template-rows': 'auto'
};

var region1 = {
  'grid-column-start': 1,
  'grid-column-end': 1,
  'grid-row-start': 1,
  'grid-row-end': 1
};

var OneColumn = function OneColumn() {
  return _react2.default.createElement(
    _DynamicGrid2.default,
    { defaultTemplate: template },
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      { defaultPosition: region1 },
      _react2.default.createElement(
        _Card2.default,
        null,
        'Region 1'
      )
    )
  );
};

exports.default = OneColumn;