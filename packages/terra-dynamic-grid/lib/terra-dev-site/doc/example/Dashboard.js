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
  'grid-template-columns': '3fr 1fr 3fr',
  'grid-template-rows': 'auto auto auto auto'
};

var leftGutter = {
  'grid-column-start': 1,
  'grid-row-start': 1,
  'grid-row-end': 5
};

var rightGutter = {
  'grid-column-start': 3,
  'grid-row-start': 1,
  'grid-row-end': 5
};

var notification = {
  'grid-column-start': 2,
  'grid-column-end': 3,
  'grid-row-start': 1
};

var region1 = {
  'grid-column-start': 2,
  'grid-row-start': 2,
  style: {
    padding: '0 5px 5px 5px'
  }
};

var region2 = {
  'grid-column-start': 2,
  'grid-row-start': 3,
  style: {
    padding: '5px'
  }
};

var region3 = {
  name: 'r3',
  'grid-column-start': 2,
  'grid-row-start': 4,
  style: {
    padding: '5px 5px 0'
  }
};

var DashboardLayout = function DashboardLayout() {
  return _react2.default.createElement(
    _DynamicGrid2.default,
    { defaultTemplate: template },
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      { defaultPosition: leftGutter },
      _react2.default.createElement(
        _Card2.default,
        null,
        'left gutter'
      )
    ),
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      { defaultPosition: notification },
      _react2.default.createElement(
        _Card2.default,
        null,
        'notification'
      )
    ),
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      { defaultPosition: rightGutter },
      _react2.default.createElement(
        _Card2.default,
        null,
        'right gutter'
      )
    ),
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      { defaultPosition: region1 },
      _react2.default.createElement(
        _Card2.default,
        null,
        'r1'
      )
    ),
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      { defaultPosition: region2 },
      _react2.default.createElement(
        _Card2.default,
        null,
        'r2'
      )
    ),
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      { defaultPosition: region3 },
      _react2.default.createElement(
        _Card2.default,
        null,
        'r3'
      )
    )
  );
};

exports.default = DashboardLayout;