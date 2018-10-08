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

require('terra-base/lib/baseStyles');

var _SignatureModule = require('./Signature.module.scss');

var _SignatureModule2 = _interopRequireDefault(_SignatureModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LINEWIDTHS = {
  EXTRA_FINE: 1,
  FINE: 2,
  MEDIUM: 4,
  HEAVY: 6
};

var MOUSECODES = {
  LEFTCLICK: 0
};

var propTypes = {
  /**
   * The line width to use when drawing the signature on the canvas.
   * One of Signature.Opts.Width.EXTRA_FINE, Signature.Opts.Width.FINE, Signature.Opts.Width.MEDIUM, Signature.Opts.Width.HEAVY.
   */
  lineWidth: _propTypes2.default.oneOf([LINEWIDTHS.EXTRA_FINE, LINEWIDTHS.FINE, LINEWIDTHS.MEDIUM, LINEWIDTHS.HEAVY]),
  /**
  * Line segments that define signature.
  */
  // eslint-disable-next-line react/forbid-prop-types
  lineSegments: _propTypes2.default.array,
  /**
   * A callback function to execute when a line segment is drawn. The first parameter is the event, the
   * second parameter is all the line segments, and the last parameter is the most recent line segment drawn.
   */
  onChange: _propTypes2.default.func
};

var defaultProps = {
  lineWidth: LINEWIDTHS.FINE,
  lineSegments: [],
  onChange: undefined
};

var Signature = function (_React$Component) {
  _inherits(Signature, _React$Component);

  function Signature(props) {
    _classCallCheck(this, Signature);

    var _this = _possibleConstructorReturn(this, (Signature.__proto__ || Object.getPrototypeOf(Signature)).call(this, props));

    _this.state = { lineSegments: props.lineSegments };

    _this.mouseInBounds = _this.mouseInBounds.bind(_this);
    _this.mouseDown = _this.mouseDown.bind(_this);
    _this.mouseUp = _this.mouseUp.bind(_this);
    _this.mouseXY = _this.mouseXY.bind(_this);
    _this.mouseLeave = _this.mouseLeave.bind(_this);
    _this.addLine = _this.addLine.bind(_this);
    _this.draw = _this.draw.bind(_this);
    _this.drawSignature = _this.drawSignature.bind(_this);
    _this.clearSignature = _this.clearSignature.bind(_this);
    _this.updateDimensions = _this.updateDimensions.bind(_this);
    return _this;
  }

  _createClass(Signature, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if ('ontouchstart' in document.documentElement) {
        this.canvas.addEventListener('touchstart', this.mouseDown, false);
        this.canvas.addEventListener('touchmove', this.mouseXY, true);
        this.canvas.addEventListener('touchend', this.mouseUp, false);
        document.body.addEventListener('touchleave', this.mouseLeave, false);
        document.body.addEventListener('touchcancel', this.mouseUp, false);
      } else {
        this.canvas.addEventListener('mousedown', this.mouseDown);
        this.canvas.addEventListener('mousemove', this.mouseXY);
        document.body.addEventListener('mouseleave', this.mouseLeave, false);
        document.body.addEventListener('mouseup', this.mouseUp);
      }

      var context = this.canvas.getContext('2d');

      context.lineWidth = this.props.lineWidth;

      this.updateDimensions();

      this.canvas.addEventListener('resize', this.updateDimensions);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.lineSegments !== nextProps.lineSegments || this.props.lineWidth !== nextProps.lineWidth) {
        this.setState({ lineSegments: nextProps.lineSegments });
        this.drawSignature(nextProps.lineSegments, nextProps.lineWidth);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if ('ontouchstart' in document.documentElement) {
        this.canvas.removeEventListener('touchstart', this.mouseDown);
        this.canvas.removeEventListener('touchmove', this.mouseXY);
        this.canvas.removeEventListener('touchend', this.mouseUp);
        document.body.removeEventListener('touchleave', this.mouseLeave);
        document.body.removeEventListener('touchcancel', this.mouseUp);
      } else {
        this.canvas.removeEventListener('mousedown', this.mouseDown);
        this.canvas.removeEventListener('mousemove', this.mouseXY);
        document.body.removeEventListener('mouseleave', this.mouseLeave);
        document.body.removeEventListener('mouseup', this.mouseUp);
      }

      this.canvas.removeEventListener('resize', this.updateDimensions);
    }
  }, {
    key: 'mouseInBounds',
    value: function mouseInBounds(event) {
      var rect = this.canvasRect;
      return rect.top < event.pageY && rect.left < event.pageX && rect.bottom > event.pageY && rect.right > event.pageX;
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(event) {
      if ('button' in event && event.button !== MOUSECODES.LEFTCLICK) {
        return;
      }
      this.setState({ lastLineSegments: [], painting: true });

      this.canvasRect = this.canvas.getBoundingClientRect();

      this.addLine(event.pageX - this.canvasRect.left, event.pageY - this.canvasRect.top, false);

      this.draw();
    }
  }, {
    key: 'mouseUp',
    value: function mouseUp(event) {
      this.setState({ painting: false });

      if (this.props.onChange) {
        this.props.onChange(event, this.state.lineSegments, this.state.lastLineSegments);
      }
    }
  }, {
    key: 'mouseXY',
    value: function mouseXY(event) {
      if (this.state.painting && this.mouseInBounds(event)) {
        this.addLine(event.pageX - this.canvasRect.left, event.pageY - this.canvasRect.top, true);

        this.draw();
      }
    }
  }, {
    key: 'mouseLeave',
    value: function mouseLeave(event) {
      if (this.state.painting) {
        this.setState({ painting: false });
        if (this.props.onChange) {
          this.props.onChange(event, this.state.lineSegments, this.state.lastLineSegments);
        }
      }
    }
  }, {
    key: 'addLine',
    value: function addLine(x, y, dragging) {
      var newSegment = void 0;

      if (dragging) {
        var lastLineSegment = this.state.lineSegments[this.state.lineSegments.length - 1];
        newSegment = {
          x1: lastLineSegment.x2, y1: lastLineSegment.y2, x2: x, y2: y
        };
      } else {
        newSegment = {
          x1: x, y1: y, x2: x, y2: y
        };
      }

      // Record new line segment
      this.setState(function (prevState) {
        return {
          lineSegments: [].concat(_toConsumableArray(prevState.lineSegments), [newSegment]),
          lastLineSegments: [].concat(_toConsumableArray(prevState.lastLineSegments), [newSegment])
        };
      });
    }
  }, {
    key: 'draw',
    value: function draw() {
      var context = this.canvas.getContext('2d');

      if (this.state.lineSegments.length > 0) {
        var lastLineSegment = this.state.lineSegments[this.state.lineSegments.length - 1];
        var style = window.getComputedStyle(this.canvas);
        var color = style.getPropertyValue('color');

        context.lineJoin = 'round';

        context.beginPath();
        context.moveTo(lastLineSegment.x1, lastLineSegment.y1);
        context.lineTo(lastLineSegment.x2, lastLineSegment.y2);
        context.strokeStyle = color;
        context.stroke();
      }
    }
  }, {
    key: 'drawSignature',
    value: function drawSignature(lineSegments, lineWidth) {
      var context = this.canvas.getContext('2d');
      var style = window.getComputedStyle(this.canvas);
      var color = style.getPropertyValue('color');

      context.lineJoin = 'round';
      context.lineWidth = lineWidth;

      // clear canvas
      context.clearRect(0, 0, this.canvasRect.width, this.canvasRect.height);

      // iterate and draw all recorded line segments
      var segmentCount = lineSegments.length;
      for (var i = 0; i < segmentCount; i += 1) {
        context.beginPath();
        context.moveTo(lineSegments[i].x1, lineSegments[i].y1);
        context.lineTo(lineSegments[i].x2, lineSegments[i].y2);
        context.strokeStyle = color;
        context.stroke();
      }
    }
  }, {
    key: 'clearSignature',
    value: function clearSignature() {
      this.setState({ lineSegments: [] });

      var context = this.canvas.getContext('2d');

      context.clearRect(0, 0, this.canvasRect.width, this.canvasRect.height);
    }
  }, {
    key: 'updateDimensions',
    value: function updateDimensions() {
      var _this2 = this;

      setTimeout(function () {
        _this2.canvasRect = _this2.canvas.getBoundingClientRect();

        _this2.canvas.width = _this2.canvasRect.width;
        _this2.canvas.height = _this2.canvasRect.height;

        _this2.drawSignature(_this2.state.lineSegments);
      }, 250);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          lineSegments = _props.lineSegments,
          lineWidth = _props.lineWidth,
          onChange = _props.onChange,
          custProps = _objectWithoutProperties(_props, ['lineSegments', 'lineWidth', 'onChange']);

      return _react2.default.createElement('canvas', _extends({}, custProps, { className: _SignatureModule2.default.signature, ref: function ref(node) {
          _this3.canvas = node;
        } }));
    }
  }]);

  return Signature;
}(_react2.default.Component);

Signature.propTypes = propTypes;
Signature.defaultProps = defaultProps;
Signature.Opts = {};
Signature.Opts.Width = LINEWIDTHS;

exports.default = Signature;