'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBriefcase = require('terra-icon/lib/icon/IconBriefcase');

var _IconBriefcase2 = _interopRequireDefault(_IconBriefcase);

var _IconSearch = require('terra-icon/lib/icon/IconSearch');

var _IconSearch2 = _interopRequireDefault(_IconSearch);

var _IconBookmark = require('terra-icon/lib/icon/IconBookmark');

var _IconBookmark2 = _interopRequireDefault(_IconBookmark);

var _IconCalendar = require('terra-icon/lib/icon/IconCalendar');

var _IconCalendar2 = _interopRequireDefault(_IconCalendar);

var _Tabs = require('../../../../Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabContentTemplate = require('./TabContentTemplate');

var _TabContentTemplate2 = _interopRequireDefault(_TabContentTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconOnlyTabs = function IconOnlyTabs() {
  var searchTab = _react2.default.createElement(
    _Tabs2.default.Pane,
    { label: 'Search', icon: _react2.default.createElement(_IconSearch2.default, null), isIconOnly: true, key: 'Search', id: 'search' },
    _react2.default.createElement(_TabContentTemplate2.default, { label: 'Search', id: 'searchContent' })
  );

  var briefcaseTab = _react2.default.createElement(
    _Tabs2.default.Pane,
    { label: 'Briefcase', icon: _react2.default.createElement(_IconBriefcase2.default, null), isIconOnly: true, key: 'Briefcase', id: 'briefcase' },
    _react2.default.createElement(_TabContentTemplate2.default, { label: 'Briefcase', id: 'briefcaseContent' })
  );

  var bookmarkTab = _react2.default.createElement(
    _Tabs2.default.Pane,
    { label: 'Bookmark', icon: _react2.default.createElement(_IconBookmark2.default, null), isIconOnly: true, key: 'Bookmark', id: 'bookmark' },
    _react2.default.createElement(_TabContentTemplate2.default, { label: 'Bookmark', id: 'bookmarkContent' })
  );

  var calendarTab = _react2.default.createElement(
    _Tabs2.default.Pane,
    { label: 'Calendar', icon: _react2.default.createElement(_IconCalendar2.default, null), isIconOnly: true, key: 'Calendar', id: 'calendar' },
    _react2.default.createElement(_TabContentTemplate2.default, { label: 'Calendar', id: 'calendarContent' })
  );

  return _react2.default.createElement(
    _Tabs2.default,
    { id: 'iconOnlyTabs' },
    searchTab,
    briefcaseTab,
    bookmarkTab,
    calendarTab
  );
};

exports.default = IconOnlyTabs;