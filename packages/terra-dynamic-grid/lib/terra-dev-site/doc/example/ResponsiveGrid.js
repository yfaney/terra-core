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
  'grid-template-columns': '1fr 1fr 1fr 1fr 1fr',
  'grid-template-rows': '100px',
  'grid-gap': '10px'
};

var region1 = {
  defaultPosition: {
    'grid-column-start': 1,
    'grid-row-start': 1
  },
  small: {
    'grid-column-start': 2
  },
  medium: {
    'grid-column-start': 3
  },
  large: {
    'grid-column-start': 4
  }
};

var region2 = {
  defaultPosition: {
    'grid-column-start': 2,
    'grid-row-start': 1
  },
  small: {
    'grid-column-start': 3
  },
  medium: {
    'grid-column-start': 4
  },
  large: {
    'grid-column-start': 5
  }
};

var region3 = {
  defaultPosition: {
    'grid-column-start': 3,
    'grid-row-start': 1
  },
  small: {
    'grid-column-start': 4
  },
  medium: {
    'grid-column-start': 5
  },
  large: {
    'grid-column-start': 1
  }
};

var region4 = {
  defaultPosition: {
    'grid-column-start': 4,
    'grid-row-start': 1
  },
  small: {
    'grid-column-start': 5
  },
  medium: {
    'grid-column-start': 1
  },
  large: {
    'grid-column-start': 2
  }
};

var region5 = {
  defaultPosition: {
    'grid-column-start': 5,
    'grid-row-start': 1
  },
  small: {
    'grid-column-start': 1
  },
  medium: {
    'grid-column-start': 2
  },
  large: {
    'grid-column-start': 3
  }
};

var ResponsiveGrid = function ResponsiveGrid() {
  return _react2.default.createElement(
    _DynamicGrid2.default,
    { defaultTemplate: template },
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      region1,
      _react2.default.createElement(
        _Card2.default,
        null,
        '1'
      )
    ),
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      region2,
      _react2.default.createElement(
        _Card2.default,
        null,
        '2'
      )
    ),
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      region3,
      _react2.default.createElement(
        _Card2.default,
        null,
        '3'
      )
    ),
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      region4,
      _react2.default.createElement(
        _Card2.default,
        null,
        '4'
      )
    ),
    _react2.default.createElement(
      _DynamicGrid2.default.Region,
      region5,
      _react2.default.createElement(
        _Card2.default,
        null,
        '5'
      )
    )
  );
};

exports.default = ResponsiveGrid;