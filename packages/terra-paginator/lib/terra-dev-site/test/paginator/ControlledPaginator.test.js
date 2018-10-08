'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _ControlledPaginator = require('../../../ControlledPaginator');

var _ControlledPaginator2 = _interopRequireDefault(_ControlledPaginator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var totalCount = 450;

var PaginatorExample = function (_React$Component) {
  _inherits(PaginatorExample, _React$Component);

  function PaginatorExample(props) {
    _classCallCheck(this, PaginatorExample);

    var _this = _possibleConstructorReturn(this, (PaginatorExample.__proto__ || Object.getPrototypeOf(PaginatorExample)).call(this, props));

    _this.state = {
      currentPage: 1
    };

    _this.changePages = _this.changePages.bind(_this);
    return _this;
  }

  _createClass(PaginatorExample, [{
    key: 'changePages',
    value: function changePages(index) {
      this.setState({ currentPage: index });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { style: { height: '500px' } },
        _react2.default.createElement(_terraButton2.default, { id: 'button-9', text: 'Set Page to 9', onClick: function onClick() {
            _this2.setState({ currentPage: 9 });
          } }),
        _react2.default.createElement(_terraButton2.default, { id: 'button-15', text: 'Set Page to 15', onClick: function onClick() {
            _this2.setState({ currentPage: 15 });
          } }),
        _react2.default.createElement(_terraButton2.default, { id: 'button-45', text: 'Set Page to 45', onClick: function onClick() {
            _this2.setState({ currentPage: 45 });
          } }),
        _react2.default.createElement(_ControlledPaginator2.default, { onPageChange: this.changePages, selectedPage: this.state.currentPage, totalCount: totalCount, itemCountPerPage: 10 })
      );
    }
  }]);

  return PaginatorExample;
}(_react2.default.Component);

exports.default = PaginatorExample;