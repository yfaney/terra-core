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
   * Whether or not the child list items has a disclosure indicator presented.
   */
  hasChevrons: _propTypes2.default.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: _propTypes2.default.func
};

var defaultProps = {
  children: [],
  isDivided: false,
  hasChevrons: false,
  onChange: undefined
};

var SingleSelectList = function (_React$Component) {
  _inherits(SingleSelectList, _React$Component);

  function SingleSelectList(props) {
    _classCallCheck(this, SingleSelectList);

    var _this = _possibleConstructorReturn(this, (SingleSelectList.__proto__ || Object.getPrototypeOf(SingleSelectList)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.state = { selectedIndex: _SelectableList2.default.Utils.initialSingleSelectedIndex(_this.props.children) };
    return _this;
  }

  _createClass(SingleSelectList, [{
    key: 'handleOnChange',
    value: function handleOnChange(event, index) {
      if (_SelectableList2.default.Utils.shouldHandleSingleSelect(this.state.selectedIndex, index)) {
        event.preventDefault();
        this.setState({ selectedIndex: index });
        if (this.props.onChange) {
          this.props.onChange(event, index);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isDivided = _props.isDivided,
          onChange = _props.onChange,
          hasChevrons = _props.hasChevrons,
          customProps = _objectWithoutProperties(_props, ['children', 'isDivided', 'onChange', 'hasChevrons']);

      return _react2.default.createElement(
        _SelectableList2.default,
        _extends({}, customProps, {
          isDivided: isDivided,
          onChange: this.handleOnChange,
          selectedIndexes: [this.state.selectedIndex],
          hasChevrons: hasChevrons,
          disableUnselectedItems: false
        }),
        children
      );
    }
  }]);

  return SingleSelectList;
}(_react2.default.Component);

SingleSelectList.propTypes = propTypes;
SingleSelectList.defaultProps = defaultProps;
SingleSelectList.Item = _SelectableList2.default.Item;

exports.default = SingleSelectList;