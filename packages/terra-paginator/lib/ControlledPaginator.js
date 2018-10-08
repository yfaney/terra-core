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
   * The active/selected page. Used to set the default selected page or maintain selection across renders.
   * Required when using totalCount and itemCountPerPage.
   */
  selectedPage: _propTypes2.default.number.isRequired,
  /**
   * Total number of all items being paginated.
   * Required when using itemCountPerPage and selectedPage.
   */
  totalCount: _propTypes2.default.number.isRequired,
  /**
   * Total number of items per page.
   * Required when using selectedPage and totalCount.
   */
  itemCountPerPage: _propTypes2.default.number.isRequired
};

var Paginator = function (_React$Component) {
  _inherits(Paginator, _React$Component);

  function Paginator(props) {
    _classCallCheck(this, Paginator);

    var _this = _possibleConstructorReturn(this, (Paginator.__proto__ || Object.getPrototypeOf(Paginator)).call(this, props));

    _this.handlePageChange = _this.handlePageChange.bind(_this);
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind(_this);
    _this.hasNavContext = _this.hasNavContext.bind(_this);
    _this.buildPageButtons = _this.buildPageButtons.bind(_this);
    _this.reducedPaginator = _this.reducedPaginator.bind(_this);
    return _this;
  }

  _createClass(Paginator, [{
    key: 'handlePageChange',
    value: function handlePageChange(index) {
      var _this2 = this;

      return function (event) {
        event.preventDefault();

        if (Number.isNaN(Number(index))) {
          _this2.props.onPageChange(event.currentTarget.attributes['aria-label'].value);

          return false;
        }

        _this2.props.onPageChange(index);

        return false;
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
            _this3.props.onPageChange(event.currentTarget.attributes['aria-label'].value);

            return false;
          }

          _this3.props.onPageChange(index);
        }

        return false;
      };
    }

    // TODO: Resolve lint issues - https://github.com/cerner/terra-core/issues/1689
    /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid, jsx-a11y/no-noninteractive-tabindex */

  }, {
    key: 'buildPageButtons',
    value: function buildPageButtons(totalPages, onClick) {
      var _this4 = this;

      var _props = this.props,
          totalCount = _props.totalCount,
          itemCountPerPage = _props.itemCountPerPage,
          selectedPage = _props.selectedPage;

      var pageSequence = (0, _paginationUtils.pageSet)(selectedPage, (0, _paginationUtils.calculatePages)(totalCount, itemCountPerPage));
      var pageButtons = [];

      pageSequence.forEach(function (val) {
        var paginationLinkClassNames = cx(['nav-link', val === selectedPage ? 'is-selected' : null]);

        if (val > totalPages) {
          return;
        }
        pageButtons.push(_react2.default.createElement(
          'a',
          {
            'aria-label': 'Page ' + val,
            'aria-current': val === selectedPage && 'page',
            className: paginationLinkClassNames,
            tabIndex: val === selectedPage ? null : '0',
            key: 'pageButton_' + val,
            onClick: onClick(val),
            onKeyDown: _this4.handleOnKeyDown(val)
          },
          val
        ));
      });

      return pageButtons;
    }
  }, {
    key: 'hasNavContext',
    value: function hasNavContext() {
      return this.props.totalCount && this.props.itemCountPerPage;
    }
  }, {
    key: 'defaultPaginator',
    value: function defaultPaginator() {
      var totalPages = (0, _paginationUtils.calculatePages)(this.props.totalCount, this.props.itemCountPerPage);
      var selectedPage = this.props.selectedPage;

      var previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
      var nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

      var fullView = _react2.default.createElement(
        'div',
        { className: cx(['paginator', !this.hasNavContext() && 'pageless']) },
        this.hasNavContext() && _react2.default.createElement(
          'a',
          {
            'aria-disabled': selectedPage === 1,
            'aria-label': 'first',
            className: cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled']),
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
            className: cx(['nav-link', 'left-controls', 'previous', selectedPage === 1 && 'is-disabled']),
            tabIndex: selectedPage === 1 ? null : '0',
            onClick: this.handlePageChange(previousPageIndex),
            onKeyDown: this.handleOnKeyDown(previousPageIndex)
          },
          _react2.default.createElement('span', { className: cx('icon') }),
          'Previous'
        ),
        this.hasNavContext() && this.buildPageButtons(totalPages, this.handlePageChange),
        _react2.default.createElement(
          'a',
          {
            'aria-disabled': selectedPage === totalPages,
            'aria-label': 'next',
            className: cx(['nav-link', 'right-controls', 'next', selectedPage === totalPages && 'is-disabled']),
            tabIndex: selectedPage === totalPages ? null : '0',
            onClick: this.handlePageChange(nextPageIndex),
            onKeyDown: this.handleOnKeyDown(nextPageIndex)
          },
          'Next',
          _react2.default.createElement('span', { className: cx('icon') })
        ),
        this.hasNavContext() && _react2.default.createElement(
          'a',
          {
            'aria-disabled': selectedPage === totalPages,
            'aria-label': 'last',
            className: cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled']),
            tabIndex: selectedPage === totalPages ? null : '0',
            onClick: this.handlePageChange(totalPages),
            onKeyDown: this.handleOnKeyDown(totalPages)
          },
          'Last'
        )
      );

      return fullView;
    }
  }, {
    key: 'reducedPaginator',
    value: function reducedPaginator() {
      var totalPages = (0, _paginationUtils.calculatePages)(this.props.totalCount, this.props.itemCountPerPage);
      var selectedPage = this.props.selectedPage;

      var previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
      var nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

      var reducedView = _react2.default.createElement(
        'div',
        { className: cx(['paginator', !this.hasNavContext() && 'pageless']), role: 'navigation', 'aria-label': 'pagination' },
        this.hasNavContext() && _react2.default.createElement(
          'a',
          {
            'aria-disabled': selectedPage === 1,
            'aria-label': 'first',
            className: cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled']),
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
            className: cx(['nav-link', 'left-controls', 'previous', 'icon-only', selectedPage === 1 && 'is-disabled']),
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
        ),
        this.hasNavContext() && 'Page ' + selectedPage,
        _react2.default.createElement(
          'a',
          {
            'aria-disabled': selectedPage === totalPages,
            'aria-label': 'next',
            className: cx(['nav-link', 'right-controls', 'next', 'icon-only', selectedPage === totalPages && 'is-disabled']),
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
        this.hasNavContext() && _react2.default.createElement(
          'a',
          {
            'aria-disabled': selectedPage === totalPages,
            'aria-label': 'last',
            className: cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled']),
            tabIndex: selectedPage === totalPages ? null : '0',
            onClick: this.handlePageChange(totalPages),
            onKeyDown: this.handleOnKeyDown(totalPages)
          },
          'Last'
        )
      );

      return reducedView;
    }
    /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid, jsx-a11y/no-noninteractive-tabindex */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_terraResponsiveElement2.default, { defaultElement: this.reducedPaginator(), small: this.defaultPaginator() });
    }
  }]);

  return Paginator;
}(_react2.default.Component);

Paginator.propTypes = propTypes;

exports.default = Paginator;