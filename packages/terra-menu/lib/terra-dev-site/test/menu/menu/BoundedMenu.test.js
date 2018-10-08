'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('../../../../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoundedMenu = function (_React$Component) {
  _inherits(BoundedMenu, _React$Component);

  function BoundedMenu(props) {
    _classCallCheck(this, BoundedMenu);

    var _this = _possibleConstructorReturn(this, (BoundedMenu.__proto__ || Object.getPrototypeOf(BoundedMenu)).call(this, props));

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.setButtonNode = _this.setButtonNode.bind(_this);
    _this.getButtonNode = _this.getButtonNode.bind(_this);
    _this.setParentNode = _this.setParentNode.bind(_this);
    _this.getParentNode = _this.getParentNode.bind(_this);
    _this.state = { open: false };
    return _this;
  }

  _createClass(BoundedMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
    key: 'setButtonNode',
    value: function setButtonNode(node) {
      this.buttonNode = node;
    }
  }, {
    key: 'getButtonNode',
    value: function getButtonNode() {
      return this.buttonNode;
    }
  }, {
    key: 'setParentNode',
    value: function setParentNode(node) {
      this.parentNode = node;
    }
  }, {
    key: 'getParentNode',
    value: function getParentNode() {
      return this.parentNode;
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick() {
      this.setState({ open: true });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: {
            height: '200px', width: '200px', background: 'aliceblue', overflow: 'hidden'
          },
          ref: this.setParentNode
        },
        _react2.default.createElement(
          _Menu2.default,
          {
            boundingRef: this.getParentNode,
            isOpen: this.state.open,
            targetRef: this.getButtonNode,
            onRequestClose: this.handleRequestClose,
            classNameContent: 'TestBoundedContent'
          },
          _react2.default.createElement(_Menu2.default.Item, { text: 'Default 1', key: '1' }),
          _react2.default.createElement(_Menu2.default.Item, {
            text: 'Default 2',
            key: '2',
            className: 'TestNestedMenu',
            subMenuItems: [_react2.default.createElement(_Menu2.default.Item, { text: 'Default 2.1', key: '2.1' }), _react2.default.createElement(_Menu2.default.Item, { text: 'Default 2.2', key: '2.2' }), _react2.default.createElement(_Menu2.default.Item, { text: 'Default 2.3', key: '2.3' })]
          }),
          _react2.default.createElement(_Menu2.default.Item, { text: 'Default 3', key: '3' }),
          _react2.default.createElement(_Menu2.default.Item, { text: 'Default 4', key: '4' }),
          _react2.default.createElement(_Menu2.default.Item, { text: 'Default 5', key: '5' }),
          _react2.default.createElement(
            _Menu2.default.ItemGroup,
            { isSelectable: true, onChange: this.handleOnChange, key: '6' },
            _react2.default.createElement(_Menu2.default.Item, { text: 'Default 61', key: '61' }),
            _react2.default.createElement(_Menu2.default.Item, { text: 'Default 62', key: '62' }),
            _react2.default.createElement(_Menu2.default.Item, { text: 'Default 63', key: '63' })
          ),
          _react2.default.createElement(_Menu2.default.Item, { text: 'Default 7', key: '7' }),
          _react2.default.createElement(_Menu2.default.Item, { text: 'Default 8', key: '8' })
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'bounded-button', onClick: this.handleButtonClick, ref: this.setButtonNode },
          'Default Menu'
        )
      );
    }
  }]);

  return BoundedMenu;
}(_react2.default.Component);

exports.default = BoundedMenu;