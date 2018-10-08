'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DynamicGrid = require('../../../DynamicGrid');

var _DynamicGrid2 = _interopRequireDefault(_DynamicGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = {
  'grid-template-columns': '100px 100px',
  'grid-template-rows': '100px',
  'grid-gap': '10px'
};

var region1 = {
  'grid-column-start': 1,
  'grid-row-start': 1
};

var region2 = {
  'grid-column-start': 2,
  'grid-row-start': 1
};

exports.default = function () {
  return _react2.default.createElement(
    _DynamicGrid2.default,
    { id: 'defaultDynamicGrid', large: template },
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      { id: 'region1', large: region1 },
      'R1'
    ),
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      { id: 'region2', large: region2 },
      'R2'
    )
  );
};