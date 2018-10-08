'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var gridTemplate = function gridTemplate(prop, layout) {
  var _ref;

  var grid = layout['grid-template-' + prop];
  if (grid === undefined) {
    return {};
  }

  var gap = (layout['grid-gap'] || '0').split(/\s+/);
  gap = prop === 'rows' ? gap[0] // If 2 values are specified row is the 1st value else its the first
  : gap.slice(-1)[0]; // If 2 values then column is the 2nd, else its the first

  return _ref = {}, _defineProperty(_ref, 'grid-template-' + prop, grid), _defineProperty(_ref, '-ms-grid-' + prop, grid.split(/\s+/).join(' ' + gap + ' ')), _ref;
};

var gridLineStart = function gridLineStart(prop, region) {
  var _ref2;

  var start = region['grid-' + prop + '-start'];
  if (start === undefined) {
    return {};
  }

  return _ref2 = {}, _defineProperty(_ref2, 'grid-' + prop + '-start', '' + start), _defineProperty(_ref2, '-ms-grid-' + prop, '' + (start * 2 - 1)), _ref2;
};

var gridLineEnd = function gridLineEnd(prop, region) {
  var _ref3;

  if (region['grid-' + prop + '-end'] === undefined) {
    return {};
  }

  var start = region['grid-' + prop + '-start'] || region['grid-' + prop + '-end'];
  var end = region['grid-' + prop + '-end'];
  // IE has gaps as columns.. so columns spanned is double
  var span = start === end ? 1 // No gaps traversed
  : (end - start) * 2 - 1;

  return _ref3 = {}, _defineProperty(_ref3, 'grid-' + prop + '-end', '' + end), _defineProperty(_ref3, '-ms-grid-' + prop + '-span', '' + span), _ref3;
};

var gridGap = function gridGap(layout) {
  return layout['grid-gap'] ? { 'grid-gap': layout['grid-gap'] } : {};
};

var gridDisplay = function gridDisplay(layout) {
  if (Object.keys(layout).length === 0) {
    return {};
  }

  var isCSSGridsEnabled = window.CSS && window.CSS.supports && window.CSS.supports('display', 'grid');
  return {
    display: isCSSGridsEnabled ? 'grid' : '-ms-grid'
  };
};

var grid = function grid(template) {
  return _extends({}, gridDisplay(template), gridGap(template), gridTemplate('columns', template), gridTemplate('rows', template), template.style || {});
};

var region = function region(position) {
  return _extends({}, gridLineStart('column', position), gridLineEnd('column', position), gridLineStart('row', position), gridLineEnd('row', position), position.style || {});
};

exports.grid = grid;
exports.region = region;