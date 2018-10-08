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

var _Radio = require('!raw-loader!../../../../src/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _DefaultRadioExample = require('../example/radio/DefaultRadioExample');

var _DefaultRadioExample2 = _interopRequireDefault(_DefaultRadioExample);

var _DefaultRadioExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/radio/DefaultRadioExample');

var _DefaultRadioExample4 = _interopRequireDefault(_DefaultRadioExample3);

var _DisabledRadioExample = require('../example/radio/DisabledRadioExample');

var _DisabledRadioExample2 = _interopRequireDefault(_DisabledRadioExample);

var _DisabledRadioExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/radio/DisabledRadioExample');

var _DisabledRadioExample4 = _interopRequireDefault(_DisabledRadioExample3);

var _HiddenLabelRadioExample = require('../example/radio/HiddenLabelRadioExample');

var _HiddenLabelRadioExample2 = _interopRequireDefault(_HiddenLabelRadioExample);

var _HiddenLabelRadioExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/radio/HiddenLabelRadioExample');

var _HiddenLabelRadioExample4 = _interopRequireDefault(_HiddenLabelRadioExample3);

var _LongTextRadioExample = require('../example/radio/LongTextRadioExample');

var _LongTextRadioExample2 = _interopRequireDefault(_LongTextRadioExample);

var _LongTextRadioExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/radio/LongTextRadioExample');

var _LongTextRadioExample4 = _interopRequireDefault(_LongTextRadioExample3);

var _InlineRadiosExample = require('../example/radio/InlineRadiosExample');

var _InlineRadiosExample2 = _interopRequireDefault(_InlineRadiosExample);

var _InlineRadiosExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/radio/InlineRadiosExample');

var _InlineRadiosExample4 = _interopRequireDefault(_InlineRadiosExample3);

var _MultipleRadiosExample = require('../example/radio/MultipleRadiosExample');

var _MultipleRadiosExample2 = _interopRequireDefault(_MultipleRadiosExample);

var _MultipleRadiosExample3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/radio/MultipleRadiosExample');

var _MultipleRadiosExample4 = _interopRequireDefault(_MultipleRadiosExample3);

var _MobileButton = require('../example/radio/MobileButton');

var _MobileButton2 = _interopRequireDefault(_MobileButton);

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
          title: 'Default Radio',
          example: _react2.default.createElement(_DefaultRadioExample2.default, null),
          source: _DefaultRadioExample4.default
        }, {
          title: 'Disabled Radio',
          example: _react2.default.createElement(_DisabledRadioExample2.default, null),
          source: _DisabledRadioExample4.default
        }, {
          title: 'Hidden Label Radio',
          example: _react2.default.createElement(_HiddenLabelRadioExample2.default, null),
          source: _HiddenLabelRadioExample4.default
        }, {
          title: 'Long Text Radio',
          example: _react2.default.createElement(_LongTextRadioExample2.default, null),
          source: _LongTextRadioExample4.default
        }, {
          title: 'Multiple Inline Radios',
          example: _react2.default.createElement(_InlineRadiosExample2.default, null),
          source: _InlineRadiosExample4.default
        }, {
          title: 'Multiple Radios - first defaults to checked',
          example: _react2.default.createElement(_MultipleRadiosExample2.default, null),
          source: _MultipleRadiosExample4.default
        }, {
          title: '[Theme Specific] Resize radio buttons on non-desktop touch device',
          example: _react2.default.createElement(_MobileButton2.default, { onChange: this.onChange })
        }],
        propsTables: [{
          componentName: 'Radio',
          componentSrc: _Radio2.default
        }]
      });
    }
  }]);

  return DocPage;
}(_react2.default.Component);

exports.default = DocPage;