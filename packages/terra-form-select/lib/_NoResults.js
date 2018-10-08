'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _NoResultsModule = require('./_NoResults.module.scss');

var _NoResultsModule2 = _interopRequireDefault(_NoResultsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_NoResultsModule2.default);

var propTypes = {
  /**
   * Content to display when no results are found.
   */
  noResultContent: _propTypes2.default.node,
  /**
   * The filter value.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var NoResults = function NoResults(_ref, context) {
  var noResultContent = _ref.noResultContent,
      value = _ref.value;
  return _react2.default.createElement(
    'div',
    { className: cx('no-results') },
    noResultContent || context.intl.formatMessage({ id: 'Terra.form.select.noResults' }, { text: value })
  );
};

NoResults.propTypes = propTypes;
NoResults.contextTypes = contextTypes;

exports.default = NoResults;