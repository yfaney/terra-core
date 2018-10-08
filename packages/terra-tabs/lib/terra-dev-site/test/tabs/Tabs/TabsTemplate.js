'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tabs = require('../../../../Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabContentTemplate = require('./TabContentTemplate');

var _TabContentTemplate2 = _interopRequireDefault(_TabContentTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  fill: _propTypes2.default.bool,
  tabFill: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  containerHeight: _propTypes2.default.string
};

var defaultProps = {
  containerHeight: 'auto'
};

var TabsTemplate = function TabsTemplate(props) {
  return _react2.default.createElement(
    'div',
    { style: { height: props.containerHeight } },
    _react2.default.createElement(
      _Tabs2.default,
      {
        tabFill: props.tabFill,
        fill: props.fill,
        id: props.id
      },
      _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 1', key: 'Tab1', id: 'tab1' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 1', id: 'tab1Content' })
      ),
      _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 2', key: 'Tab2', id: 'tab2' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 2', id: 'tab2Content' })
      ),
      _react2.default.createElement(_Tabs2.default.Pane, { label: 'Disabled Tab', key: 'disabled', id: 'disabled', isDisabled: true }),
      _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 4', key: 'Tab4', id: 'tab4' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 4', id: 'tab4Content' })
      ),
      _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 5', key: 'Tab5', id: 'tab5' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 5', id: 'tab5Content' })
      ),
      _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 6', key: 'Tab6', id: 'tab6' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 6', id: 'tab6Content' })
      ),
      _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 7', key: 'Tab7', id: 'tab7' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 7', id: 'tab7Content' })
      ),
      _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 8 with longer text that should truncate', key: 'Tab8', id: 'tab8' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 8', id: 'tab8Content' })
      ),
      _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 9', key: 'Tab9', id: 'tab9' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 9', id: 'tab9Content' })
      ),
      _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 10', key: 'Tab10', id: 'tab10' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 10', id: 'tab10Content' })
      ),
      _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 11', key: 'Tab11', id: 'tab11' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 11', id: 'tab11Content' })
      ),
      _react2.default.createElement(
        _Tabs2.default.Pane,
        { label: 'Tab 12', key: 'Tab12', id: 'tab12' },
        _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab 12', id: 'tab12Content' })
      )
    )
  );
};

TabsTemplate.propTypes = propTypes;
TabsTemplate.defaultProps = defaultProps;
exports.default = TabsTemplate;