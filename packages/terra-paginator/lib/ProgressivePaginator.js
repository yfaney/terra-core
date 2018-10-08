'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _terraResponsiveElement = require('terra-responsive-element');

var _terraResponsiveElement2 = _interopRequireDefault(_terraResponsiveElement);

require('terra-base/lib/baseStyles');

var _PaginatorModule = require('./Paginator.module.scss');

var _PaginatorModule2 = _interopRequireDefault(_PaginatorModule);

var _paginationUtils = require('./_paginationUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_PaginatorModule2.default);

var propTypes = {
  /**
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: _propTypes2.default.func.isRequired,
  /**
   * The active/selected page.
   */
  selectedPage: _propTypes2.default.number.isRequired,
  /**
   * Total number of all items being paginated.
   */
  totalCount: _propTypes2.default.number.isRequired,
  /**
   * Total number of items per page.
   */
  itemCountPerPage: _propTypes2.default.number.isRequired
};

var ProgressivePaginator = function (_React$Component) {
  _inherits(ProgressivePaginator, _React$Component);

  function ProgressivePaginator(props) {
    _classCallCheck(this, ProgressivePaginator);

    var _this = _possibleConstructorReturn(this, (ProgressivePaginator.__proto__ || Object.getPrototypeOf(ProgressivePaginator)).call(this, props));

    var _this$props = _this.props,
        selectedPage = _this$props.selectedPage,
        totalCount = _this$props.totalCount;


    _this.state = {
      selectedPage: selectedPage && totalCount ? selectedPage : undefined
    };

    _this.handlePageChange = _this.handlePageChange.bind(_this);
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind(_this);
    _this.defaultProgressivePaginator = _this.defaultProgressivePaginator.bind(_this);
    _this.reducedProgressivePaginator = _this.reducedProgressivePaginator.bind(_this);
    return _this;
  }

  _createClass(ProgressivePaginator, [{
    key: 'handlePageChange',
    value: function handlePageChange(index) {
      var _this2 = this;

      return function (event) {
        event.preventDefault();

        _this2.props.onPageChange(index);
        _this2.setState({ selectedPage: index });
      };
    }
  }, {
    key: 'handleOnKeyDown',
    value: function handleOnKeyDown(index) {
      var _this3 = this;

      return function (event) {
        if (event.nativeEvent.keyCode === _paginationUtils.KEYCODES.ENTER || event.nativeEvent.keyCode === _paginationUtils.KEYCODES.SPACE) {
          event.preventDefault();

          if (Number.isNaN(Number(index))) {
            _this3.props.onPageChange(event.target.text.trim().toLowerCase());

            return false;
          }

          _this3.props.onPageChange(index);
          _this3.setState({
            selectedPage: index
          });
        }

        return false;
      };
    }

    // TODO: Resolve lint issues - https://github.com/cerner/terra-core/issues/1689
    /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid, jsx-a11y/no-noninteractive-tabindex */

  }, {
    key: 'defaultProgressivePaginator',
    value: function defaultProgressivePaginator() {
      var totalPages = (0, _paginationUtils.calculatePages)(this.props.totalCount, this.props.itemCountPerPage);
      var selectedPage = this.state.selectedPage;

      var previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
      var nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

      return _react2.default.createElement(
        'div',
        { className: cx(['paginator', 'progressive']), role: 'navigation', 'aria-label': 'pagination' },
        _react2.default.createElement(
          'div',
          null,
          'Page',
          ' ',
          selectedPage,
          ' ',
          'of',
          ' ',
          totalPages
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            {
              'aria-disabled': selectedPage === 1,
              'aria-label': 'first',
              className: cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null]),
              tabIndex: selectedPage === 1 ? null : '0',
              onClick: this.handlePageChange(1),
              onKeyDown: this.handleOnKeyDown(1)
            },
            'First'
          ),
          _react2.default.createElement(
            'a',
            {
              'aria-disabled': selectedPage === 1,
              'aria-label': 'previous',
              className: cx(['nav-link', 'previous', selectedPage === 1 ? 'is-disabled' : null]),
              tabIndex: selectedPage === 1 ? null : '0',
              onClick: this.handlePageChange(previousPageIndex),
              onKeyDown: this.handleOnKeyDown(previousPageIndex)
            },
            _react2.default.createElement('span', { className: cx('icon') }),
            'Previous'
          ),
          _react2.default.createElement(
            'a',
            {
              'aria-disabled': selectedPage === totalPages,
              'aria-label': 'next',
              className: cx(['nav-link', 'next', selectedPage === totalPages ? 'is-disabled' : null]),
              tabIndex: selectedPage === totalPages ? null : '0',
              onClick: this.handlePageChange(nextPageIndex),
              onKeyDown: this.handleOnKeyDown(nextPageIndex)
            },
            'Next',
            _react2.default.createElement('span', { className: cx('icon') })
          ),
          _react2.default.createElement(
            'a',
            {
              'aria-disabled': selectedPage === totalPages,
              'aria-label': 'last',
              className: cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null]),
              tabIndex: selectedPage === totalPages ? null : '0',
              onClick: this.handlePageChange(totalPages),
              onKeyDown: this.handleOnKeyDown(totalPages)
            },
            'Last'
          )
        )
      );
    }
  }, {
    key: 'reducedProgressivePaginator',
    value: function reducedProgressivePaginator() {
      var totalPages = (0, _paginationUtils.calculatePages)(this.props.totalCount, this.props.itemCountPerPage);
      var selectedPage = this.state.selectedPage;

      var previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
      var nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

      return _react2.default.createElement(
        'div',
        { className: cx(['paginator']), role: 'navigation', 'aria-label': 'pagination' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            {
              'aria-disabled': selectedPage === 1,
              'aria-label': 'first',
              className: cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null]),
              tabIndex: selectedPage === 1 ? null : '0',
              onClick: this.handlePageChange(1),
              onKeyDown: this.handleOnKeyDown(1)
            },
            'First'
          ),
          _react2.default.createElement(
            'a',
            {
              'aria-disabled': selectedPage === 1,
              'aria-label': 'previous',
              className: cx(['nav-link', 'previous', 'icon-only', selectedPage === 1 ? 'is-disabled' : null]),
              tabIndex: selectedPage === 1 ? null : '0',
              onClick: this.handlePageChange(previousPageIndex),
              onKeyDown: this.handleOnKeyDown(previousPageIndex)
            },
            _react2.default.createElement(
              'span',
              { className: cx('visually-hidden') },
              'Previous'
            ),
            _react2.default.createElement('span', { className: cx('icon') })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          'Page',
          ' ',
          selectedPage,
          ' ',
          'of',
          ' ',
          totalPages
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            {
              'aria-disabled': selectedPage === totalPages,
              'aria-label': 'next',
              className: cx(['nav-link', 'next', 'icon-only', selectedPage === totalPages ? 'is-disabled' : null]),
              tabIndex: selectedPage === totalPages ? null : '0',
              onClick: this.handlePageChange(nextPageIndex),
              onKeyDown: this.handleOnKeyDown(nextPageIndex)
            },
            _react2.default.createElement(
              'span',
              { className: cx('visually-hidden') },
              'Next'
            ),
            _react2.default.createElement('span', { className: cx('icon') })
          ),
          _react2.default.createElement(
            'a',
            {
              'aria-disabled': selectedPage === totalPages,
              'aria-label': 'last',
              className: cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null]),
              tabIndex: selectedPage === totalPages ? null : '0',
              onClick: this.handlePageChange(totalPages),
              onKeyDown: this.handleOnKeyDown(totalPages)
            },
            'Last'
          )
        )
      );
    }
    /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid, jsx-a11y/no-noninteractive-tabindex */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_terraResponsiveElement2.default, { defaultElement: this.reducedProgressivePaginator(), tiny: this.defaultProgressivePaginator() });
    }
  }]);

  return ProgressivePaginator;
}(_react2.default.Component);

ProgressivePaginator.propTypes = propTypes;

exports.default = ProgressivePaginator;