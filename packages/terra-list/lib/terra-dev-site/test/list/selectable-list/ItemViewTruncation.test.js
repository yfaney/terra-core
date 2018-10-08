'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemView = require('terra-clinical-item-view/lib/ItemView');

var _ItemView2 = _interopRequireDefault(_ItemView);

var _IconAlert = require('terra-icon/lib/icon/IconAlert');

var _IconAlert2 = _interopRequireDefault(_IconAlert);

var _IconInformation = require('terra-icon/lib/icon/IconInformation');

var _IconInformation2 = _interopRequireDefault(_IconInformation);

var _List = require('../../../../List');

var _List2 = _interopRequireDefault(_List);

var _SelectableList = require('../../../../SelectableList');

var _SelectableList2 = _interopRequireDefault(_SelectableList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var display = _react2.default.createElement(_ItemView2.default.Display, { text: 'display1display1display1display1display1display1display1display1display1display1', key: '123' });

var accessoryStart = function accessoryStart(id) {
  return _react2.default.createElement(_IconAlert2.default, { id: id });
};
var accessoryEnd = function accessoryEnd(id) {
  return _react2.default.createElement(_IconInformation2.default, { id: id });
};
var comment = function comment(id) {
  return _react2.default.createElement(_ItemView2.default.Comment, { id: id, text: 'comment1comment1comment1comment1comment1comment1comment1comment1' });
};

var itemViews = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_ItemView2.default, { displays: [display], isTruncated: true, comment: comment(3), startAccessory: accessoryStart(7), endAccessory: accessoryEnd(11), textEmphasis: 'start', id: 'ItemView-one-truncate' }),
  _react2.default.createElement('br', null),
  _react2.default.createElement(_ItemView2.default, { displays: [display], isTruncated: true, comment: comment(4), startAccessory: accessoryStart(8), endAccessory: accessoryEnd(12), layout: 'twoColumns', textEmphasis: 'start', id: 'ItemView-two-truncate' })
);

var ListContent = function ListContent() {
  return _react2.default.createElement(
    'div',
    { style: { fontSize: '10px', width: '500px' } },
    _react2.default.createElement(
      _List2.default,
      { isDivided: true },
      _react2.default.createElement(_List2.default.Item, { content: itemViews, key: '124' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _SelectableList2.default,
      { hasChevrons: true, isDivided: true },
      _react2.default.createElement(_SelectableList2.default.Item, { content: itemViews, key: '124' })
    )
  );
};

exports.default = ListContent;