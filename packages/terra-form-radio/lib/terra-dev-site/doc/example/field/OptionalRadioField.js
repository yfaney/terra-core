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
var OptionalRadioFieldExample = function OptionalRadioFieldExample() {
  return _react2.default.createElement(
    _RadioField2.default,
    {
      legend: 'Which Track are you looking for?',
      help: 'This cannot be changed when submitted',
      showOptional: true
    },
    _react2.default.createElement(_Radio2.default, { id: 'frontend-track', name: 'track', labelText: 'Frontend Development', value: 'backend' }),
    _react2.default.createElement(_Radio2.default, { id: 'backend-track', name: 'track', labelText: 'Backend Development', value: 'frontend' }),
    _react2.default.createElement(_Radio2.default, { id: 'devops-track', name: 'track', labelText: 'DevOps', value: 'devops' })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = OptionalRadioFieldExample;