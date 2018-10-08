'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DemographicsBanner = require('terra-demographics-banner/lib/DemographicsBanner');

var _DemographicsBanner2 = _interopRequireDefault(_DemographicsBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasicDemographicsBanner = function BasicDemographicsBanner() {
  return _react2.default.createElement(_DemographicsBanner2.default, {
    age: '25 Years',
    dateOfBirth: 'May 9, 1993',
    gender: 'Male',
    personName: 'Johnathon Doe',
    preferredFirstName: 'John'
  });
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = BasicDemographicsBanner;