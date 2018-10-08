'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('../../../../lib/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridResponsive = function GridResponsive() {
  return _react2.default.createElement(
    _Grid2.default,
    { id: 'grid' },
    _react2.default.createElement(
      _Grid2.default.Row,
      { id: 'row' },
      _react2.default.createElement(
        _Grid2.default.Column,
        { id: 'column-1', tiny: 12, small: 8, medium: 4, large: 6 },
        _react2.default.createElement(
          'div',
          { className: 'terra-Grid-example' },
          'First Column content'
        )
      ),
      _react2.default.createElement(
        _Grid2.default.Column,
        { id: 'column-2', tiny: 12, small: 4, medium: 8, large: 6 },
        _react2.default.createElement(
          'div',
          { className: 'terra-Grid-example' },
          'Second Column content'
        )
      )
    )
  );
};

exports.default = GridResponsive;