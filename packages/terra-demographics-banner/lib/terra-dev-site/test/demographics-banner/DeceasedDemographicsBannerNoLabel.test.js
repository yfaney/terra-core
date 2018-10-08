'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DemographicsBanner = require('../../../DemographicsBanner');

var _DemographicsBanner2 = _interopRequireDefault(_DemographicsBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_DemographicsBanner2.default, { id: 'deceased-demographics-no-label', deceasedDate: 'March 12, 2017' });
};