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

var SearchFieldOnChange = function (_React$Component) {
  _inherits(SearchFieldOnChange, _React$Component);

  function SearchFieldOnChange(props) {
    _classCallCheck(this, SearchFieldOnChange);

    var _this = _possibleConstructorReturn(this, (SearchFieldOnChange.__proto__ || Object.getPrototypeOf(SearchFieldOnChange)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.state = { searchText: '', callCount: 0 };
    return _this;
  }

  _createClass(SearchFieldOnChange, [{
    key: 'onChange',
    value: function onChange(event, text) {
      var searchText = text;
      if (text && text.length > 0 && /\d/.test(text)) {
        searchText = text.substring(0, text.length - 1);
      }
      this.setState(function (prevState) {
        return { searchText: searchText, callCount: prevState.callCount + 1 };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          { id: 'searchOnChangeCallCount' },
          this.state.callCount
        ),
        _react2.default.createElement(
          'p',
          { id: 'searchOnChangeText' },
          this.state.searchText
        ),
        _react2.default.createElement(_SearchField2.default, {
          id: 'searchfield',
          onChange: this.onChange,
          value: this.state.searchText
        })
      );
    }
  }]);

  return SearchFieldOnChange;
}(_react2.default.Component);

exports.default = SearchFieldOnChange;