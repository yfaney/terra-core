'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SlideGroup = require('terra-slide-group/lib/SlideGroup');

var _SlideGroup2 = _interopRequireDefault(_SlideGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-next-line import/no-extraneous-dependencies


var containerStyles = {
  height: '250px',
  width: '400px',
  overflow: 'hidden',
  position: 'relative'
};

var slideStyles = {
  backgroundColor: 'lightblue',
  height: '100%',
  padding: '5px'
};

var SlideGroupDemo = function (_React$Component) {
  _inherits(SlideGroupDemo, _React$Component);

  function SlideGroupDemo(props) {
    _classCallCheck(this, SlideGroupDemo);

    var _this = _possibleConstructorReturn(this, (SlideGroupDemo.__proto__ || Object.getPrototypeOf(SlideGroupDemo)).call(this, props));

    _this.increment = _this.increment.bind(_this);
    _this.decrement = _this.decrement.bind(_this);

    _this.state = {
      counter: 1
    };
    return _this;
  }

  _createClass(SlideGroupDemo, [{
    key: 'increment',
    value: function increment() {
      this.setState(function (prevState) {
        return {
          counter: prevState.counter + 1
        };
      });
    }
  }, {
    key: 'decrement',
    value: function decrement() {
      this.setState(function (prevState) {
        return {
          counter: prevState.counter - 1
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var slides = [];
      for (var i = 0; i < this.state.counter; i += 1) {
        slides.push(_react2.default.createElement(
          'div',
          {
            key: 'Slide ' + i,
            style: slideStyles
          },
          _react2.default.createElement(
            'h2',
            null,
            'Slide',
            i
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            { type: 'button', onClick: this.increment },
            'Increment'
          ),
          i !== 0 ? _react2.default.createElement(
            'button',
            { type: 'button', onClick: this.decrement },
            'Decrement'
          ) : null
        ));
      }

      return _react2.default.createElement(
        'div',
        { style: containerStyles },
        _react2.default.createElement(_SlideGroup2.default, { items: slides, isAnimated: this.props.isAnimated })
      );
    }
  }]);

  return SlideGroupDemo;
}(_react2.default.Component);

SlideGroupDemo.propTypes = {
  isAnimated: _propTypes2.default.bool
};

exports.default = SlideGroupDemo;