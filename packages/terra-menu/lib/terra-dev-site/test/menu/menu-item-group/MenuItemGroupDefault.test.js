'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Menu = require('../../../../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var childContextTypes = {
  isSelectableMenu: _propTypes2.default.bool
};

var DefaultMenuItemGroup = function (_React$Component) {
  _inherits(DefaultMenuItemGroup, _React$Component);

  function DefaultMenuItemGroup(props) {
    _classCallCheck(this, DefaultMenuItemGroup);

    var _this = _possibleConstructorReturn(this, (DefaultMenuItemGroup.__proto__ || Object.getPrototypeOf(DefaultMenuItemGroup)).call(this, props));

    _this.state = { selectedIndex: null };
    _this.handleSelection = _this.handleSelection.bind(_this);
    return _this;
  }

  _createClass(DefaultMenuItemGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { isSelectableMenu: true };
    }
  }, {
    key: 'handleSelection',
    value: function handleSelection(event, selectedIndex) {
      this.setState({ selectedIndex: selectedIndex });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'selected-index' },
          _react2.default.createElement(
            'h3',
            null,
            'Selected Button:',
            this.state.selectedIndex
          )
        ),
        _react2.default.createElement(
          _Menu2.default.ItemGroup,
          { className: 'TestGroup', onChange: this.handleSelection },
          _react2.default.createElement(_Menu2.default.Item, { text: 'Group Item 1', key: '1', className: 'TestGroupItem1' }),
          _react2.default.createElement(_Menu2.default.Item, { text: 'Group Item 2', key: '2', className: 'TestGroupItem2' }),
          _react2.default.createElement(_Menu2.default.Item, { text: 'Group Item 3', key: '3', className: 'TestGroupItem3' })
        )
      );
    }
  }]);

  return DefaultMenuItemGroup;
}(_react2.default.Component);

DefaultMenuItemGroup.childContextTypes = childContextTypes;
exports.default = DefaultMenuItemGroup;