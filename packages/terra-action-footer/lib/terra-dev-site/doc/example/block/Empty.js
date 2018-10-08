'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BlockActionFooter = require('terra-action-footer/lib/BlockActionFooter');

var _BlockActionFooter2 = _interopRequireDefault(_BlockActionFooter);

var _ExampleTemplate = require('../../common/ExampleTemplate');

var _ExampleTemplate2 = _interopRequireDefault(_ExampleTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = function () {
  return _react2.default.createElement(
    _ExampleTemplate2.default,
    null,
    _react2.default.createElement(_BlockActionFooter2.default, null)
  );
};