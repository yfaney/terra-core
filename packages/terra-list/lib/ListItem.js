'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _IconChevronRight = require('terra-icon/lib/icon/IconChevronRight');

var _IconChevronRight2 = _interopRequireDefault(_IconChevronRight);

var _ListModule = require('./List.module.scss');

var _ListModule2 = _interopRequireDefault(_ListModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ListModule2.default);

var propTypes = {
  /**
   * The content element to be placed inside the list item for display.
   */
  content: _propTypes2.default.element,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  isSelected: _propTypes2.default.bool,
  /**
   * Whether or not the list item should have styles to indicate the item is selectable.
   */
  isSelectable: _propTypes2.default.bool,
  /**
   * Whether or not the list item has a disclosure indicator presented.
   */
  hasChevron: _propTypes2.default.bool,
  /**
   * Function callback for the ref of the li.
   */
  refCallback: _propTypes2.default.func
};

var defaultProps = {
  content: undefined,
  isSelected: false,
  isSelectable: undefined,
  hasChevron: undefined
};

var ListItem = function ListItem(_ref) {
  var content = _ref.content,
      isSelected = _ref.isSelected,
      isSelectable = _ref.isSelectable,
      hasChevron = _ref.hasChevron,
      refCallback = _ref.refCallback,
      customProps = _objectWithoutProperties(_ref, ['content', 'isSelected', 'isSelectable', 'hasChevron', 'refCallback']);

  var listItemClassNames = cx(['list-item', { selected: isSelected }, { 'is-selectable': isSelectable }, customProps.className]);

  var ariaSpread = isSelectable ? { role: 'option', 'aria-selected': isSelected } : {};

  if (hasChevron) {
    var chevron = _react2.default.createElement(
      'span',
      { className: cx('chevron') },
      _react2.default.createElement(_IconChevronRight2.default, { height: '0.8em', width: '0.8em' })
    );

    return _react2.default.createElement(
      'li',
      _extends({}, customProps, ariaSpread, { className: listItemClassNames, ref: refCallback }),
      _react2.default.createElement(_terraArrange2.default, {
        fill: content,
        fitEnd: chevron,
        align: 'center',
        fillAttributes: { className: cx('arrange-content') }
      })
    );
  }

  return _react2.default.createElement(
    'li',
    _extends({}, customProps, ariaSpread, { className: listItemClassNames, ref: refCallback }),
    content
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

exports.default = ListItem;