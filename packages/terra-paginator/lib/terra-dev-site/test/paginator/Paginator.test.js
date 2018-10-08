'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paginator = require('../../../Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginatorExample = function PaginatorExample() {
  return (
    // eslint-disable-next-line no-console
    _react2.default.createElement(_Paginator2.default, { onPageChange: function onPageChange(i) {
        return console.log(i);
      }, selectedPage: 1, totalCount: 2234, itemCountPerPage: 20 })
  );
};

exports.default = PaginatorExample;