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
var GridNested = function GridNested() {
  return _react2.default.createElement(
    _Grid2.default,
    null,
    _react2.default.createElement(
      _Grid2.default.Row,
      null,
      _react2.default.createElement(
        _Grid2.default.Column,
        { col: 4 },
        _react2.default.createElement(
          'div',
          { className: 'terra-grid-example' },
          '4 Columns'
        )
      ),
      _react2.default.createElement(
        _Grid2.default.Column,
        { col: 8 },
        _react2.default.createElement(
          'div',
          { className: 'terra-grid-example' },
          '8 Columns'
        ),
        _react2.default.createElement(
          _Grid2.default.Row,
          null,
          _react2.default.createElement(
            _Grid2.default.Column,
            { col: 5 },
            _react2.default.createElement(
              'div',
              { className: 'terra-grid-example' },
              '5 Nested Columns'
            )
          ),
          _react2.default.createElement(
            _Grid2.default.Column,
            { col: 7 },
            _react2.default.createElement(
              'div',
              { className: 'terra-grid-example' },
              '7 Nested Columns'
            )
          )
        )
      )
    )
  );
};

exports.default = GridNested;