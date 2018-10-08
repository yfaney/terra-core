'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonGroup = require('../../../ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroupSingleSelect = function (_React$Component) {
  _inherits(ButtonGroupSingleSelect, _React$Component);

  function ButtonGroupSingleSelect(props) {
    _classCallCheck(this, ButtonGroupSingleSelect);

    var _this = _possibleConstructorReturn(this, (ButtonGroupSingleSelect.__proto__ || Object.getPrototypeOf(ButtonGroupSingleSelect)).call(this, props));

    _this.state = { selectedKey: '1' };
    _this.handleSelection = _this.handleSelection.bind(_this);
    return _this;
  }

  _createClass(ButtonGroupSingleSelect, [{
    key: 'handleSelection',
    value: function handleSelection(event, selectedKey) {
      if (_ButtonGroup2.default.Utils.shouldHandleSingleSelection(this.state.selectedKey, selectedKey)) {
        event.preventDefault();
        this.setState({ selectedKey: selectedKey });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Selected Button:',
          ' ',
          _react2.default.createElement(
            'span',
            { id: 'selected-key' },
            this.state.selectedKey
          )
        ),
        _react2.default.createElement(
          _ButtonGroup2.default,
          {
            id: 'button-group-single-select',
            onChange: this.handleSelection,
            selectedKeys: [this.state.selectedKey]
          },
          _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Single-Select 1', key: '1' }),
          _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Single-Select 2', key: '2' }),
          _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Single-Select 3', key: '3' }),
          _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Single-Select 4', key: '4' })
        )
      );
    }
  }]);

  return ButtonGroupSingleSelect;
}(_react2.default.Component);

exports.default = ButtonGroupSingleSelect;