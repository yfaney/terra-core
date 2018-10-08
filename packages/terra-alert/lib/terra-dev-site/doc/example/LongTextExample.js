'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraToggle = require('terra-toggle');

var _terraToggle2 = _interopRequireDefault(_terraToggle);

var _Alert = require('terra-alert/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var buttonStyle = { textDecoration: 'underline', color: '#1c11f21' };

var LongTextExample = function (_React$Component) {
  _inherits(LongTextExample, _React$Component);

  function LongTextExample(props) {
    _classCallCheck(this, LongTextExample);

    var _this = _possibleConstructorReturn(this, (LongTextExample.__proto__ || Object.getPrototypeOf(LongTextExample)).call(this, props));

    _this.state = {
      allTextShown: false
    };
    _this.handleShowMore = _this.handleShowMore.bind(_this);
    _this.handleShowLess = _this.handleShowLess.bind(_this);
    return _this;
  }

  _createClass(LongTextExample, [{
    key: 'handleShowMore',
    value: function handleShowMore() {
      this.setState({ allTextShown: true });
    }
  }, {
    key: 'handleShowLess',
    value: function handleShowLess() {
      this.setState({ allTextShown: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var alertStartTagStr = '<Alert type="info" title="Gettysburg Address:" >';
      var alertContentStr = '<span>Four score and seven years ago our fathers brought forth on this continent, a new nation, . . .</span>';
      var alertEndTagStr = '</Alert>';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { dir: 'ltr' },
          _react2.default.createElement(
            'h3',
            null,
            'Alert of type info with custom title and long text with show more/less'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'code',
            null,
            alertStartTagStr,
            _react2.default.createElement('br', null),
            '\xA0\xA0',
            alertContentStr,
            _react2.default.createElement('br', null),
            alertEndTagStr
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Alert2.default,
          { type: 'info', title: 'Gettysburg Address:' },
          _react2.default.createElement(
            'span',
            null,
            'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.',
            _react2.default.createElement(
              _terraToggle2.default,
              { isOpen: !this.state.allTextShown },
              _react2.default.createElement(_terraButton2.default, { onClick: this.handleShowMore, text: 'Show More', style: buttonStyle })
            ),
            _react2.default.createElement(
              _terraToggle2.default,
              { isOpen: this.state.allTextShown },
              'Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_terraButton2.default, { onClick: this.handleShowLess, text: 'Show Less', style: buttonStyle })
            )
          )
        )
      );
    }
  }]);

  return LongTextExample;
}(_react2.default.Component);

exports.default = LongTextExample;