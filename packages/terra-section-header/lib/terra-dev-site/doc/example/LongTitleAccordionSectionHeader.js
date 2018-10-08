'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SectionHeaderExampleTemplate = require('terra-section-header/lib/terra-dev-site/doc/example/SectionHeaderExampleTemplate');

var _SectionHeaderExampleTemplate2 = _interopRequireDefault(_SectionHeaderExampleTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var LongTitleAccordionSectionHeader = function (_React$Component) {
  _inherits(LongTitleAccordionSectionHeader, _React$Component);

  function LongTitleAccordionSectionHeader(props) {
    _classCallCheck(this, LongTitleAccordionSectionHeader);

    var _this = _possibleConstructorReturn(this, (LongTitleAccordionSectionHeader.__proto__ || Object.getPrototypeOf(LongTitleAccordionSectionHeader)).call(this, props));

    _this.state = { isOpen: false };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(LongTitleAccordionSectionHeader, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState(function (prevState) {
        return { isOpen: !prevState.isOpen };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var sectionHeaderProps = {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu',
        isOpen: this.state.isOpen,
        onClick: this.handleClick
      };

      return _react2.default.createElement(_SectionHeaderExampleTemplate2.default, { title: 'Long Title Accordion Section Header', exampleProps: sectionHeaderProps });
    }
  }]);

  return LongTitleAccordionSectionHeader;
}(_react2.default.Component);

exports.default = LongTitleAccordionSectionHeader;