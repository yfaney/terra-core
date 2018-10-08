'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ToggleSectionHeader = require('terra-toggle-section-header/lib/ToggleSectionHeader');

var _ToggleSectionHeader2 = _interopRequireDefault(_ToggleSectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Title of the example
   */
  exampleTitle: _propTypes2.default.string.isRequired,
  /**
   * Props to be spread onto TerraSectionHeader
   */
  // eslint-disable-next-line react/forbid-prop-types
  exampleProps: _propTypes2.default.object.isRequired,
  /**
   * Props to populate children of TerraSectionHeader
   */
  children: _propTypes2.default.node.isRequired
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var ToggleSectionHeaderExampleTemplate = function ToggleSectionHeaderExampleTemplate(_ref) {
  var exampleTitle = _ref.exampleTitle,
      exampleProps = _ref.exampleProps,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      exampleTitle
    ),
    _react2.default.createElement(
      _ToggleSectionHeader2.default,
      exampleProps,
      children
    )
  );
};

ToggleSectionHeaderExampleTemplate.propTypes = propTypes;

exports.default = ToggleSectionHeaderExampleTemplate;