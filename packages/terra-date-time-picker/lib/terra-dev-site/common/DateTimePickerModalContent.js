'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _DateTimePicker = require('terra-date-time-picker/lib/DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContent = function ModalContent(props) {
  var app = props.app;


  return _react2.default.createElement(
    'div',
    { className: 'content-container', style: { height: '100%', padding: '10px' } },
    app && app.releaseFocus ? _react2.default.createElement(
      'h4',
      null,
      'Modal focus is released!'
    ) : null,
    app && app.requestFocus ? _react2.default.createElement(
      'h4',
      null,
      'Modal focus is trapped!'
    ) : null,
    _react2.default.createElement(_DateTimePicker2.default, { value: '06-26-2017', name: 'date-time-picker-in-modal', releaseFocus: app.releaseFocus, requestFocus: app.requestFocus }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_terraButton2.default, { className: 'close-disclosure', onClick: app.closeDisclosure, text: 'Close Disclosure' })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


ModalContent.propTypes = {
  app: _terraAppDelegate2.default.propType
};

exports.default = ModalContent;