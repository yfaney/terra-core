'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeUtil = function () {
  function TimeUtil() {
    _classCallCheck(this, TimeUtil);
  }

  _createClass(TimeUtil, null, [{
    key: 'validNumericInput',

    /**
     * Determines if a provided nuermic input value is valid.
     * Valid inputs are either empty strings or numeric.
     * @param {String} value Value to validate
     * @return True if the value is empty or numeric, false otherwise.
     */
    value: function validNumericInput(value) {
      return value.length === 0 || /^\d+$/.test(value);
    }

    /**
     * Finds the equivalent twelve hour time and meridiem for a given hour, anteMeridiem, and postMeridiem
     * @param {String} hour Hour to parse.
     * @param {String} anteMeridiem String representation of the anteMeridiem.
     * @param {String} postMeridiem String representation of the postMeridiem.
     * @return {{hourString: string, meridiem: string}} Hour and meridiem associated to the passed in variables.
     *   Hour will be in 2 digit format.
     */

  }, {
    key: 'parseTwelveHourTime',
    value: function parseTwelveHourTime(hour, anteMeridiem, postMeridiem) {
      var parsedHour = { hourString: hour };
      var numericHour = parseInt(hour, 10);

      if (numericHour >= 12) {
        parsedHour.meridiem = postMeridiem;

        if (numericHour > 12) {
          numericHour -= 12;
        }
      } else {
        parsedHour.meridiem = anteMeridiem;

        if (numericHour === 0) {
          numericHour = 12;
        }
      }

      if (numericHour < 10) {
        parsedHour.hourString = '0'.concat(numericHour.toString());
      } else {
        parsedHour.hourString = numericHour.toString();
      }

      return parsedHour;
    }

    /**
     * Increments an hour to it's next value. Resets to 01 if the passed in hour is 12 and the variant is a 12 hour clock.
     * @param {String} hour Hour to increment
     * @param {String} timeVariant Variant of time the passed in hour refers to.
     * @return {String} Returns a string representation of the value of an hour after it's incremented. If the
     *   hour is 01 and the timeVariant is 12, it returns 01.
     */

  }, {
    key: 'incrementHour',
    value: function incrementHour(hour, timeVariant) {
      var maxValue = timeVariant === this.FORMAT_12_HOUR ? 12 : 23;

      // Increment the value by 1 when arrow up is pressed.
      if (hour) {
        var numericMinute = Number(hour);

        if (numericMinute < maxValue) {
          numericMinute += 1;
          return numericMinute < 10 ? '0'.concat(numericMinute.toString()) : numericMinute.toString();
        }if (timeVariant === this.FORMAT_12_HOUR) {
          return '01';
        }

        return hour;
      }

      return timeVariant === this.FORMAT_12_HOUR ? '12' : '00';
    }

    /**
     * Decrements an hour to it's next value. Resets to 12 if the passed in hour is 01 and the variant is a 12 hour clock.
     * @param {String} hour Hour to decrement
     * @param {String} timeVariant Variant of time the passed in hour refers to.
     * @return {String} Returns a string representation of the value of the an hour after it's decremented. If the
     *   hour is 12 and the timeVariant is 12, it returns 12.
     */

  }, {
    key: 'decrementHour',
    value: function decrementHour(hour, timeVariant) {
      var minValue = timeVariant === this.FORMAT_12_HOUR ? 1 : 0;

      if (hour) {
        var numericMinute = Number(hour);

        if (numericMinute > minValue) {
          numericMinute -= 1;
          return numericMinute < 10 ? '0'.concat(numericMinute.toString()) : numericMinute.toString();
        }if (timeVariant === this.FORMAT_12_HOUR) {
          return '12';
        }

        return hour;
      }

      return timeVariant === this.FORMAT_12_HOUR ? '12' : '00';
    }

    /**
     * Increments a minute to it's next value
     * @param {String} minute Minute to increment
     * @return {String} Returns a string representation of the value of the passed in minute after it's incremented
     */

  }, {
    key: 'incrementMinute',
    value: function incrementMinute(minute) {
      if (minute) {
        var numericMinute = Number(minute);

        if (numericMinute < 59) {
          numericMinute += 1;
          return numericMinute < 10 ? '0'.concat(numericMinute.toString()) : numericMinute.toString();
        }

        return minute;
      }

      return '00';
    }

    /**
     * Decrements a minute to it's next value
     * @param {String} minute Minute to decrement
     * @return {String} Returns a string representation of the value of the passed in minute after it's decremented
     */

  }, {
    key: 'decrementMinute',
    value: function decrementMinute(minute) {
      if (minute) {
        var numericMinute = Number(minute);

        if (numericMinute > 0) {
          numericMinute -= 1;
          return numericMinute < 10 ? '0'.concat(numericMinute.toString()) : numericMinute.toString();
        }

        return minute;
      }

      return '00';
    }
  }, {
    key: 'splitHour',
    value: function splitHour(time) {
      if (typeof time === 'string') {
        var hourAndMinute = time.split(':');

        if (hourAndMinute.length) {
          var hour = Number(hourAndMinute[0]);
          if (hour >= 0 && hour < 24) {
            if (hourAndMinute[0].length === 1) {
              return '0'.concat(hourAndMinute[0]);
            }

            return hourAndMinute[0];
          }
        }

        return '';
      }

      return '';
    }
  }, {
    key: 'splitMinute',
    value: function splitMinute(time) {
      if (typeof time === 'string') {
        var hourAndMinute = time.split(':');

        if (hourAndMinute.length > 1) {
          var minute = Number(hourAndMinute[1]);
          if (minute >= 0 && minute < 60) {
            if (hourAndMinute[1].length === 1) {
              return '0'.concat(hourAndMinute[1]);
            }

            return hourAndMinute[1];
          }
        }

        return '';
      }

      return '';
    }
  }]);

  return TimeUtil;
}();

TimeUtil.validateTime = new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');

TimeUtil.inputType = {
  HOUR: 0,
  MINUTE: 1
};

TimeUtil.keyCodes = {
  BACKSPACE: 8,
  ARROWLEFT: 37,
  ARROWUP: 38,
  ARROWRIGHT: 39,
  ARROWDOWN: 40,
  DELETE: 46
};

TimeUtil.isConsideredMobileDevice = function () {
  return window.matchMedia('(max-width: 1024px)').matches && ('ontouchstart' in window
  // eslint-disable-next-line no-undef
  || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
};

// These formats are designed to be the possible props for the
// variant prop of the TimeInput. They should not change.
Object.defineProperty(TimeUtil, 'FORMAT_12_HOUR', {
  value: '12-hour',
  configurable: false,
  enumerable: true,
  writable: false
});

Object.defineProperty(TimeUtil, 'FORMAT_24_HOUR', {
  value: '24-hour',
  configurable: false,
  enumerable: true,
  writable: false
});

exports.default = TimeUtil;