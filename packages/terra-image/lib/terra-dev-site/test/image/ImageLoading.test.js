'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('../../../Image');

var _Image2 = _interopRequireDefault(_Image);

var _x = require('../../assets/150x150.jpg');

var _x2 = _interopRequireDefault(_x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageLoading = function (_React$Component) {
  _inherits(ImageLoading, _React$Component);

  function ImageLoading(props) {
    _classCallCheck(this, ImageLoading);

    var _this = _possibleConstructorReturn(this, (ImageLoading.__proto__ || Object.getPrototypeOf(ImageLoading)).call(this, props));

    _this.state = { errorImageId: undefined, loadedImageId: undefined };
    return _this;
  }

  _createClass(ImageLoading, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Loading Image Examples'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Image is successfully loaded.'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Image2.default, {
            id: this.state.loadedImageId,
            alt: ' ',
            src: _x2.default,
            onLoad: function onLoad() {
              _this2.setState({ loadedImageId: 'loadedImage' });
            },
            onError: function onError() {
              _this2.setState({ errorImageId: 'errorImage' });
            }
          })
        ),
        _react2.default.createElement(
          'p',
          null,
          'Image fails to load.'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Image2.default, {
            id: this.state.errorImageId,
            src: 'invalid.jpg',
            onLoad: function onLoad() {
              _this2.setState({ loadedImageId: 'loadedImage' });
            },
            onError: function onError() {
              _this2.setState({ errorImageId: 'errorImage' });
            },
            alt: 'Alt text for image with invalid source'
          })
        )
      );
    }
  }]);

  return ImageLoading;
}(_react2.default.Component);

exports.default = ImageLoading;