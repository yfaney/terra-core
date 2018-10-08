'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('terra-button/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _SearchField = require('../../../SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var SearchFieldFocus = function (_React$Component) {
  _inherits(SearchFieldFocus, _React$Component);

  function SearchFieldFocus(props) {
    _classCallCheck(this, SearchFieldFocus);

    var _this = _possibleConstructorReturn(this, (SearchFieldFocus.__proto__ || Object.getPrototypeOf(SearchFieldFocus)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.state = { searchText: '' };
    return _this;
  }

  _createClass(SearchFieldFocus, [{
    key: 'onChange',
    value: function onChange(event, text) {
      this.setState({ searchText: text });
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick() {
      if (this.searchInput) {
        this.searchInput.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_Button2.default, { text: 'Focus Me', onClick: this.handleButtonClick, id: 'search-field-focus-button' }),
        _react2.default.createElement(_SearchField2.default, {
          onChange: this.onChange,
          value: this.state.searchText,
          inputRefCallback: function inputRefCallback(inputRef) {
            _this2.searchInput = inputRef;
          }
        })
      );
    }
  }]);

  return SearchFieldFocus;
}(_react2.default.Component);

exports.default = SearchFieldFocus;