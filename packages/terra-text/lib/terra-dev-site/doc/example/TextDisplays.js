'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraHeading = require('terra-heading');

var _terraHeading2 = _interopRequireDefault(_terraHeading);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _Text = require('terra-text/lib/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextDisplays = function TextDisplays() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _terraHeading2.default,
      { level: 2 },
      'Fonts',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _Text2.default,
        { weight: 400 },
        'Font Stack: Helvetica Neue, Helvetica, Arial, sans-serif'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _terraHeading2.default,
      { level: 3, weight: 400 },
      'Font Weight: 400'
    ),
    _react2.default.createElement(_terraArrange2.default, {
      fitStart: _react2.default.createElement(
        _Text2.default,
        { color: '#333', fontSize: 100 },
        'Aa'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Text2.default,
          { fontSize: 32 },
          'a b c d e f g h i j k l m n o p q r s t u v w x y z'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Text2.default,
          { fontSize: 32 },
          'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Text2.default,
          { fontSize: 32 },
          '1 2 3 4 5 6 7 8 9 0'
        )
      )
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _terraHeading2.default,
      { level: 3, weight: 400 },
      'Font Style: Italic'
    ),
    _react2.default.createElement(_terraArrange2.default, {
      fitStart: _react2.default.createElement(
        _Text2.default,
        { isItalic: true, color: '#333', fontSize: 100 },
        'Aa'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Text2.default,
          { isItalic: true, fontSize: 32 },
          'a b c d e f g h i j k l m n o p q r s t u v w x y z'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Text2.default,
          { isItalic: true, fontSize: 32 },
          'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Text2.default,
          { isItalic: true, fontSize: 32 },
          '1 2 3 4 5 6 7 8 9 0'
        )
      )
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _terraHeading2.default,
      { level: 3, weight: 400 },
      'Font Weight: 700'
    ),
    _react2.default.createElement(_terraArrange2.default, {
      fitStart: _react2.default.createElement(
        _Text2.default,
        { weight: 700, color: '#333', fontSize: 100 },
        'Aa'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Text2.default,
          { weight: 700, fontSize: 32 },
          'a b c d e f g h i j k l m n o p q r s t u v w x y z'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Text2.default,
          { weight: 700, fontSize: 32 },
          'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Text2.default,
          { weight: 700, fontSize: 32 },
          '1 2 3 4 5 6 7 8 9 0'
        )
      )
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _terraHeading2.default,
      { level: 3, weight: 400 },
      'Font Style: Italic Font Weight: 700'
    ),
    _react2.default.createElement(_terraArrange2.default, {
      fitStart: _react2.default.createElement(
        _Text2.default,
        { isItalic: true, weight: 700, color: '#333', fontSize: 100 },
        'Aa'
      ),
      fill: _react2.default.createElement(
        'div',
        { style: { marginLeft: '10px', marginRight: '10px' } },
        _react2.default.createElement(
          _Text2.default,
          { isItalic: true, weight: 700, fontSize: 32 },
          'a b c d e f g h i j k l m n o p q r s t u v w x y z'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Text2.default,
          { isItalic: true, weight: 700, fontSize: 32 },
          'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Text2.default,
          { isItalic: true, weight: 700, fontSize: 32 },
          '1 2 3 4 5 6 7 8 9 0'
        )
      )
    })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = TextDisplays;