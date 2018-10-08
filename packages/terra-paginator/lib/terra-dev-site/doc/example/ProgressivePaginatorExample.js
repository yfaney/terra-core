'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDialog = require('terra-dialog');

var _terraDialog2 = _interopRequireDefault(_terraDialog);

var _ProgressivePaginator = require('terra-paginator/lib/ProgressivePaginator');

var _ProgressivePaginator2 = _interopRequireDefault(_ProgressivePaginator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var totalCount = 450;

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

var ProgressivePaginatorExample = function (_React$Component) {
  _inherits(ProgressivePaginatorExample, _React$Component);

  function ProgressivePaginatorExample(props) {
    _classCallCheck(this, ProgressivePaginatorExample);

    var _this = _possibleConstructorReturn(this, (ProgressivePaginatorExample.__proto__ || Object.getPrototypeOf(ProgressivePaginatorExample)).call(this, props));

    _this.state = {
      content: buildPage(),
      currentPage: 1
    };

    _this.changePages = _this.changePages.bind(_this);
    return _this;
  }

  _createClass(ProgressivePaginatorExample, [{
    key: 'changePages',
    value: function changePages(index) {
      this.setState({ currentPage: index });
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
            footer: _react2.default.createElement(_ProgressivePaginator2.default, { onPageChange: this.changePages, selectedPage: 1, totalCount: totalCount, itemCountPerPage: 10 })
          },
          this.state.content
        )
      );
    }
  }]);

  return ProgressivePaginatorExample;
}(_react2.default.Component);

exports.default = ProgressivePaginatorExample;