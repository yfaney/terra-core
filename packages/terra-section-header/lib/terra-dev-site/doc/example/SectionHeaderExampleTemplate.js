'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SectionHeader = require('terra-section-header/lib/SectionHeader');

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Title of the example
   */
  title: _propTypes2.default.string.isRequired,
  /**
   * Props to be spread onto SectionHeader
   */
  // eslint-disable-next-line react/forbid-prop-types
  exampleProps: _propTypes2.default.object.isRequired
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var SectionHeaderExampleTemplate = function SectionHeaderExampleTemplate(_ref) {
  var title = _ref.title,
      exampleProps = _ref.exampleProps;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      title
    ),
    _react2.default.createElement(_SectionHeader2.default, exampleProps)
  );
};

SectionHeaderExampleTemplate.propTypes = propTypes;

exports.default = SectionHeaderExampleTemplate;