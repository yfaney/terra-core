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

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

require('terra-base/lib/baseStyles');

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _SlideGroupModule = require('./SlideGroup.module.scss');

var _SlideGroupModule2 = _interopRequireDefault(_SlideGroupModule);

var _SlideModule = require('./Slide.module.scss');

var _SlideModule2 = _interopRequireDefault(_SlideModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_SlideGroupModule2.default);

var propTypes = {
  /**
   * The array of components for the group. Only the last component is visible. The others are hidden but still mounted.
   */
  // eslint-disable-next-line react/forbid-prop-types
  items: _propTypes2.default.array,
  /**
   * When true, the transition between slides is animated.
   */
  isAnimated: _propTypes2.default.bool
};

var defaultProps = {
  isAnimated: false
};

var SlideGroup = function (_React$Component) {
  _inherits(SlideGroup, _React$Component);

  _createClass(SlideGroup, null, [{
    key: 'hidePreviousSlide',
    value: function hidePreviousSlide(enteredElement) {
      if (enteredElement.previousSibling) {
        enteredElement.previousSibling.setAttribute('aria-hidden', true);
      }
    }
  }, {
    key: 'showPreviousSlide',
    value: function showPreviousSlide(exitingElement) {
      if (exitingElement.previousSibling) {
        exitingElement.previousSibling.removeAttribute('aria-hidden');
      }
    }
  }]);

  function SlideGroup(props) {
    _classCallCheck(this, SlideGroup);

    var _this = _possibleConstructorReturn(this, (SlideGroup.__proto__ || Object.getPrototypeOf(SlideGroup)).call(this, props));

    _this.setContainer = _this.setContainer.bind(_this);
    return _this;
  }

  _createClass(SlideGroup, [{
    key: 'setContainer',
    value: function setContainer(node) {
      if (!node) {
        return;
      } // Ref callbacks happen on mount and unmount, element is null on unmount
      this.slideGroup = node;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          isAnimated = _props.isAnimated,
          customProps = _objectWithoutProperties(_props, ['items', 'isAnimated']);
      // We don't want to render the transition group when no children exist. Doing so will cause the first child to
      // animate into place, which in most cases we do not want.


      if (!items || !items.length) {
        return null;
      }

      // We use the key from the first child as the key for the transition group. This will cause the transition group to
      // rerender when the root child changes and subsequently prevent that child from animating into position.
      var transitionGroupKey = items[0].key;

      var itemCount = items.length - 1;

      var transitionNames = {
        enter: _SlideModule2.default.enter,
        enterActive: _SlideModule2.default['enter-active'],
        exit: _SlideModule2.default.exit,
        exitActive: _SlideModule2.default['exit-active']
      };

      return _react2.default.createElement(
        _TransitionGroup2.default,
        _extends({}, customProps, { ref: this.setContainer, className: cx(['slide-group', customProps.className]), key: transitionGroupKey }),
        items.map(function (item, index) {
          return _react2.default.createElement(
            _CSSTransition2.default,
            {
              classNames: transitionNames,
              enter: isAnimated,
              onEntered: SlideGroup.hidePreviousSlide,
              exit: isAnimated,
              onExit: SlideGroup.showPreviousSlide,
              timeout: 300,
              key: item.key,
              id: 'shmmoop'
            },
            _react2.default.createElement(
              _Slide2.default,
              { isHidden: !isAnimated && index !== itemCount },
              item
            )
          );
        })
      );
    }
  }]);

  return SlideGroup;
}(_react2.default.Component);

SlideGroup.propTypes = propTypes;
SlideGroup.defaultProps = defaultProps;

exports.default = SlideGroup;