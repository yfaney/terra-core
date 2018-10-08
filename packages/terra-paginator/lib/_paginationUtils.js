"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var calculatePages = function calculatePages(totalCount, itemCountPerPage) {
  return Math.ceil(totalCount / itemCountPerPage);
};

var pageSet = function pageSet(index, totalPages) {
  var sequence = [];
  var numberShiftPoint = 7;
  var maxPagesDisplayed = 10;
  var previousSequenceCount = 5;
  var nextSequenceCount = 4;
  var mutableIndex = index;

  if (mutableIndex < 1) {
    mutableIndex = 1;
  } else if (mutableIndex > totalPages) {
    mutableIndex = totalPages;
  }

  if (mutableIndex < numberShiftPoint) {
    for (var i = 1; i <= maxPagesDisplayed; i += 1) {
      sequence.push(i);
    }
  } else if (mutableIndex <= totalPages && mutableIndex > totalPages - maxPagesDisplayed && mutableIndex > totalPages - previousSequenceCount) {
    for (var _i = totalPages; _i > totalPages - maxPagesDisplayed; _i -= 1) {
      sequence.push(_i);
    }
  } else {
    for (var _i2 = mutableIndex; _i2 >= mutableIndex - previousSequenceCount; _i2 -= 1) {
      sequence.push(_i2);
    }

    for (var _i3 = mutableIndex + 1; _i3 <= mutableIndex + nextSequenceCount; _i3 += 1) {
      sequence.push(_i3);
    }
  }

  return sequence.sort(function (a, b) {
    return a - b;
  });
};

var KEYCODES = {
  ENTER: 13,
  SPACE: 32
};

exports.calculatePages = calculatePages;
exports.pageSet = pageSet;
exports.KEYCODES = KEYCODES;