'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DemographicsBannerModule = require('./DemographicsBanner.module.scss');

var _DemographicsBannerModule2 = _interopRequireDefault(_DemographicsBannerModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_DemographicsBannerModule2.default);

// eslint-disable-next-line react/prop-types
var DemographicsBannerValue = function DemographicsBannerValue(_ref) {
  var label = _ref.label,
      value = _ref.value;
  return _react2.default.createElement(
    'span',
    { className: cx('value') },
    label && _react2.default.createElement(
      'span',
      { className: cx('value-label') },
      label + ':'
    ),
    _react2.default.createElement(
      'b',
      null,
      value
    )
  );
};

var personDetails = function personDetails(props) {
  var elements = [_react2.default.createElement(DemographicsBannerValue, { key: 'age', value: props.age }), _react2.default.createElement(DemographicsBannerValue, { key: 'gender', value: props.gender }), _react2.default.createElement(DemographicsBannerValue, {
    key: 'dob',
    label: props.dateOfBirthLabel,
    value: props.dateOfBirth
  })];

  if (props.gestationalAge) {
    elements.push(_react2.default.createElement(DemographicsBannerValue, {
      key: 'ga',
      label: props.gestationalAgeLabel,
      value: props.gestationalAge
    }));
  }

  if (props.postMenstrualAge) {
    elements.push(_react2.default.createElement(DemographicsBannerValue, {
      key: 'pma',
      label: props.postMenstrualAgeLabel,
      value: props.postMenstrualAge
    }));
  }

  if (props.deceasedDate) {
    elements.push(_react2.default.createElement(DemographicsBannerValue, {
      key: 'deceased',
      label: props.deceasedDateLabel,
      value: props.deceasedDate
    }));
  }

  return elements;
};

var applicationIdentifiers = function applicationIdentifiers(props) {
  var identifiers = props.identifiers;


  if (identifiers) {
    return Object.keys(identifiers).map(function (key) {
      return _react2.default.createElement(DemographicsBannerValue, {
        key: 'identifier-' + key,
        label: key,
        value: identifiers[key]
      });
    });
  }

  return null;
};

var DemographicsBannerUtils = {
  personDetails: personDetails,
  applicationIdentifiers: applicationIdentifiers
};

exports.default = DemographicsBannerUtils;