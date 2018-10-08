'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _ListModule = require('./List.module.scss');

var _ListModule2 = _interopRequireDefault(_ListModule);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ListModule2.default);

var propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: _propTypes2.default.node,
  /**
   * Whether or not the child list items should have a border color applied.
   */
  isDivided: _propTypes2.default.bool,
  /**
   * Function callback for the ref of the ul.
   */
  refCallback: _propTypes2.default.func
};

var defaultProps = {
  children: [],
  isDivided: false
};

var List = function List(_ref) {
  var children = _ref.children,
      isDivided = _ref.isDivided,
      refCallback = _ref.refCallback,
      customProps = _objectWithoutProperties(_ref, ['children', 'isDivided', 'refCallback']);

  var listClassNames = cx(['list', { divided: isDivided }, customProps.className]);

  return _react2.default.createElement(
    'ul',
    _extends({}, customProps, { className: listClassNames, ref: refCallback }),
    children
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
List.Item = _ListItem2.default;

exports.default = List;