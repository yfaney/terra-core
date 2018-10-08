'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('terra-base/lib/baseStyles');

var _SelectableList = require('./SelectableList');

var _SelectableList2 = _interopRequireDefault(_SelectableList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: _propTypes2.default.node,
  /**
   * Whether or not the child list items should have a border color applied.
   */
  isDivided: _propTypes2.default.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: _propTypes2.default.func,
  /**
   * The maximum number of list items that can be selected.
   */
  maxSelectionCount: _propTypes2.default.number
};

var defaultProps = {
  children: [],
  isDivided: false,
  onChange: undefined,
  maxSelectionCount: undefined
};

var MultiSelectList = function (_React$Component) {
  _inherits(MultiSelectList, _React$Component);

  function MultiSelectList(props) {
    _classCallCheck(this, MultiSelectList);

    var _this = _possibleConstructorReturn(this, (MultiSelectList.__proto__ || Object.getPrototypeOf(MultiSelectList)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.state = { selectedIndexes: _SelectableList2.default.Utils.initialMultiSelectedIndexes(props.children, props.maxSelectionCount) };
    return _this;
  }

  _createClass(MultiSelectList, [{
    key: 'handleOnChange',
    value: function handleOnChange(event, index) {
      var _props = this.props,
          children = _props.children,
          maxSelectionCount = _props.maxSelectionCount;

      if (_SelectableList2.default.Utils.shouldHandleMultiSelect(children, maxSelectionCount, this.state.selectedIndexes, index)) {
        event.preventDefault();
        /* eslint-disable react/no-access-state-in-setstate */
        var newIndexes = _SelectableList2.default.Utils.updatedMultiSelectedIndexes(this.state.selectedIndexes, index);

        this.setState({ selectedIndexes: newIndexes });
        /* eslint-enable react/no-access-state-in-setstate */
        if (this.props.onChange) {
          this.props.onChange(event, newIndexes);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          isDivided = _props2.isDivided,
          onChange = _props2.onChange,
          maxSelectionCount = _props2.maxSelectionCount,
          customProps = _objectWithoutProperties(_props2, ['children', 'isDivided', 'onChange', 'maxSelectionCount']);

      return _react2.default.createElement(
        _SelectableList2.default,
        _extends({}, customProps, {
          isDivided: isDivided,
          onChange: this.handleOnChange,
          selectedIndexes: this.state.selectedIndexes,
          disableUnselectedItems: this.state.selectedIndexes.length >= _SelectableList2.default.Utils.validatedMaxCount(children, maxSelectionCount)
        }),
        children
      );
    }
  }]);

  return MultiSelectList;
}(_react2.default.Component);

MultiSelectList.propTypes = propTypes;
MultiSelectList.defaultProps = defaultProps;
MultiSelectList.Item = _SelectableList2.default.Item;

exports.default = MultiSelectList;