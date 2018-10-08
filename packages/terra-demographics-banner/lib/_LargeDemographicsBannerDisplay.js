'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DemographicsBannerModule = require('./DemographicsBanner.module.scss');

var _DemographicsBannerModule2 = _interopRequireDefault(_DemographicsBannerModule);

var _sharedObjects = require('./_sharedObjects');

var _sharedObjects2 = _interopRequireDefault(_sharedObjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable react/prop-types */


var cx = _bind2.default.bind(_DemographicsBannerModule2.default);

exports.default = function (props) {
  var age = props.age,
      applicationContent = props.applicationContent,
      dateOfBirth = props.dateOfBirth,
      dateOfBirthLabel = props.dateOfBirthLabel,
      deceasedDate = props.deceasedDate,
      deceasedDateLabel = props.deceasedDateLabel,
      gender = props.gender,
      gestationalAge = props.gestationalAge,
      gestationalAgeLabel = props.gestationalAgeLabel,
      identifiers = props.identifiers,
      personName = props.personName,
      photo = props.photo,
      postMenstrualAge = props.postMenstrualAge,
      postMenstrualAgeLabel = props.postMenstrualAgeLabel,
      preferredFirstName = props.preferredFirstName,
      customProps = _objectWithoutProperties(props, ['age', 'applicationContent', 'dateOfBirth', 'dateOfBirthLabel', 'deceasedDate', 'deceasedDateLabel', 'gender', 'gestationalAge', 'gestationalAgeLabel', 'identifiers', 'personName', 'photo', 'postMenstrualAge', 'postMenstrualAgeLabel', 'preferredFirstName']);

  var mainClasses = cx(['demographics-banner', 'large-demographics-banner', { deceased: deceasedDate }, customProps.className]);

  delete customProps.className;

  return _react2.default.createElement(
    'section',
    _extends({ className: mainClasses }, customProps),
    props.photo && _react2.default.createElement(
      'div',
      { className: cx('profile-photo') },
      props.photo
    ),
    _react2.default.createElement(
      'div',
      { className: cx('content') },
      _react2.default.createElement(
        'div',
        { className: cx('row') },
        _react2.default.createElement(
          'h1',
          { className: cx('person-name') },
          personName,
          preferredFirstName && _react2.default.createElement(
            'span',
            { className: cx('preferred-first-name') },
            preferredFirstName
          )
        ),
        _react2.default.createElement(
          'div',
          { className: cx('application-content') },
          applicationContent
        )
      ),
      _react2.default.createElement(
        'div',
        { className: cx('row') },
        _react2.default.createElement(
          'div',
          { className: cx('person-details') },
          _sharedObjects2.default.personDetails(props)
        ),
        _react2.default.createElement(
          'div',
          { className: cx('identifiers') },
          _sharedObjects2.default.applicationIdentifiers(props)
        )
      )
    )
  );
};