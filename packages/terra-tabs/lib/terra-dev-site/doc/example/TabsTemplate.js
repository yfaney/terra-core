'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconBriefcase = require('terra-icon/lib/icon/IconBriefcase');

var _IconBriefcase2 = _interopRequireDefault(_IconBriefcase);

var _IconSearch = require('terra-icon/lib/icon/IconSearch');

var _IconSearch2 = _interopRequireDefault(_IconSearch);

var _Tabs = require('terra-tabs/lib/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabContentTemplate = require('terra-tabs/lib/terra-dev-site/doc/example/TabContentTemplate');

var _TabContentTemplate2 = _interopRequireDefault(_TabContentTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
var propTypes = {
  tabFill: _propTypes2.default.bool
};

var TabsTemplate = function TabsTemplate(props) {
  var labelTab = _react2.default.createElement(
    _Tabs2.default.Pane,
    { label: 'Tab with label', key: 'LabelTab' },
    _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab with label' })
  );

  var iconTab = _react2.default.createElement(
    _Tabs2.default.Pane,
    { label: 'Tab with icon', icon: _react2.default.createElement(_IconBriefcase2.default, null), key: 'IconTab' },
    _react2.default.createElement(_TabContentTemplate2.default, { label: 'Tab with icon' })
  );

  var customTab = _react2.default.createElement(
    _Tabs2.default.Pane,
    {
      customDisplay: _react2.default.createElement(
        'div',
        {
          style: {
            color: 'red',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        },
        'Custom display'
      ),
      label: 'Custom display',
      key: 'CustomTab'
    },
    _react2.default.createElement(_TabContentTemplate2.default, { label: 'Custom display' })
  );

  var longLabel = _react2.default.createElement(
    _Tabs2.default.Pane,
    {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      key: 'longLabel'
    },
    _react2.default.createElement(_TabContentTemplate2.default, { label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' })
  );

  var lastTab = _react2.default.createElement(
    _Tabs2.default.Pane,
    { label: 'Last Tab', key: 'lastTab' },
    _react2.default.createElement(_TabContentTemplate2.default, { label: 'Last Tab' })
  );

  var disabledTab = _react2.default.createElement(_Tabs2.default.Pane, { label: 'Disabled Tab', icon: _react2.default.createElement(_IconSearch2.default, null), isDisabled: true, key: 'DisabledTab' });

  return _react2.default.createElement(
    'div',
    { style: { padding: '10px' } },
    _react2.default.createElement(
      _Tabs2.default,
      { defaultActiveKey: 'LabelTab', tabFill: props.tabFill },
      labelTab,
      iconTab,
      customTab,
      disabledTab,
      longLabel,
      lastTab
    )
  );
};

TabsTemplate.propTypes = propTypes;
exports.default = TabsTemplate;