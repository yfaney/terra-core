'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shorthandValidator = exports.mapShorthandToObject = exports.ShorthandPropErrors = undefined;

var _spacerConstants = require('./_spacerConstants');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SHORTHAND_DELIMITER = ' ';
var shLengthBoundaries = { min: 1, max: 4 };

var conflictingPropNamesError = function conflictingPropNamesError() {
  var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '<SUPPLY SHORTHAND PROP NAME>';
  var conflictingPropName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '<SUPPLY CONFLICTING PROP NAME>';
  var componentName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Spacer';
  return new Error('Expected only ' + propName + ' or ' + conflictingPropName + ' to be supplied to ' + componentName + ' but both were provided. Validation failed.');
};

var invalidShArgsLengthError = function invalidShArgsLengthError() {
  var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '<SUPPLY SHORTHAND PROP NAME>';
  var valuesLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '<SUPPLY RECEIVED ARGS LENGTH>';
  var minLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : shLengthBoundaries.min;
  var maxLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : shLengthBoundaries.max;
  var componentName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'Spacer';
  return new Error('Invalid number of argument substrings provided to ' + propName + ' in ' + componentName + '. Expected ' + minLength + '-' + maxLength + '. Received ' + valuesLength + '. Validation failed.');
};

var invalidShArgValuesError = function invalidShArgValuesError() {
  var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '<SUPPLY SHORTHAND PROP NAME>';
  var invalidShValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var expectedValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.values(_spacerConstants.SpacerSizes);
  var componentName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Spacer';
  return new Error('Expected ' + propName + ' shorthand values to be one of ' + expectedValues + ' but "' + invalidShValues + '" supplied to ' + componentName + '. Validation Failed.');
};

var ShorthandPropErrors = exports.ShorthandPropErrors = {
  conflictingPropName: conflictingPropNamesError,
  invalidShorthandLength: invalidShArgsLengthError,
  invalidShorthandArg: invalidShArgValuesError
};

var mapShorthandToObject = exports.mapShorthandToObject = function mapShorthandToObject() {
  var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var propVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var shValues = propVal.split(SHORTHAND_DELIMITER);

  var generateShObject = function generateShObject(top, right, bottom, left) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, propName + 'Top', top), _defineProperty(_ref, propName + 'Right', right), _defineProperty(_ref, propName + 'Bottom', bottom), _defineProperty(_ref, propName + 'Left', left), _ref;
  };

  switch (shValues.length) {
    case 1:
      return generateShObject(shValues[0], shValues[0], shValues[0], shValues[0]);
    case 2:
      return generateShObject(shValues[0], shValues[1], shValues[0], shValues[1]);
    case 3:
      return generateShObject(shValues[0], shValues[1], shValues[2], shValues[1]);
    case 4:
      return generateShObject(shValues[0], shValues[1], shValues[2], shValues[3]);
    default:
      return {};
  }
};

var shorthandValidator = exports.shorthandValidator = function shorthandValidator() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var propVal = props[propName];
  if (propVal === undefined || propVal === _spacerConstants.SpacerSizes.NONE) {
    return null;
  }

  var conflictingPropName = function () {
    var propertyConflicts = function propertyConflicts(dir) {
      return props['' + propName + dir] && props['' + propName + dir] !== _spacerConstants.SpacerSizes.NONE;
    };

    var conflictProp = (propertyConflicts('Top') ? propName + 'Top' : undefined) || (propertyConflicts('Right') ? propName + 'Right' : undefined) || (propertyConflicts('Bottom') ? propName + 'Bottom' : undefined) || (propertyConflicts('Left') ? propName + 'Left' : undefined);

    return conflictProp;
  }();

  if (conflictingPropName) {
    return conflictingPropNamesError(propName, conflictingPropName);
  }

  var shValuesUnfiltered = propVal.split(SHORTHAND_DELIMITER);
  var shValues = shValuesUnfiltered.filter(function (val) {
    return val;
  }); // Remove any falsey values (including empty strings)
  var shValueCountValid = shValues.length >= shLengthBoundaries.min && shValues.length <= shLengthBoundaries.max;

  if (!shValueCountValid) {
    return invalidShArgsLengthError(propName, shValues.length);
  }

  var invalidShValues = function () {
    var sizes = Object.values(_spacerConstants.SpacerSizes);
    var invalidValues = shValues.filter(function (val) {
      return sizes.indexOf(val) === -1;
    });
    return invalidValues.length > 0 ? invalidValues : null;
  }();

  if (invalidShValues) {
    return invalidShArgValuesError(propName, invalidShValues);
  }

  return null;
};