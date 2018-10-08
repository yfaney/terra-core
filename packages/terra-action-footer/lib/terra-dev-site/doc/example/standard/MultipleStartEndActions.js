'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

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
      ),
      end: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _terraSpacer2.default,
          { isInlineBlock: true, paddingRight: 'medium' },
          _react2.default.createElement(_terraButton2.default, { text: 'Submit', variant: _terraButton2.default.Opts.Variants.EMPHASIS })
        ),
        _react2.default.createElement(_terraButton2.default, { text: 'Cancel' })
      )
    })
  );
};