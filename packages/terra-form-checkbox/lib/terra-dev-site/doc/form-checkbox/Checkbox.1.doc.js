'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('../../../../package.json');

var _Checkbox = require('!raw-loader!../../../../src/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _DefaultCheckboxExample = require('../example/checkbox/DefaultCheckboxExample');

var _DefaultCheckboxExample2 = _interopRequireDefault(_DefaultCheckboxExample);

var _DefaultCheckboxExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/checkbox/DefaultCheckboxExample');

var _DefaultCheckboxExample4 = _interopRequireDefault(_DefaultCheckboxExample3);

var _DisabledCheckboxExample = require('../example/checkbox/DisabledCheckboxExample');

var _DisabledCheckboxExample2 = _interopRequireDefault(_DisabledCheckboxExample);

var _DisabledCheckboxExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/checkbox/DisabledCheckboxExample');

var _DisabledCheckboxExample4 = _interopRequireDefault(_DisabledCheckboxExample3);

var _HiddenLabelCheckboxExample = require('../example/checkbox/HiddenLabelCheckboxExample');

var _HiddenLabelCheckboxExample2 = _interopRequireDefault(_HiddenLabelCheckboxExample);

var _HiddenLabelCheckboxExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/checkbox/HiddenLabelCheckboxExample');

var _HiddenLabelCheckboxExample4 = _interopRequireDefault(_HiddenLabelCheckboxExample3);

var _LongTextCheckboxExample = require('../example/checkbox/LongTextCheckboxExample');

var _LongTextCheckboxExample2 = _interopRequireDefault(_LongTextCheckboxExample);

var _LongTextCheckboxExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/checkbox/LongTextCheckboxExample');

var _LongTextCheckboxExample4 = _interopRequireDefault(_LongTextCheckboxExample3);

var _InlineCheckboxesExample = require('../example/checkbox/InlineCheckboxesExample');

var _InlineCheckboxesExample2 = _interopRequireDefault(_InlineCheckboxesExample);

var _InlineCheckboxesExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/checkbox/InlineCheckboxesExample');

var _InlineCheckboxesExample4 = _interopRequireDefault(_InlineCheckboxesExample3);

var _MultipleCheckboxesExample = require('../example/checkbox/MultipleCheckboxesExample');

var _MultipleCheckboxesExample2 = _interopRequireDefault(_MultipleCheckboxesExample);

var _MultipleCheckboxesExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/checkbox/MultipleCheckboxesExample');

var _MultipleCheckboxesExample4 = _interopRequireDefault(_MultipleCheckboxesExample3);

var _MobileCheckboxExample = require('../example/checkbox/MobileCheckboxExample');

var _MobileCheckboxExample2 = _interopRequireDefault(_MobileCheckboxExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source


// Example Files


/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

var DocPage = function (_React$Component) {
  _inherits(DocPage, _React$Component);

  function DocPage() {
    _classCallCheck(this, DocPage);

    var _this = _possibleConstructorReturn(this, (DocPage.__proto__ || Object.getPrototypeOf(DocPage)).call(this));

    _this.state = { isMobile: false };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(DocPage, [{
    key: 'onChange',
    value: function onChange() {
      if (!window.ontouchstart) {
        this.setState({ isMobile: true });
        window.ontouchstart = 'true';
      } else if (this.state.isMobile) {
        delete window.ontouchstart;
        this.setState({ isMobile: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_terraDocTemplate2.default, {
        packageName: _package.name,
        readme: _README2.default,
        srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
        examples: [{
          title: 'Default Checkbox',
          example: _react2.default.createElement(_DefaultCheckboxExample2.default, null),
          source: _DefaultCheckboxExample4.default
        }, {
          title: 'Disabled Checkbox',
          example: _react2.default.createElement(_DisabledCheckboxExample2.default, null),
          source: _DisabledCheckboxExample4.default
        }, {
          title: 'Hidden Label Checkbox',
          example: _react2.default.createElement(_HiddenLabelCheckboxExample2.default, null),
          source: _HiddenLabelCheckboxExample4.default
        }, {
          title: 'Long Text Checkbox',
          example: _react2.default.createElement(_LongTextCheckboxExample2.default, null),
          source: _LongTextCheckboxExample4.default
        }, {
          title: 'Multiple Inline Checkboxes',
          example: _react2.default.createElement(_InlineCheckboxesExample2.default, null),
          source: _InlineCheckboxesExample4.default
        }, {
          title: 'Multiple Checkboxes - first defaults to checked',
          example: _react2.default.createElement(_MultipleCheckboxesExample2.default, null),
          source: _MultipleCheckboxesExample4.default
        }, {
          title: '[Theme Specific] Resize checkboxes on non-desktop touch device',
          example: _react2.default.createElement(_MobileCheckboxExample2.default, { onChange: this.onChange })
        }],
        propsTables: [{
          componentName: 'Checkbox',
          componentSrc: _Checkbox2.default
        }]
      });
    }
  }]);

  return DocPage;
}(_react2.default.Component);

exports.default = DocPage;