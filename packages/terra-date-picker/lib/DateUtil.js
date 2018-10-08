'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-underscore-dangle */


var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateUtil = function () {
  function DateUtil() {
    _classCallCheck(this, DateUtil);
  }

  _createClass(DateUtil, null, [{
    key: 'createSafeDate',

    // Converts an ISO 8601 date into a moment object. If the date is invalid and unable to convert, the originally provided date is returned.
    value: function createSafeDate(date) {
      if (date) {
        var momentDate = (0, _moment2.default)(date);
        return momentDate.isValid() ? momentDate : date;
      }

      return date;
    }

    // Filters out any invalid dates in the provided list of dates and returns a list of moment objects representation of the valid dates

  }, {
    key: 'filterInvalidDates',
    value: function filterInvalidDates(dates) {
      var momentDates = [];

      if (dates) {
        var index = 0;
        for (index = 0; index < dates.length; index += 1) {
          var momentDate = (0, _moment2.default)(dates[index]);
          if (momentDate.isValid()) {
            momentDates.push(momentDate);
          }
        }
      }

      return momentDates.length > 0 ? momentDates : dates;
    }

    // Checks if a given date is out of the range between the start and end dates.

  }, {
    key: 'isDateOutOfRange',
    value: function isDateOutOfRange(sourceDate, startDate, endDate) {
      if (!sourceDate || !sourceDate.isValid() || !startDate || !startDate.isValid() || !endDate || !endDate.isValid()) {
        return false;
      }

      if (sourceDate.isSameOrAfter(startDate) && sourceDate.isSameOrBefore(endDate)) {
        return false;
      }

      return true;
    }

    // Checks if a given date is one of the excluded dates.

  }, {
    key: 'isDateExcluded',
    value: function isDateExcluded(sourceDate, excludedDates) {
      if (!sourceDate || !sourceDate.isValid()) {
        return false;
      }

      var excludeMomentDates = DateUtil.filterInvalidDates(excludedDates);

      if (excludeMomentDates) {
        for (var index = 0; index < excludeMomentDates.length; index += 1) {
          if (sourceDate.isSame(excludeMomentDates[index], 'day')) {
            return true;
          }
        }
      }

      return false;
    }

    // Converts date string to the ISO8601 format with only the date part. If the date string is invalid and unable to convert, the originally provided string is returned.

  }, {
    key: 'convertToISO8601',
    value: function convertToISO8601(date, format) {
      if (date && format) {
        var momentDate = (0, _moment2.default)(date, format, true);
        return momentDate.isValid() ? momentDate.format('YYYY-MM-DD') : date;
      }

      return date;
    }

    // Gets the long date format based on the locale.

  }, {
    key: 'getFormatByLocale',
    value: function getFormatByLocale(locale) {
      if (locale) {
        var localMoment = (0, _moment2.default)();
        localMoment.locale(locale);
        return localMoment.localeData()._longDateFormat.L;
      }

      return undefined;
    }
  }]);

  return DateUtil;
}();

exports.default = DateUtil;