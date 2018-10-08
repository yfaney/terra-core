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

var _SearchField = require('terra-search-field/lib/SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var propTypes = {
  /**
   * A boolean that when true will disable the auto-search
   */
  disableAutoSearch: _propTypes2.default.bool,

  /**
   * The mimimum search text length if provided. Used for the invalid search length message.
   */
  minimumSearchTextLength: _propTypes2.default.number
};

var defaultProps = {
  disableAutoSearch: false,
  minimumSearchTextLength: 2
};

var SearchFieldExampleTemplate = function (_React$Component) {
  _inherits(SearchFieldExampleTemplate, _React$Component);

  function SearchFieldExampleTemplate(props) {
    _classCallCheck(this, SearchFieldExampleTemplate);

    var _this = _possibleConstructorReturn(this, (SearchFieldExampleTemplate.__proto__ || Object.getPrototypeOf(SearchFieldExampleTemplate)).call(this, props));

    _this.defaultLength = _this.props.minimumSearchTextLength === 2 ? 'default' : '';
    _this.invalidSearchMessage = 'The ' + _this.defaultLength + ' minimum search length is ' + _this.props.minimumSearchTextLength + '.';
    _this.state = { searchText: '', message: _this.invalidSearchMessage };
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.handleInvalidSearch = _this.handleInvalidSearch.bind(_this);
    return _this;
  }

  _createClass(SearchFieldExampleTemplate, [{
    key: 'handleSearch',
    value: function handleSearch(searchText) {
      this.setState({ searchText: searchText, message: 'Search Text: ' });
    }
  }, {
    key: 'handleInvalidSearch',
    value: function handleInvalidSearch() {
      this.setState({ searchText: '', message: this.invalidSearchMessage });
    }
  }, {
    key: 'render',
    value: function render() {
      var disableAutoSearch = this.props.disableAutoSearch;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          this.state.message,
          this.state.searchText
        ),
        _react2.default.createElement(_SearchField2.default, _extends({
          onSearch: this.handleSearch,
          onInvalidSearch: this.handleInvalidSearch,
          disableAutoSearch: disableAutoSearch
        }, this.props))
      );
    }
  }]);

  return SearchFieldExampleTemplate;
}(_react2.default.Component);

SearchFieldExampleTemplate.propTypes = propTypes;
SearchFieldExampleTemplate.defaultProps = defaultProps;

exports.default = SearchFieldExampleTemplate;