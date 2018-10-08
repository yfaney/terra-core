'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.uniqueid');

var _lodash2 = _interopRequireDefault(_lodash);

var _StatusView = require('terra-status-view/lib/StatusView');

var _StatusView2 = _interopRequireDefault(_StatusView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var propTypes = {
  children: _propTypes2.default.node,
  customGlyph: _propTypes2.default.node,
  isAlignedTop: _propTypes2.default.bool,
  isGlyphHidden: _propTypes2.default.bool,
  message: _propTypes2.default.string,
  title: _propTypes2.default.string,
  variant: _propTypes2.default.string
};

var StatusViewTemplate = function (_React$Component) {
  _inherits(StatusViewTemplate, _React$Component);

  function StatusViewTemplate(props) {
    _classCallCheck(this, StatusViewTemplate);

    var _this = _possibleConstructorReturn(this, (StatusViewTemplate.__proto__ || Object.getPrototypeOf(StatusViewTemplate)).call(this, props));

    _this.state = {
      id: undefined,
      variant: 'no-data'
    };

    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    return _this;
  }

  _createClass(StatusViewTemplate, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.state.id = (0, _lodash2.default)();
    }
  }, {
    key: 'getId',
    value: function getId(name) {
      return name + this.state.id;
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'renderVariantForm',
    value: function renderVariantForm() {
      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: this.getId('variant') },
          'Variant: '
        ),
        _react2.default.createElement(
          'select',
          { id: this.getId('variant'), name: 'variant', value: this.state.variant, onChange: this.handleSelectChange },
          _react2.default.createElement(
            'option',
            { value: 'no-data' },
            ' no-data '
          ),
          _react2.default.createElement(
            'option',
            { value: 'no-matching-results' },
            ' no-matching-results '
          ),
          _react2.default.createElement(
            'option',
            { value: 'not-authorized' },
            ' not-authorized '
          ),
          _react2.default.createElement(
            'option',
            { value: 'error' },
            ' error '
          ),
          _react2.default.createElement(
            'option',
            { value: 'custom' },
            ' custom '
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          customGlyph = _props.customGlyph,
          isAlignedTop = _props.isAlignedTop,
          isGlyphHidden = _props.isGlyphHidden,
          message = _props.message,
          title = _props.title,
          variant = _props.variant,
          customProps = _objectWithoutProperties(_props, ['children', 'customGlyph', 'isAlignedTop', 'isGlyphHidden', 'message', 'title', 'variant']);

      var styleAttributes = _extends({}, customProps.style);
      styleAttributes.border = '1px solid black';

      return _react2.default.createElement(
        'div',
        null,
        this.renderVariantForm(),
        _react2.default.createElement(
          'div',
          { style: styleAttributes },
          _react2.default.createElement(
            _StatusView2.default,
            {
              isAlignedTop: isAlignedTop,
              isGlyphHidden: isGlyphHidden,
              variant: this.state.variant,
              title: title,
              message: message,
              customGlyph: customGlyph
            },
            children
          )
        )
      );
    }
  }]);

  return StatusViewTemplate;
}(_react2.default.Component);

StatusViewTemplate.propTypes = propTypes;
exports.default = StatusViewTemplate;