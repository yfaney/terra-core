'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _DemographicsBanner = require('terra-demographics-banner/lib/DemographicsBanner');

var _DemographicsBanner2 = _interopRequireDefault(_DemographicsBanner);

var _demographicsCat = require('../assets/demographicsCat.jpg');

var _demographicsCat2 = _interopRequireDefault(_demographicsCat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
var DemographicsBannerAdditionalDetails = function DemographicsBannerAdditionalDetails() {
  return _react2.default.createElement(_DemographicsBanner2.default, {
    applicationContent: _react2.default.createElement(
      'span',
      null,
      'St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253'
    ),
    age: '25 Years',
    dateOfBirth: 'May 9, 1993',
    gender: 'Male',
    identifiers: { MRN: 12343, REA: '3JSDA' },
    personName: 'Johnathon Doe',
    photo: _react2.default.createElement(_terraImage2.default, { alt: 'My Cat', src: _demographicsCat2.default }),
    preferredFirstName: 'John'
  });
};

exports.default = DemographicsBannerAdditionalDetails;