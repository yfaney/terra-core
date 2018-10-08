'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraToggle = require('terra-toggle');

var _terraToggle2 = _interopRequireDefault(_terraToggle);

var _IconHelp = require('terra-icon/lib/icon/IconHelp');

var _IconHelp2 = _interopRequireDefault(_IconHelp);

var _IconCritical = require('terra-icon/lib/icon/IconCritical');

var _IconCritical2 = _interopRequireDefault(_IconCritical);

var _IconOverDue = require('terra-icon/lib/icon/IconOverDue');

var _IconOverDue2 = _interopRequireDefault(_IconOverDue);

var _IconClock = require('terra-icon/lib/icon/IconClock');

var _IconClock2 = _interopRequireDefault(_IconClock);

var _Alert = require('terra-alert/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var BuildYourOwnAlertExample = function (_React$Component) {
  _inherits(BuildYourOwnAlertExample, _React$Component);

  function BuildYourOwnAlertExample(props) {
    _classCallCheck(this, BuildYourOwnAlertExample);

    var _this = _possibleConstructorReturn(this, (BuildYourOwnAlertExample.__proto__ || Object.getPrototypeOf(BuildYourOwnAlertExample)).call(this, props));

    _this.state = {
      isDismissed: false,
      actionButtonClickCount: 0,
      type: undefined,
      title: '',
      content: '',
      contentType: 'enterText',
      allTextShown: false,
      isDismissible: false,
      showActionButton: false,
      customIcon: '',
      customStatusColor: ''
    };
    _this.handleDismiss = _this.handleDismiss.bind(_this);
    _this.actionFunc = _this.actionFunc.bind(_this);
    _this.handleTypeSelectChange = _this.handleTypeSelectChange.bind(_this);
    _this.handleTitleChange = _this.handleTitleChange.bind(_this);
    _this.handleContentTypeSelectChange = _this.handleContentTypeSelectChange.bind(_this);
    _this.handleTextContentChange = _this.handleTextContentChange.bind(_this);
    _this.handleShowMore = _this.handleShowMore.bind(_this);
    _this.handleShowLess = _this.handleShowLess.bind(_this);
    _this.handleDismissibleSelectChange = _this.handleDismissibleSelectChange.bind(_this);
    _this.handleActionButtonSelectChange = _this.handleActionButtonSelectChange.bind(_this);
    _this.handleCustomIconSelectChange = _this.handleCustomIconSelectChange.bind(_this);
    _this.handleCustomStatusColorChange = _this.handleCustomStatusColorChange.bind(_this);
    return _this;
  }

  _createClass(BuildYourOwnAlertExample, [{
    key: 'handleDismiss',
    value: function handleDismiss() {
      this.setState({ isDismissed: true });
    }
  }, {
    key: 'actionFunc',
    value: function actionFunc() {
      var newState = this.state;
      newState.actionButtonClickCount += 1;
      this.setState(newState);
    }
  }, {
    key: 'handleTypeSelectChange',
    value: function handleTypeSelectChange(e) {
      if (e.target.value) {
        this.setState({ type: e.target.value });
      } else {
        this.setState({ type: undefined });
      }
      if (e.target.value !== 'custom') {
        this.setState({ customIcon: '', customStatusColor: '' });
      }
    }
  }, {
    key: 'handleTitleChange',
    value: function handleTitleChange(e) {
      if (e.target.value) {
        this.setState({ title: e.target.value });
      } else {
        this.setState({ title: '' });
      }
    }
  }, {
    key: 'handleContentTypeSelectChange',
    value: function handleContentTypeSelectChange(e) {
      if (e.target.value) {
        this.setState({ contentType: e.target.value, content: '' });
      } else {
        this.setState({ contentType: 'enterText', content: '' });
      }
    }
  }, {
    key: 'handleTextContentChange',
    value: function handleTextContentChange(e) {
      if (e.target.value) {
        this.setState({ content: e.target.value });
      } else {
        this.setState({ content: '' });
      }
    }
  }, {
    key: 'handleShowMore',
    value: function handleShowMore() {
      this.setState({ allTextShown: true });
    }
  }, {
    key: 'handleShowLess',
    value: function handleShowLess() {
      this.setState({ allTextShown: false });
    }
  }, {
    key: 'handleDismissibleSelectChange',
    value: function handleDismissibleSelectChange(e) {
      if (e.target.value === 'true') {
        this.setState({ isDismissible: true });
      } else {
        this.setState({ isDismissible: false });
      }
    }
  }, {
    key: 'handleActionButtonSelectChange',
    value: function handleActionButtonSelectChange(e) {
      if (e.target.value === 'true') {
        this.setState({ showActionButton: true });
      } else {
        this.setState({ showActionButton: false });
      }
    }
  }, {
    key: 'handleCustomIconSelectChange',
    value: function handleCustomIconSelectChange(e) {
      if (e.target.value) {
        this.setState({ customIcon: e.target.value });
      } else {
        this.setState({ customIcon: '' });
      }
    }
  }, {
    key: 'handleCustomStatusColorChange',
    value: function handleCustomStatusColorChange(e) {
      if (e.target.value) {
        this.setState({ customStatusColor: e.target.value });
      } else {
        this.setState({ customStatusColor: '' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var gettysburgAddress = _react2.default.createElement(
        'span',
        null,
        'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.',
        _react2.default.createElement(
          _terraToggle2.default,
          { isOpen: !this.state.allTextShown, isAnimated: true },
          _react2.default.createElement(_terraButton2.default, { onClick: this.handleShowMore, text: 'Show More' })
        ),
        _react2.default.createElement(
          _terraToggle2.default,
          { isOpen: this.state.allTextShown, isAnimated: true },
          'Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.',
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          'But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.',
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_terraButton2.default, { onClick: this.handleShowLess, text: 'Show Less' })
        )
      );
      var alertTypePropStr = this.state.type ? 'type="' + this.state.type + '"' : '';
      var alertTitlePropStr = this.state.title ? 'title="' + this.state.title + '"' : '';
      var alertOnDismissPropStr = this.state.isDismissible ? 'onDismiss={this.handleDismiss}' : '';
      var onDismissHandler = this.state.isDismissible ? this.handleDismiss : undefined;
      var actionButton = this.state.showActionButton ? _react2.default.createElement(_terraButton2.default, { text: 'Action', variant: 'emphasis', onClick: this.actionFunc }) : undefined;
      var alertActionPropStr = this.state.showActionButton ? 'action={<Button text="Action" variant="emphasis" onClick={this.actionFunc} />}' : '';
      var customPropsDisplayStyle = { display: this.state.type === 'custom' ? 'table-row' : 'none' };
      var customStatusColorPropStr = this.state.customStatusColor ? 'customStatusColor="' + this.state.customStatusColor + '"' : '';
      var actionCounterText = this.state.showActionButton ? 'Action button has been clicked ' + this.state.actionButtonClickCount + ' times.' : '';
      var alertElem = '';
      var alertContentPropStr = '';
      var textContentEntryField = '';
      var contentValue = '';
      var customIcon = null;
      var customIconPropStr = '';

      if (this.state.contentType === 'enterText') {
        textContentEntryField = _react2.default.createElement('input', { type: 'text', style: { width: '300px' }, placeholder: 'Enter Alert content', value: this.state.content, onChange: this.handleTextContentChange });
        contentValue = this.state.content;
        alertContentPropStr = contentValue;
      } else {
        contentValue = gettysburgAddress;
        alertContentPropStr = '  <span>Four score and seven years ago our fathers brought forth on this continent, a new nation, . . . </span>';
      }

      switch (this.state.customIcon) {
        case 'help':
          customIcon = _react2.default.createElement(_IconHelp2.default, null);
          customIconPropStr = 'customIcon={<IconHelp />}';
          break;
        case 'critical':
          customIcon = _react2.default.createElement(_IconCritical2.default, null);
          customIconPropStr = 'customIcon={<IconCritical />}';
          break;
        case 'overdue':
          customIcon = _react2.default.createElement(_IconOverDue2.default, null);
          customIconPropStr = 'customIcon={<IconOverDue />}';
          break;
        case 'clock':
          customIcon = _react2.default.createElement(_IconClock2.default, null);
          customIconPropStr = 'customIcon={<IconClock />}';
          break;
        default:
          break;
      }

      if (!this.state.isDismissed) {
        alertElem = _react2.default.createElement(
          _Alert2.default,
          { type: this.state.type, title: this.state.title, onDismiss: onDismissHandler, action: actionButton, customIcon: customIcon, customStatusColor: this.state.customStatusColor },
          contentValue
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { dir: 'ltr' },
            _react2.default.createElement(
              'h3',
              null,
              'Build your own Alert'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'code',
              null,
              '<Alert',
              ' ',
              alertTypePropStr,
              ' ',
              alertTitlePropStr,
              ' ',
              alertOnDismissPropStr,
              ' ',
              alertActionPropStr,
              ' ',
              customIconPropStr,
              ' ',
              customStatusColorPropStr,
              ' ',
              '>',
              _react2.default.createElement('br', null),
              '\xA0\xA0',
              alertContentPropStr,
              _react2.default.createElement('br', null),
              '</Alert>'
            )
          ),
          _react2.default.createElement('br', null),
          alertElem,
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            null,
            actionCounterText
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { style: { marginTop: '10px' } },
          _react2.default.createElement(
            'h4',
            null,
            'Configure the above Alert by making selections in this form'
          ),
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(
              'table',
              null,
              _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'typeSelector' },
                      'Alert Type'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'select',
                      { id: 'typeSelector', name: 'type', value: this.state.type, onChange: this.handleTypeSelectChange },
                      _react2.default.createElement(
                        'option',
                        { value: '' },
                        'default'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'alert' },
                        ' alert '
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'error' },
                        ' error '
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'warning' },
                        ' warning '
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'advisory' },
                        ' advisory '
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'info' },
                        ' info '
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'success' },
                        ' success '
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'custom' },
                        ' custom '
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'titleSelector' },
                      'Alert Title'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement('input', { id: 'titleSelector', type: 'text', style: { width: '250px' }, placeholder: 'Enter title or leave blank for default title', value: this.state.title, onChange: this.handleTitleChange })
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'contentTypeSelector' },
                      'Alert Content'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'select',
                      { id: 'contentTypeSelector', name: 'contentType', style: { width: '200px', marginRight: '5px' }, value: this.state.contentType, onChange: this.handleContentTypeSelectChange },
                      _react2.default.createElement(
                        'option',
                        { value: 'enterText' },
                        'Enter Text Manually'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'useHTML' },
                        'Gettysburg Address HTML'
                      )
                    ),
                    textContentEntryField
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'dimissibleSelector' },
                      'Alert Dismissible'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'select',
                      { id: 'dimissibleSelector', name: 'isDismissible', style: { width: '100px' }, value: this.state.isDismissible.toString(), onChange: this.handleDismissibleSelectChange },
                      _react2.default.createElement(
                        'option',
                        { value: 'true' },
                        'True'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'false' },
                        'False'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'actionButtonSelector' },
                      'Alert Action Button'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'select',
                      { id: 'actionButtonSelector', name: 'showActionButton', style: { width: '100px' }, value: this.state.showActionButton.toString(), onChange: this.handleActionButtonSelectChange },
                      _react2.default.createElement(
                        'option',
                        { value: 'true' },
                        'True'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'false' },
                        'False'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  { style: customPropsDisplayStyle },
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'customIconSelector' },
                      'Alert Custom Icon'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'select',
                      { id: 'customIconSelector', name: 'showActionButton', style: { width: '150px' }, value: this.state.customIcon, onChange: this.handleCustomIconSelectChange },
                      _react2.default.createElement(
                        'option',
                        { value: '' },
                        'default'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'help' },
                        'Help Icon'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'critical' },
                        'Critical Icon'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'overdue' },
                        'Overdue Icon'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'clock' },
                        'Clock Icon'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  { style: customPropsDisplayStyle },
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'customStatusColorSelector' },
                      'Alert Custom Status Color'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement('input', { id: 'customStatusColorSelector', type: 'text', style: { width: '250px' }, placeholder: 'Enter status bar color', value: this.state.customStatusColor, onChange: this.handleCustomStatusColorChange })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return BuildYourOwnAlertExample;
}(_react2.default.Component);

exports.default = BuildYourOwnAlertExample;