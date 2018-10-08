'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('../../../../lib/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

require('./GridExample.module.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridNested = function GridNested() {
  return _react2.default.createElement(
    _Grid2.default,
    { id: 'grid' },
    _react2.default.createElement(
      _Grid2.default.Row,
      { id: 'row' },
      _react2.default.createElement(
        _Grid2.default.Column,
        { id: 'column-1', col: 4 },
        _react2.default.createElement(
          'div',
          { className: 'terra-Grid-example' },
          '4 Columns'
        )
      ),
      _react2.default.createElement(
        _Grid2.default.Column,
        { id: 'column-2', col: 8 },
        _react2.default.createElement(
          'div',
          { className: 'terra-Grid-example' },
          '8 Columns'
        ),
        _react2.default.createElement(
          _Grid2.default.Row,
          { id: 'nested-row' },
          _react2.default.createElement(
            _Grid2.default.Column,
            { id: 'nested-column-1', col: 5 },
            _react2.default.createElement(
              'div',
              { id: 'nested-column-1-text', className: 'terra-Grid-example' },
              '5 Nested Columns'
            )
          ),
          _react2.default.createElement(
            _Grid2.default.Column,
            { id: 'nested-column-2', col: 7 },
            _react2.default.createElement(
              'div',
              { id: 'nested-column-2-text', className: 'terra-Grid-example' },
              '7 Nested Columns'
            )
          )
        )
      )
    )
  );
};

exports.default = GridNested;