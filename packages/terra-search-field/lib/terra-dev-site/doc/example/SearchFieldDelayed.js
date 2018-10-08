'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchFieldExampleTemplate = require('terra-search-field/lib/terra-dev-site/doc/example/SearchFieldExampleTemplate');

var _SearchFieldExampleTemplate2 = _interopRequireDefault(_SearchFieldExampleTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchFieldExample = function SearchFieldExample() {
  return _react2.default.createElement(_SearchFieldExampleTemplate2.default, {
    searchDelay: 2000
  });
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = SearchFieldExample;