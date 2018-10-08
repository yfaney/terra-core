'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _DemographicsBanner = require('../../../DemographicsBanner');

var _DemographicsBanner2 = _interopRequireDefault(_DemographicsBanner);

var _demographicsCat = require('../../doc/assets/demographicsCat.jpg');

var _demographicsCat2 = _interopRequireDefault(_demographicsCat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_DemographicsBanner2.default, {
    id: 'populated-demographics',
    applicationContent: _react2.default.createElement(
      'span',
      null,
      'St. Johns West Wing Room Cardiac Unit 253'
    ),
    age: '25 Years',
    dateOfBirth: 'May 9, 1993',
    gestationalAge: 'May 11, 1993',
    postMenstrualAge: 'May 13, 1993',
    gender: 'Male',
    identifiers: { MRN: 12343, REA: '3JSDA' },
    personName: 'Johnathon Doe',
    photo: _react2.default.createElement(_terraImage2.default, { alt: 'My Cat', src: _demographicsCat2.default }),
    preferredFirstName: 'John'
  });
};