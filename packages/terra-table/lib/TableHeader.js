'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('terra-base/lib/baseStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The children passed to the component
   */
  children: _propTypes2.default.node.isRequired
};

var TableHeader = function TableHeader(_ref) {
  var children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['children']);

  var childrenArray = _react2.default.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log('Number of Columns are ' + childrenArray.length + '. This is more than columns limit');
    childrenArray = childrenArray.slice(0, 16);
  }

  return _react2.default.createElement(
    'thead',
    customProps,
    _react2.default.createElement(
      'tr',
      null,
      childrenArray
    )
  );
};

TableHeader.propTypes = propTypes;

exports.default = TableHeader;