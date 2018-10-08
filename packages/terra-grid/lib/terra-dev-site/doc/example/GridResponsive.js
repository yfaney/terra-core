'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('terra-grid/lib/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

require('./GridExample.module.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
var GridResponsive = function GridResponsive() {
  return _react2.default.createElement(
    _Grid2.default,
    null,
    _react2.default.createElement(
      _Grid2.default.Row,
      null,
      _react2.default.createElement(
        _Grid2.default.Column,
        { tiny: 12, small: 8, medium: 4, large: 6 },
        _react2.default.createElement(
          'div',
          { className: 'terra-grid-example' },
          'First Column content'
        )
      ),
      _react2.default.createElement(
        _Grid2.default.Column,
        { tiny: 12, small: 4, medium: 8, large: 6 },
        _react2.default.createElement(
          'div',
          { className: 'terra-grid-example' },
          'Second Column content'
        )
      )
    )
  );
};

exports.default = GridResponsive;