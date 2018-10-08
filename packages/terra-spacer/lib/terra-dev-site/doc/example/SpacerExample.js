'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _Spacer = require('terra-spacer/lib/Spacer');

var _Spacer2 = _interopRequireDefault(_Spacer);

require('terra-spacer/lib/terra-dev-site/doc/example/Spacer.module.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
var SpacerExample = function SpacerExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Spacer2.default,
      { className: 'spacerdemodefault', paddingTop: 'large+4', paddingBottom: 'large+4', paddingLeft: 'large+4', paddingRight: 'large+4', isInlineBlock: true },
      _react2.default.createElement(_terraButton2.default, { text: 'Default' })
    ),
    _react2.default.createElement(
      _Spacer2.default,
      { className: 'spacerdemoprimary', paddingTop: 'large+2', paddingBottom: 'large+2', paddingLeft: 'large+2', paddingRight: 'large+2', isInlineBlock: true },
      _react2.default.createElement(_terraButton2.default, { text: 'Emphasis', variant: 'emphasis' })
    )
  );
};

exports.default = SpacerExample;