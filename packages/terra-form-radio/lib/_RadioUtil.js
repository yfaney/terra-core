'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// TODO: move this to utils package. Issue #1010.
var isConsideredMobileDevice = function isConsideredMobileDevice() {
  return window.matchMedia('(max-width: 1024px)').matches && ('ontouchstart' in window
  // eslint-disable-next-line no-undef
  || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
};

exports.default = {
  isConsideredMobileDevice: isConsideredMobileDevice
};