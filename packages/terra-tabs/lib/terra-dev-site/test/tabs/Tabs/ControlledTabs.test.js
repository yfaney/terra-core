'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('../../../../Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabContentTemplate = require('./TabContentTemplate');

var _TabContentTemplate2 = _interopRequireDefault(_TabContentTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlledTabs = function (_React$Component) {
  _inherits(ControlledTabs, _React$Component);

  function ControlledTabs(props) {
    _classCallCheck(this, ControlledTabs);

    var _this = _possibleConstructorReturn(this, (ControlledTabs.__proto__ || Object.getPrototypeOf(ControlledTabs)).call(this, props));

    _this.state = { activeKey: 'Tab2' };
    _this.handleSelection = _this.handleSelection.bind(_this);
    return _this;
  }

  _createClass(ControlledTabs, [{
    key: 'handleSelection',
    value: function handleSelection(event, selectedKey) {
      if (selectedKey !== this.state.activeKey) {
        this.setState({ activeKey: selectedKey });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var tab1 = _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 1', key: 'Tab1', id: 'tab1' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 1', id: 'tab1Content' })
      );

      var tab2 = _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 2', key: 'Tab2', id: 'tab2' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 2', id: 'tab2Content' })
      );

      var tab3 = _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 3', key: 'Tab 3', id: 'tab3' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 3', id: 'tab3Content' })
      );

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'current-selection' },
          _react2.default.createElement(
            'p',
            null,
            'Last Triggered Tab:',
            this.state.activeKey
          )
        ),
        _react2.default.createElement(
          _Tabs2.default,
          { id: 'controlledTabs', onChange: this.handleSelection, activeKey: this.state.activeKey },
          tab1,
          tab2,
          tab3
        )
      );
    }
  }]);

  return ControlledTabs;
}(_react2.default.Component);

exports.default = ControlledTabs;