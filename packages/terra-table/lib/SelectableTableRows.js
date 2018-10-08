'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('terra-base/lib/baseStyles');

var _TableRows = require('./TableRows');

var _TableRows2 = _interopRequireDefault(_TableRows);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableHeader = require('./TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableSubheader = require('./TableSubheader');

var _TableSubheader2 = _interopRequireDefault(_TableSubheader);

var _SelectableUtils = require('./SelectableUtils');

var _SelectableUtils2 = _interopRequireDefault(_SelectableUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The children rows to be be passed to the component.
   */
  children: _propTypes2.default.node,
  /**
   * Indicates if the unselected rows are disabled. This is helpful for enabling max row selection.
   */
  disableUnselectedRows: _propTypes2.default.bool,
  /**
   * A callback function to execute when the selection state changes. The first parameter is the event. The second parameter is the selectedIndexes.
   */
  onChange: _propTypes2.default.func,
  /**
   * The list of selected row indexes.
   */
  // eslint-disable-next-line react/forbid-prop-types
  selectedIndexes: _propTypes2.default.array
};

var defaultProps = {
  disableUnselectedRows: false,
  onChange: undefined,
  selectedIndexes: []
};

var SelectableTableRows = function (_React$Component) {
  _inherits(SelectableTableRows, _React$Component);

  function SelectableTableRows(props) {
    _classCallCheck(this, SelectableTableRows);

    var _this = _possibleConstructorReturn(this, (SelectableTableRows.__proto__ || Object.getPrototypeOf(SelectableTableRows)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    return _this;
  }

  _createClass(SelectableTableRows, [{
    key: 'handleOnChange',
    value: function handleOnChange(event, index) {
      if (this.props.onChange) {
        this.props.onChange(event, index);
      }
    }
  }, {
    key: 'wrappedOnClickForRow',
    value: function wrappedOnClickForRow(row, index) {
      var _this2 = this;

      var initialOnClick = row.props.onClick;

      return function (event) {
        // The default isSelectable attribute is either undefined or true, unless the consumer specifies the row's isSelectable attribute as false.
        if (row.props.isSelectable !== false) {
          _this2.handleOnChange(event, index);
        }

        if (initialOnClick) {
          initialOnClick(event);
        }
      };
    }
  }, {
    key: 'wrappedOnKeyDownForRow',
    value: function wrappedOnKeyDownForRow(row, index) {
      var _this3 = this;

      var initialOnKeyDown = row.props.onKeyDown;

      return function (event) {
        if (event.nativeEvent.keyCode === _SelectableUtils2.default.KEYCODES.ENTER || event.nativeEvent.keyCode === _SelectableUtils2.default.KEYCODES.SPACE) {
          // The default isSelectable attribute is either undefined or true, unless the consumer specifies the row's isSelectable attribute as false.
          if (row.props.isSelectable !== false) {
            _this3.handleOnChange(event, index);
          }
        }

        if (initialOnKeyDown) {
          initialOnKeyDown(event);
        }
      };
    }
  }, {
    key: 'newPropsForRow',
    value: function newPropsForRow(row, index, onClick, onKeyDown) {
      var isSelected = this.props.selectedIndexes.indexOf(index) >= 0;
      var newProps = {};

      // Set the isSelected attribute to false for all the rows except the rows whose index is set to state selectedIndex.
      if (isSelected !== row.props.isSelected) {
        newProps.isSelected = isSelected;
      }

      // Set the default isSelectable attribute to true, unless the consumer specifies the row isSelectable as false.
      newProps.isSelectable = true;
      if (row.props.isSelectable === false) {
        newProps.isSelectable = row.props.isSelectable;
      }

      if (this.props.disableUnselectedRows && !isSelected) {
        newProps.isSelectable = false;
      }

      // If selectable, add tabIndex on rows to navigate through keyboard tab key for selectable row and add
      // onClick and onKeyDown functions.
      if (newProps.isSelectable) {
        newProps.tabIndex = '0';
        newProps.onClick = onClick;
        newProps.onKeyDown = onKeyDown;
      }

      return newProps;
    }
  }, {
    key: 'clonedChildItems',
    value: function clonedChildItems(rows) {
      var _this4 = this;

      return _react2.default.Children.map(rows, function (row, index) {
        if (row.type !== _TableHeader2.default && row.type !== _TableSubheader2.default) {
          var wrappedOnClick = _this4.wrappedOnClickForRow(row, index);
          var wrappedOnKeyDown = _this4.wrappedOnKeyDownForRow(row, index);
          var newProps = _this4.newPropsForRow(row, index, wrappedOnClick, wrappedOnKeyDown);
          return _react2.default.cloneElement(row, newProps);
        }
        return row;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          disableUnselectedRows = _props.disableUnselectedRows,
          onChange = _props.onChange,
          selectedIndexes = _props.selectedIndexes,
          customProps = _objectWithoutProperties(_props, ['children', 'disableUnselectedRows', 'onChange', 'selectedIndexes']);

      var clonedChildItems = this.clonedChildItems(children);

      return _react2.default.createElement(
        _TableRows2.default,
        customProps,
        clonedChildItems
      );
    }
  }]);

  return SelectableTableRows;
}(_react2.default.Component);

SelectableTableRows.propTypes = propTypes;
SelectableTableRows.defaultProps = defaultProps;
SelectableTableRows.Row = _TableRow2.default;
SelectableTableRows.Utils = _SelectableUtils2.default;

exports.default = SelectableTableRows;