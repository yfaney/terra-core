'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHeaderCellSort = exports.TableHeaderCellMinWidth = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconCaretDown = require('terra-icon/lib/icon/IconCaretDown');

var _IconCaretDown2 = _interopRequireDefault(_IconCaretDown);

var _IconCaretUp = require('terra-icon/lib/icon/IconCaretUp');

var _IconCaretUp2 = _interopRequireDefault(_IconCaretUp);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _TableModule = require('./Table.module.scss');

var _TableModule2 = _interopRequireDefault(_TableModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_TableModule2.default);

var TableHeaderCellMinWidth = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge'
};

var TableHeaderCellSort = {
  ASC: 'asc',
  DESC: 'desc'
};

var propTypes = {
  /**
   * Content to be displayed for the column header
   */
  content: _propTypes2.default.node.isRequired,
  /**
   * The minimum width for the column
   */
  minWidth: _propTypes2.default.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Whether or not data in table is sorted (asc, desc)
   */
  sort: _propTypes2.default.oneOf(['asc', 'desc'])
};

var defaultProps = {
  minWidth: 'small'
};

var iconDown = _react2.default.createElement(_IconCaretDown2.default, null);
var iconUp = _react2.default.createElement(_IconCaretUp2.default, null);

var TableHeaderCell = function TableHeaderCell(_ref) {
  var content = _ref.content,
      minWidth = _ref.minWidth,
      sort = _ref.sort,
      customProps = _objectWithoutProperties(_ref, ['content', 'minWidth', 'sort']);

  var contentClassName = cx([_defineProperty({}, 'min-width-' + minWidth, minWidth), customProps.className]);

  var dataSort = {
    'data-sort': sort
  };

  var sortIndicator = null;
  if (sort === 'asc') {
    sortIndicator = _react2.default.createElement(
      'span',
      { className: cx('sort-indicator') },
      iconUp
    );
  } else if (sort === 'desc') {
    sortIndicator = _react2.default.createElement(
      'span',
      { className: cx('sort-indicator') },
      iconDown
    );
  }

  return _react2.default.createElement(
    'th',
    _extends({}, customProps, { 'data-terra-table-header-cell': true, className: contentClassName }, dataSort),
    content,
    sortIndicator
  );
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

exports.default = TableHeaderCell;
exports.TableHeaderCellMinWidth = TableHeaderCellMinWidth;
exports.TableHeaderCellSort = TableHeaderCellSort;