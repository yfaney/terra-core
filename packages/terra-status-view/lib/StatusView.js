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

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _terraDivider = require('terra-divider');

var _terraDivider2 = _interopRequireDefault(_terraDivider);

var _StatusViewModule = require('./StatusView.module.scss');

var _StatusViewModule2 = _interopRequireDefault(_StatusViewModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_StatusViewModule2.default);

var variants = {
  NODATA: 'no-data',
  NOMATCHINGRESULTS: 'no-matching-results',
  NOTAUTHORIZED: 'not-authorized',
  ERROR: 'error',
  CUSTOM: 'custom'
};

var propTypes = {
  /**
   * An array of actionable buttons to display.
   */
  children: _propTypes2.default.node,

  /**
   * The glyph that is to be displayed for the `custom` variant.
   */
  customGlyph: _propTypes2.default.node,

  /**
   *  Determines if the content should be aligned vertically at the top of the container rather than in the middle.
   */
  isAlignedTop: _propTypes2.default.bool,

  /**
   * Determines if the glyph should be displayed.
   */
  isGlyphHidden: _propTypes2.default.bool,

  /**
   * The descriptive text to display.
   */
  message: _propTypes2.default.string,

  /**
   * The status view's title to display. Status views with variants of type `no-data`,
   * `no-matching-results`, `not-authorized`,
   * `error` will have defaulted values unless overridden with this prop.
   */
  title: _propTypes2.default.string,

  /**
   * Determines the glyph to display, one of the following: `no-data`,
   * `no-matching-results`, `not-authorized`,
   * `error`, or `custom`.
   */
  variant: _propTypes2.default.string
};

var defaultProps = {
  children: [],
  customGlyph: undefined,
  isAlignedTop: false,
  isGlyphHidden: false,
  message: undefined,
  title: undefined,
  variant: variants.ERROR
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var StatusView = function (_React$Component) {
  _inherits(StatusView, _React$Component);

  function StatusView(props, context) {
    _classCallCheck(this, StatusView);

    var _this = _possibleConstructorReturn(this, (StatusView.__proto__ || Object.getPrototypeOf(StatusView)).call(this, props, context));

    _this.state = {
      showGlyph: true,
      paddingBottom: 0,
      paddingTop: 0
    };
    _this.showAndCenterItems = _this.showAndCenterItems.bind(_this);
    return _this;
  }

  _createClass(StatusView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // call after all items have rendered in the view to calculate which items
      // can be shown and center the items inside the view appropriately
      this.showAndCenterItems();
    }

    /**
     * Will calculate which items inside the status view can appear based on fixed
     * height of its container and will update the inner padding to center the items
     * with 40% of the remaining space at the top with 60% on the bottom.
     */

  }, {
    key: 'showAndCenterItems',
    value: function showAndCenterItems() {
      var viewHeight = this.innerNode.offsetHeight;

      var paddingTop = 0;
      var paddingBottom = 0;
      var showGlyph = false;

      // get the content heights of the nodes that are to be shown if have content and cannot be hidden
      var componentsHeight = this.titleNode.offsetHeight;
      if (this.actionsNode) {
        componentsHeight += this.actionsNode.offsetHeight;
      }
      if (this.messageNode) {
        componentsHeight += this.messageNode.offsetHeight;
      }
      if (this.dividerNode) {
        componentsHeight += this.dividerNode.offsetHeight;
      }

      if (this.glyphNode && viewHeight >= componentsHeight + this.glyphNode.offsetHeight && this.innerNode.offsetWidth >= this.glyphNode.offsetWidth) {
        // if glyph exists and can fit inside the container's height and width, distribute remaining padding to center
        showGlyph = true;
        if (!this.props.isAlignedTop) {
          var remainingHeight = viewHeight - (componentsHeight + this.glyphNode.offsetHeight);
          paddingTop = remainingHeight * 0.4;
          paddingBottom = remainingHeight * 0.6;
        }
      } else if (!this.props.isAlignedTop) {
        // glyph does not exist or does not fit, distribute remaining padding if any to center
        var _remainingHeight = viewHeight - componentsHeight;
        if (_remainingHeight > 0) {
          paddingTop = _remainingHeight * 0.4;
          paddingBottom = _remainingHeight * 0.6;
        }
      }

      // set which components can fit into the view
      this.setState({
        showGlyph: showGlyph,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          customGlyph = _props.customGlyph,
          isAlignedTop = _props.isAlignedTop,
          isGlyphHidden = _props.isGlyphHidden,
          message = _props.message,
          title = _props.title,
          variant = _props.variant,
          customProps = _objectWithoutProperties(_props, ['children', 'customGlyph', 'isAlignedTop', 'isGlyphHidden', 'message', 'title', 'variant']);

      var intl = this.context.intl;


      var glyphSection = void 0;
      if (!isGlyphHidden && this.state.showGlyph) {
        if (variant === variants.CUSTOM) {
          glyphSection = _react2.default.createElement(
            'div',
            { className: cx('glyph'), ref: function ref(element) {
                _this2.glyphNode = element;
              } },
            customGlyph
          );
        } else {
          glyphSection = _react2.default.createElement(
            'div',
            { className: cx('glyph'), ref: function ref(element) {
                _this2.glyphNode = element;
              } },
            _react2.default.createElement('svg', { className: cx(variant) })
          );
        }
      }

      var messageSection = void 0;
      if (message) {
        messageSection = _react2.default.createElement(
          'div',
          { className: cx('message'), ref: function ref(element) {
              _this2.messageNode = element;
            } },
          message
        );
      }

      var actionSection = void 0;
      if (_react2.default.Children.count(children) > 0) {
        actionSection = _react2.default.createElement(
          'div',
          { className: cx('actions'), ref: function ref(element) {
              _this2.actionsNode = element;
            } },
          children
        );
      }

      var defaultTitle = title;
      if (!defaultTitle) {
        defaultTitle = variant === StatusView.Opts.variants.CUSTOM ? '' : intl.formatMessage({ id: 'Terra.status-view.' + variant });
      }

      var dividerSection = void 0;
      if (messageSection || actionSection) {
        dividerSection = _react2.default.createElement(
          'div',
          { className: cx('divider'), ref: function ref(element) {
              _this2.dividerNode = element;
            } },
          _react2.default.createElement(_terraDivider2.default, null)
        );
      }

      var titleSection = _react2.default.createElement(
        'div',
        { className: cx('title'), ref: function ref(element) {
            _this2.titleNode = element;
          } },
        defaultTitle
      );

      var statusViewClassNames = cx(['outer-view', customProps.className]);

      var statusViewInnerStyles = {
        paddingTop: this.state.paddingTop + 'px',
        paddingBottom: this.state.paddingBottom + 'px'
      };

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, {
          className: statusViewClassNames
        }),
        _react2.default.createElement(
          'div',
          {
            className: cx('inner-view'),
            style: _extends({}, statusViewInnerStyles),
            ref: function ref(element) {
              _this2.innerNode = element;
            }
          },
          glyphSection,
          _react2.default.createElement(
            'div',
            { className: cx('message-content-group') },
            titleSection,
            dividerSection,
            messageSection
          ),
          actionSection
        )
      );
    }
  }]);

  return StatusView;
}(_react2.default.Component);

StatusView.propTypes = propTypes;
StatusView.contextTypes = contextTypes;
StatusView.defaultProps = defaultProps;
StatusView.Opts = {};
StatusView.Opts.variants = variants;
exports.default = StatusView;