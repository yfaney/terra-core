'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateTimeUtils = function () {
  function DateTimeUtils() {
    _classCallCheck(this, DateTimeUtils);
  }

  _createClass(DateTimeUtils, null, [{
    key: 'createSafeDate',
    value: function createSafeDate(date) {
      if (!date || date && date.length === 0) {
        return null;
      }

      var momentDate = (0, _momentTimezone2.default)(date);
      return momentDate.isValid() ? momentDate : null;
    }

    // Check if the iSODate contains the time part.
    // The time part in a valid ISO 8601 string is separated from the date part either by a space or 'T'.

  }, {
    key: 'hasTime',
    value: function hasTime(iSODate) {
      if (!DateTimeUtils.createSafeDate(iSODate)) {
        return false;
      }

      var timePart = '';

      if (iSODate.indexOf(' ') > 0) {
        // eslint-disable-next-line prefer-destructuring
        timePart = iSODate.split(' ')[1];
      }

      if (iSODate.indexOf('T') > 0) {
        // eslint-disable-next-line prefer-destructuring
        timePart = iSODate.split('T')[1];
      }

      return timePart.length > 0;
    }
  }, {
    key: 'formatISODateTime',
    value: function formatISODateTime(iSODate, format) {
      if (!iSODate || iSODate.length <= 0) {
        return '';
      }

      var momentDate = (0, _momentTimezone2.default)(iSODate);
      return DateTimeUtils.formatMomentDateTime(momentDate, format);
    }
  }, {
    key: 'formatMomentDateTime',
    value: function formatMomentDateTime(momentDate, format) {
      return momentDate && momentDate.isValid() ? momentDate.format(format) : undefined;
    }
  }, {
    key: 'syncDateTime',
    value: function syncDateTime(momentDate, iOSdate, time) {
      var date = (0, _momentTimezone2.default)(iOSdate);
      var newDate = momentDate ? momentDate.clone() : date;

      // If momentDate was null, a new moment date needs to be created and sync'd with the entered time.
      if (momentDate === null && time && time.length === 5) {
        newDate = DateTimeUtils.updateTime(newDate, time);
      }

      return newDate.year(date.get('year')).month(date.get('month')).date(date.get('date'));
    }
  }, {
    key: 'updateTime',
    value: function updateTime(momentDate, time) {
      if (!momentDate || !momentDate.isValid()) {
        return null;
      }

      var newDate = momentDate.clone();
      var date = (0, _momentTimezone2.default)(time, 'HH:mm', true);

      return newDate.hour(date.get('hour')).minute(date.get('minute'));
    }
  }, {
    key: 'isValidDateTime',
    value: function isValidDateTime(date, time, format) {
      return DateTimeUtils.isValidDate(date, format) && DateTimeUtils.isValidTime(time);
    }
  }, {
    key: 'isValidDate',
    value: function isValidDate(date, format) {
      var dateMoment = (0, _momentTimezone2.default)(date, format, true);
      return dateMoment.isValid();
    }
  }, {
    key: 'isValidTime',
    value: function isValidTime(time) {
      var timeMoment = (0, _momentTimezone2.default)(time, 'HH:mm', true);
      return timeMoment.isValid();
    }
  }, {
    key: 'checkAmbiguousTime',
    value: function checkAmbiguousTime(dateTime) {
      if (!dateTime || !dateTime.isValid()) {
        return false;
      }

      var localizedDateTime = _momentTimezone2.default.tz(dateTime.format(), _momentTimezone2.default.tz.guess());
      var beforeDaylightSaving = localizedDateTime.clone();
      var afterDaylightSaving = localizedDateTime.clone();

      // The localizedDateTime could be before or after the time change (e.g. the offset is -500 or -600 in CST)
      // To determine if this is the ambiguous hour, we need to add 1 hour as well as subtract 1 hour to account for both directions.
      beforeDaylightSaving.add(1, 'hour');
      afterDaylightSaving.subtract(1, 'hour');

      var isAmbiguousBeforeChange = localizedDateTime.isDST() && !beforeDaylightSaving.isDST();
      var isAmbiguousAfterChange = !localizedDateTime.isDST() && afterDaylightSaving.isDST();

      return isAmbiguousBeforeChange || isAmbiguousAfterChange;
    }
  }, {
    key: 'getDaylightSavingTZDisplay',
    value: function getDaylightSavingTZDisplay() {
      return (0, _momentTimezone2.default)('2017-07-01').tz(_momentTimezone2.default.tz.guess()).format('z');
    }
  }, {
    key: 'getStandardTZDisplay',
    value: function getStandardTZDisplay() {
      return (0, _momentTimezone2.default)('2017-01-01').tz(_momentTimezone2.default.tz.guess()).format('z');
    }
  }]);

  return DateTimeUtils;
}();

exports.default = DateTimeUtils;