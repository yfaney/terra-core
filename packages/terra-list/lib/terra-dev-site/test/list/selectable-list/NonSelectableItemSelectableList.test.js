'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectableList = require('../../../../SelectableList');

var _SelectableList2 = _interopRequireDefault(_SelectableList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var listExample = function (_React$Component) {
  _inherits(listExample, _React$Component);

  function listExample(props) {
    _classCallCheck(this, listExample);

    var _this = _possibleConstructorReturn(this, (listExample.__proto__ || Object.getPrototypeOf(listExample)).call(this, props));

    _this.state = { selectedIndex: 'none' };
    _this.handleSelection = _this.handleSelection.bind(_this);
    return _this;
  }

  _createClass(listExample, [{
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
          { id: 'current-index' },
          _react2.default.createElement(
            'h3',
            null,
            'Triggered Item:',
            ' ',
            this.state.selectedIndex
          )
        ),
        _react2.default.createElement(
          _SelectableList2.default,
          { onChange: this.handleSelection },
          _react2.default.createElement(_SelectableList2.default.Item, { content: _react2.default.createElement(
              'p',
              null,
              'test 1'
            ), key: '123' }),
          _react2.default.createElement(_SelectableList2.default.Item, { content: _react2.default.createElement(
              'p',
              null,
              'test 2'
            ), key: '124' }),
          _react2.default.createElement(_SelectableList2.default.Item, { content: _react2.default.createElement(
              'p',
              null,
              'test 3 - not selectable'
            ), key: '125', isSelectable: false })
        )
      );
    }
  }]);

  return listExample;
}(_react2.default.Component);

exports.default = listExample;