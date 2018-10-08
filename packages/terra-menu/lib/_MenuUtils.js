"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isFullScreen = function isFullScreen(isHeightBounded, isWidthBounded, boundingFrame, popupWidth) {
  var width = popupWidth;
  var maxWidth = void 0;

  if (boundingFrame && !isWidthBounded) {
    maxWidth = boundingFrame.clientWidth;
  } else {
    maxWidth = window.innerWidth;
  }

  if (maxWidth <= 0) {
    return false;
  }

  return isHeightBounded && (width >= maxWidth || isWidthBounded);
};

var KEYCODES = {
  TAB: 9,
  ENTER: 13,
  SPACE: 32,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

var MenuUtils = {
  isFullScreen: isFullScreen,
  KEYCODES: KEYCODES
};

exports.default = MenuUtils;