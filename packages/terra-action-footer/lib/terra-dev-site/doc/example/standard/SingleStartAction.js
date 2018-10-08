'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActionFooter = require('terra-action-footer/lib/ActionFooter');

var _ActionFooter2 = _interopRequireDefault(_ActionFooter);

var _ExampleTemplate = require('../../common/ExampleTemplate');

var _ExampleTemplate2 = _interopRequireDefault(_ExampleTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = function () {
  return _react2.default.createElement(
    _ExampleTemplate2.default,
    null,
    _react2.default.createElement(_ActionFooter2.default, {
      start: _react2.default.createElement(
        'a',
        { href: '/#/site/action-footer' },
        'Start Action'
      )
    })
  );
};