'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Option = require('./_Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The value of the option.
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

var AddOption = function AddOption(_ref, context) {
  var value = _ref.value,
      customProps = _objectWithoutProperties(_ref, ['value']);

  return _react2.default.createElement(_Option2.default, _extends({}, customProps, {
    isAddOption: true,
    value: value,
    display: context.intl.formatMessage({ id: 'Terra.form.select.add' }, { text: value })
  }));
};

AddOption.propTypes = propTypes;
AddOption.contextTypes = contextTypes;
AddOption.isOption = true;

exports.default = AddOption;