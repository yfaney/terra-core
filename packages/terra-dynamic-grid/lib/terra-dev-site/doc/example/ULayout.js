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
  'grid-template-columns': '1fr 1fr 1fr',
  'grid-template-rows': 'auto auto',
  'grid-gap': '10px'
};

var region1 = {
  'grid-column-start': 1,
  'grid-column-end': 4,
  'grid-row-start': 1
};

var region2 = {
  'grid-column-start': 1,
  'grid-row-start': 2
};

var region3 = {
  'grid-column-start': 3,
  'grid-row-start': 2
};

var ULayout = function ULayout() {
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
    ),
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      { defaultPosition: region2 },
      _react2.default.createElement(
        _Card2.default,
        null,
        'Region 2'
      )
    ),
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      { defaultPosition: region3 },
      _react2.default.createElement(
        _Card2.default,
        null,
        'Region 3'
      )
    )
  );
};

exports.default = ULayout;