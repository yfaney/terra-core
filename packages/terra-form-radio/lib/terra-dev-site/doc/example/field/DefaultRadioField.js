'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('terra-form-radio/lib/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _RadioField = require('terra-form-radio/lib/RadioField');

var _RadioField2 = _interopRequireDefault(_RadioField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
var RadioFieldExample = function RadioFieldExample() {
  return _react2.default.createElement(
    _RadioField2.default,
    { legend: 'Which Type of Account are you looking for?' },
    _react2.default.createElement(_Radio2.default, { id: 'user-account', name: 'account', labelText: 'Base User', value: 'user' }),
    _react2.default.createElement(_Radio2.default, { id: 'team-account', name: 'account', labelText: 'Team Owner', value: 'team' }),
    _react2.default.createElement(_Radio2.default, { id: 'admin-account', name: 'account', labelText: 'Administrator', value: 'admin' })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = RadioFieldExample;