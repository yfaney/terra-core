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

var _BlockActionFooter = require('./BlockActionFooter');

var _BlockActionFooter2 = _interopRequireDefault(_BlockActionFooter);

var _CenteredActionFooterModule = require('./CenteredActionFooter.module.scss');

var _CenteredActionFooterModule2 = _interopRequireDefault(_CenteredActionFooterModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_CenteredActionFooterModule2.default);

var propTypes = {
  /**
   * Actions to be displayed in the center socket
   */
  center: _propTypes2.default.node
};

var defaultProps = {
  center: undefined
};

var CenteredActionFooter = function CenteredActionFooter(_ref) {
  var center = _ref.center,
      customProps = _objectWithoutProperties(_ref, ['center']);

  var centeredActionFooterClassNames = cx(['centered-action-footer', customProps.className]);

  return _react2.default.createElement(
    _BlockActionFooter2.default,
    _extends({}, customProps, { className: centeredActionFooterClassNames }),
    center
  );
};

CenteredActionFooter.propTypes = propTypes;
CenteredActionFooter.defaultProps = defaultProps;

exports.default = CenteredActionFooter;