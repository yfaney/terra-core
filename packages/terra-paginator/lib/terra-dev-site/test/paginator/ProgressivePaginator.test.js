'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProgressivePaginator = require('../../../ProgressivePaginator');

var _ProgressivePaginator2 = _interopRequireDefault(_ProgressivePaginator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressivePaginatorExample = function ProgressivePaginatorExample() {
  return (
    // eslint-disable-next-line no-console
    _react2.default.createElement(_ProgressivePaginator2.default, { onPageChange: function onPageChange(i) {
        return console.log(i);
      }, selectedPage: 1, totalCount: 2234, itemCountPerPage: 20 })
  );
};

exports.default = ProgressivePaginatorExample;