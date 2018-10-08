'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDialog = require('terra-dialog');

var _terraDialog2 = _interopRequireDefault(_terraDialog);

var _Paginator = require('terra-paginator/lib/Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var maxPages = 5;

var fillArray = function fillArray(value, len) {
  var arr = [];
  for (var i = 0; i < len; i += 1) {
    arr.push(_react2.default.createElement(
      'p',
      { key: Math.floor(Math.random() * Math.floor(100000)) },
      value
    ));
  }
  return arr;
};

var buildPage = function buildPage() {
  var fullContent = [];
  var content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. ' + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. ' + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. ' + 'Aliquam eget maximus dui, ut rhoncus augue.';

  fullContent = fillArray(content, 10);

  return fullContent;
};

var PaginatorNoPagesExample = function (_React$Component) {
  _inherits(PaginatorNoPagesExample, _React$Component);

  function PaginatorNoPagesExample(props) {
    _classCallCheck(this, PaginatorNoPagesExample);

    var _this = _possibleConstructorReturn(this, (PaginatorNoPagesExample.__proto__ || Object.getPrototypeOf(PaginatorNoPagesExample)).call(this, props));

    _this.state = {
      content: _react2.default.createElement(
        'h2',
        null,
        'Welcome!'
      ),
      currentPage: 1
    };

    _this.changePages = _this.changePages.bind(_this);
    return _this;
  }

  _createClass(PaginatorNoPagesExample, [{
    key: 'changePages',
    value: function changePages(direction) {
      var index = direction === 'next' ? this.state.currentPage + 1 : this.state.currentPage - 1;

      if (index >= maxPages) {
        this.setState({ content: _react2.default.createElement(
            'h2',
            null,
            'No more pages...'
          ), currentPage: maxPages });
      } else if (index <= 1) {
        this.setState({ content: _react2.default.createElement(
            'h2',
            null,
            'Welcome!'
          ), currentPage: 1 });
      } else {
        this.setState({ content: buildPage(), currentPage: index });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { height: '500px' } },
        _react2.default.createElement(
          _terraDialog2.default,
          {
            header: _react2.default.createElement(
              'h1',
              null,
              'Page',
              this.state.currentPage
            ),
            footer: _react2.default.createElement(_Paginator2.default, { onPageChange: this.changePages })
          },
          this.state.content
        )
      );
    }
  }]);

  return PaginatorNoPagesExample;
}(_react2.default.Component);

exports.default = PaginatorNoPagesExample;