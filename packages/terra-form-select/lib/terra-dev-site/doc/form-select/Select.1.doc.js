'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _Option = require('!raw-loader!../../../../src/_Option');

var _Option2 = _interopRequireDefault(_Option);

var _OptGroup = require('!raw-loader!../../../../src/_OptGroup');

var _OptGroup2 = _interopRequireDefault(_OptGroup);

var _Select = require('!raw-loader!../../../../src/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Controlled = require('../example/Controlled');

var _Controlled2 = _interopRequireDefault(_Controlled);

var _Controlled3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/Controlled');

var _Controlled4 = _interopRequireDefault(_Controlled3);

var _Combobox = require('../example/Combobox');

var _Combobox2 = _interopRequireDefault(_Combobox);

var _Combobox3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/Combobox');

var _Combobox4 = _interopRequireDefault(_Combobox3);

var _Default = require('../example/Default');

var _Default2 = _interopRequireDefault(_Default);

var _Default3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/Default');

var _Default4 = _interopRequireDefault(_Default3);

var _Disabled = require('../example/Disabled');

var _Disabled2 = _interopRequireDefault(_Disabled);

var _Disabled3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/Disabled');

var _Disabled4 = _interopRequireDefault(_Disabled3);

var _Invalid = require('../example/Invalid');

var _Invalid2 = _interopRequireDefault(_Invalid);

var _Invalid3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/Invalid');

var _Invalid4 = _interopRequireDefault(_Invalid3);

var _MaxHeight = require('../example/MaxHeight');

var _MaxHeight2 = _interopRequireDefault(_MaxHeight);

var _MaxHeight3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/MaxHeight');

var _MaxHeight4 = _interopRequireDefault(_MaxHeight3);

var _Multiple = require('../example/Multiple');

var _Multiple2 = _interopRequireDefault(_Multiple);

var _Multiple3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/Multiple');

var _Multiple4 = _interopRequireDefault(_Multiple3);

var _OptGroup3 = require('../example/OptGroup');

var _OptGroup4 = _interopRequireDefault(_OptGroup3);

var _OptGroup5 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/OptGroup');

var _OptGroup6 = _interopRequireDefault(_OptGroup5);

var _Search = require('../example/Search');

var _Search2 = _interopRequireDefault(_Search);

var _Search3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/Search');

var _Search4 = _interopRequireDefault(_Search3);

var _Tag = require('../example/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _Tag3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/Tag');

var _Tag4 = _interopRequireDefault(_Tag3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var Index = function Index() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: 'terra-form-select',
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/terra-form-select',
    propsTables: [{
      componentName: 'Select',
      componentSrc: _Select2.default
    }, {
      componentName: 'Option',
      componentSrc: _Option2.default
    }, {
      componentName: 'OptGroup',
      componentSrc: _OptGroup2.default
    }],
    examples: [{
      title: 'Default',
      description: 'A default variant allows selecting a single option.',
      example: _react2.default.createElement(_Default2.default, null),
      source: _Default4.default
    }, {
      title: 'Search',
      description: 'A search variant provides a searchable single select.',
      example: _react2.default.createElement(_Search2.default, null),
      source: _Search4.default
    }, {
      title: 'Combobox',
      description: 'A combobox variant allows a user to enter a single free text entry or select a single option from the the dropdown.',
      example: _react2.default.createElement(_Combobox2.default, null),
      source: _Combobox4.default
    }, {
      title: 'Multiple',
      description: 'A multiple variant allows searching and selecting multiple options.',
      example: _react2.default.createElement(_Multiple2.default, null),
      source: _Multiple4.default
    }, {
      title: 'Tag',
      description: 'A tag variant allows a user to enter multiple custom free text entries or select multiple options from the the dropdown.',
      example: _react2.default.createElement(_Tag2.default, null),
      source: _Tag4.default
    }, {
      title: 'Disabled',
      example: _react2.default.createElement(_Disabled2.default, null),
      source: _Disabled4.default
    }, {
      title: 'Invalid',
      description: 'Applies theme-specific styling for invalid. Will also display error text when used with a Field.',
      example: _react2.default.createElement(_Invalid2.default, null),
      source: _Invalid4.default
    }, {
      title: 'OptGroup',
      description: 'An OptGroup provides a way to group options together within the listbox. Can be applied to all select variants (default, search, combobox, multiple, tag).',
      example: _react2.default.createElement(_OptGroup4.default, null),
      source: _OptGroup6.default
    }, {
      title: 'Custom Max Height',
      description: 'An example of implementing a custom max height of the dropdown.',
      example: _react2.default.createElement(_MaxHeight2.default, null),
      source: _MaxHeight4.default
    }, {
      title: 'Controlled',
      description: 'An example of implementing a controlled Select.',
      example: _react2.default.createElement(_Controlled2.default, null),
      source: _Controlled4.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = Index;