'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchField = require('../../../SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CallbackSearchField = function (_React$Component) {
  _inherits(CallbackSearchField, _React$Component);

  function CallbackSearchField(props) {
    _classCallCheck(this, CallbackSearchField);

    var _this = _possibleConstructorReturn(this, (CallbackSearchField.__proto__ || Object.getPrototypeOf(CallbackSearchField)).call(this, props));

    _this.state = {
      searchText: '',
      message: ''
    };

    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.handleInvalidSearch = _this.handleInvalidSearch.bind(_this);
    return _this;
  }

  _createClass(CallbackSearchField, [{
    key: 'handleSearch',
    value: function handleSearch(searchText) {
      this.setState({ searchText: searchText, message: 'Search Text: ' });
    }
  }, {
    key: 'handleInvalidSearch',
    value: function handleInvalidSearch(searchText) {
      this.setState({ searchText: searchText, message: 'INVALID Search Text: ' });
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
          ' Minimum Search Length is 3 '
        ),
        _react2.default.createElement(_SearchField2.default, {
          id: 'searchfield',
          onSearch: this.handleSearch,
          onInvalidSearch: this.handleInvalidSearch,
          minimumSearchTextLength: 3
        }),
        _react2.default.createElement(
          'div',
          { id: 'search-callback-text' },
          this.state.message,
          this.state.searchText
        )
      );
    }
  }]);

  return CallbackSearchField;
}(_react2.default.Component);

exports.default = CallbackSearchField;