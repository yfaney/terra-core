'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _terraAbstractModal = require('terra-abstract-modal');

var _terraAbstractModal2 = _interopRequireDefault(_terraAbstractModal);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _DateTimeUtils = require('./DateTimeUtils');

var _DateTimeUtils2 = _interopRequireDefault(_DateTimeUtils);

var _TimeClarificationModule = require('./_TimeClarification.module.scss');

var _TimeClarificationModule2 = _interopRequireDefault(_TimeClarificationModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_TimeClarificationModule2.default);

var propTypes = {
  /**
   * If set to true, the modal will rendered as opened
   */
  isOpen: _propTypes2.default.bool.isRequired,
  /**
   * If set to true, the button to open the modal will be hidden.
   */
  isOffsetButtonHidden: _propTypes2.default.bool.isRequired,
  /**
   * Callback function indicating the before time change option was selected.
   */
  onDaylightSavingButtonClick: _propTypes2.default.func.isRequired,
  /**
   * Callback function indicating the after time change option was selected.
   */
  onStandardTimeButtonClick: _propTypes2.default.func.isRequired,
  /**
   * Callback function indicating the DST offset button was selected.
   */
  onOffsetButtonClick: _propTypes2.default.func.isRequired,
  /**
   * Callback function indicating the modal is requesting to close.
   */
  onRequestClose: _propTypes2.default.func.isRequired,
  /**
   * Whether the clarification is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: _propTypes2.default.func,
  /**
   * Callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: _propTypes2.default.func
};

var defaultProps = {
  disabled: false,
  releaseFocus: undefined,
  requestFocus: undefined
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var TimeClarification = function (_React$Component) {
  _inherits(TimeClarification, _React$Component);

  function TimeClarification(props) {
    _classCallCheck(this, TimeClarification);

    var _this = _possibleConstructorReturn(this, (TimeClarification.__proto__ || Object.getPrototypeOf(TimeClarification)).call(this, props));

    _this.state = {
      offsetDisplay: ''
    };

    _this.handleDaylightSavingButtonClick = _this.handleDaylightSavingButtonClick.bind(_this);
    _this.handleStandardTimeButtonClick = _this.handleStandardTimeButtonClick.bind(_this);
    return _this;
  }

  _createClass(TimeClarification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isOpen && this.props.requestFocus) {
        this.props.requestFocus();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isOpen) {
        if (this.props.requestFocus) {
          this.props.requestFocus();
        }
      } else if (this.props.releaseFocus) {
        this.props.releaseFocus();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.releaseFocus) {
        this.props.releaseFocus();
      }
    }
  }, {
    key: 'handleDaylightSavingButtonClick',
    value: function handleDaylightSavingButtonClick(event) {
      this.setState({ offsetDisplay: _DateTimeUtils2.default.getDaylightSavingTZDisplay() });

      if (this.props.onDaylightSavingButtonClick) {
        this.props.onDaylightSavingButtonClick(event);
      }
    }
  }, {
    key: 'handleStandardTimeButtonClick',
    value: function handleStandardTimeButtonClick(event) {
      this.setState({ offsetDisplay: _DateTimeUtils2.default.getStandardTZDisplay() });

      if (this.props.onStandardTimeButtonClick) {
        this.props.onStandardTimeButtonClick(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isOffsetButtonHidden) {
        this.state.offsetDisplay = '';
      }

      var offsetButtonClassNames = cx(['button-offset', { 'button-offset-hidden': this.props.isOffsetButtonHidden || !this.state.offsetDisplay }]);

      var intl = this.context.intl;

      var title = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.title' });
      var message = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.message' });
      var daylightSavingButtonLabel = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.button.daylightSaving' });
      var standardTimeButtonLabel = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.button.standardTime' });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _terraAbstractModal2.default,
          {
            classNameModal: cx('time-clarification'),
            ariaLabel: 'Time Clarification',
            isOpen: this.props.isOpen,
            onRequestClose: this.props.onRequestClose,
            closeOnEsc: false,
            closeOnOutsideClick: false,
            zIndex: '9000'
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'header',
              { className: cx('header') },
              _react2.default.createElement(
                'h1',
                { className: cx('title') },
                title
              )
            ),
            _react2.default.createElement(
              'div',
              { className: cx('body') },
              _react2.default.createElement(
                'p',
                null,
                message
              )
            ),
            _react2.default.createElement(
              'div',
              { className: cx('buttons') },
              _react2.default.createElement(_terraButton2.default, {
                text: daylightSavingButtonLabel,
                onClick: this.handleDaylightSavingButtonClick,
                variant: _terraButton2.default.Opts.Variants.EMPHASIS,
                className: cx('button-daylight')
              }),
              _react2.default.createElement(_terraButton2.default, {
                text: standardTimeButtonLabel,
                onClick: this.handleStandardTimeButtonClick,
                variant: _terraButton2.default.Opts.Variants.EMPHASIS,
                className: cx('button-standard')
              })
            )
          )
        ),
        _react2.default.createElement(_terraButton2.default, {
          className: offsetButtonClassNames,
          onClick: this.props.onOffsetButtonClick,
          text: this.state.offsetDisplay,
          isCompact: true,
          isDisabled: this.props.disabled
        })
      );
    }
  }]);

  return TimeClarification;
}(_react2.default.Component);

TimeClarification.propTypes = propTypes;
TimeClarification.defaultProps = defaultProps;
TimeClarification.contextTypes = contextTypes;

exports.default = TimeClarification;