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

var ButtonGroupMultiSelect = function (_React$Component) {
  _inherits(ButtonGroupMultiSelect, _React$Component);

  function ButtonGroupMultiSelect(props) {
    _classCallCheck(this, ButtonGroupMultiSelect);

    var _this = _possibleConstructorReturn(this, (ButtonGroupMultiSelect.__proto__ || Object.getPrototypeOf(ButtonGroupMultiSelect)).call(this, props));

    _this.state = { selectedKeys: [] };
    _this.handleSelection = _this.handleSelection.bind(_this);
    return _this;
  }

  _createClass(ButtonGroupMultiSelect, [{
    key: 'handleSelection',
    value: function handleSelection(event, key) {
      event.preventDefault();
      this.setState(function (prevState) {
        return { selectedKeys: _ButtonGroup2.default.Utils.handleMultiSelectedKeys(prevState.selectedKeys, key) };
      });
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
          'Selected Button(s):',
          ' ',
          _react2.default.createElement(
            'span',
            { id: 'selected-keys' },
            this.state.selectedKeys.join(', ')
          )
        ),
        _react2.default.createElement(
          _ButtonGroup2.default,
          {
            id: 'button-group-multi-select',
            onChange: this.handleSelection,
            selectedKeys: this.state.selectedKeys
          },
          _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Multi-Select 1', key: '1' }),
          _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Multi-Select 2', key: '2' }),
          _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Multi-Select 3', key: '3' }),
          _react2.default.createElement(_ButtonGroup2.default.Button, { text: 'Multi-Select 4', key: '4' })
        )
      );
    }
  }]);

  return ButtonGroupMultiSelect;
}(_react2.default.Component);

exports.default = ButtonGroupMultiSelect;